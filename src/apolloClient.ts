import {
  ApolloClient,
  InMemoryCache,
  type NormalizedCacheObject,
  gql,
  Observable,
  split,
  ApolloLink,
} from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useGlobalApolloLoading } from "./lib/globalApolloLoading";
import { toast } from "sonner";

loadErrorMessages();
loadDevMessages();

const { VITE_API_URL, VITE_REDIS_URL } = import.meta.env;

const wsLink = new WebSocketLink({
  uri: `${VITE_REDIS_URL}`,
  options: {
    reconnect: true,
    connectionParams: {
      // Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
  },
});

async function refreshToken(client: ApolloClient<NormalizedCacheObject>) {
  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation RefreshToken {
          refreshToken
        }
      `,
    });
    const newAccessToken = data?.refreshToken;
    if (!newAccessToken) {
      console.log("New access token not received.");
    }
    return `Bearer ${newAccessToken}`;
  } catch (err) {
    console.log("Error getting new access token.");
  }
}

const createLoadingLink = () =>
  new ApolloLink((operation, forward) => {
    const includedOperations = new Set([
      "createPasscode",
      "VerifyPasscode",
      "VerifyBiometric",
      "updateUser",
    ]);

    const operationName = operation.operationName;

    const shouldTrack = includedOperations.has(operationName);

    if (shouldTrack) {
      const { increment, decrement } = useGlobalApolloLoading.getState();
      increment();

      return forward(operation).map((response) => {
        decrement();
        return response;
      });
    }

    // If not tracked, just forward the operation
    return forward(operation);
  });

let retryCount = 0;
const maxRetry = 3;

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions?.code) {
          case "UNAUTHENTICATED":
            if (retryCount >= maxRetry) {
              console.warn("Max retry reached. Redirecting to login.");
              // redirect for web
              toast.error("UNAUTHENTICATED");
              return;
            }

            retryCount++;
            return new Observable((observer) => {
              refreshToken(client)
                .then((newToken) => {
                  const oldHeaders = operation.getContext().headers || {};
                  operation.setContext({
                    headers: {
                      ...oldHeaders,
                      authorization: newToken,
                    },
                  });

                  forward(operation).subscribe({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                  });
                })
                .catch((refreshError) => {
                  console.error(
                    "[Auth error]: Token refresh failed",
                    refreshError
                  );
                  observer.error(refreshError);
                });
            });
        }
      }
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  }
);

const uploadLink = createUploadLink({
  uri: `${VITE_API_URL}/graphql`,
  credentials: "include",
  headers: {
    "apollo-require-preflight": "true",
  },
});

export const link = split(
  // Split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  ApolloLink.from([createLoadingLink(), errorLink, uploadLink])
);

export const client = new ApolloClient({
  uri: `${VITE_API_URL}/graphql`,
  cache: new InMemoryCache({}),
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
  link: link,
});
