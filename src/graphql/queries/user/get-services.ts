import { gql } from "@apollo/client";

// TODO: This query is not yet implemented in the GraphQL server
// Uncomment when the server implements serviceCategories query
export const GET_SERVICES = gql`
  query ServiceCategories($input: String) {
    user {
      id
      name
    }
  }
`;
