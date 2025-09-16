import { ApolloError } from "@apollo/client";

export const extractGraphQLErrors = (error: ApolloError) => {
  return error.graphQLErrors.map((err) => ({
    message: err.message,
    extensions: err.extensions,
    path: err.path,
  }));
};
