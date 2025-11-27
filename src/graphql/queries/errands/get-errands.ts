import { gql } from "@apollo/client";

// TODO: This query is not yet implemented in the GraphQL server
// Uncomment when the server implements getErrands query
export const GET_ERRANDS = gql`
  query GetErrands($input: String!) {
    user {
      id
      name
      email
    }
  }
`;
