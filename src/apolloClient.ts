import {
  ApolloClient,
  InMemoryCache,
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

const API_URL = import.meta.env.VITE_API_URL || "https://api.errandy.name.ng";
const WS_URL =
  import.meta.env.VITE_REDIS_URL || "wss://api.errandy.name.ng/graphql";

const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: {
    reconnect: true,
    lazy: true,
  },
});

const createLoadingLink = () =>
  new ApolloLink((operation, forward) => {
    const includedOperations = new Set([
      "AddProviderRole",
      "UpdateProviderRole",
      "CreateAddress",
      "CreateErrand",
      "PublishErrand",
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

    return forward(operation);
  });

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions?.code === "UNAUTHENTICATED") {
        toast.error("Session expired. Please sign in again.");
      }
    }
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const uploadLink = createUploadLink({
  uri: `${API_URL}/graphql`,
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
  cache: new InMemoryCache({}),
  link: link,
});
