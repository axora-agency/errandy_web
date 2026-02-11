import { gql } from '@apollo/client';

// TODO: This query is not yet implemented in the GraphQL server
// Uncomment when the server implements userSearchHistory query
export const GET_USER_SEARCH_HISTORY = gql`
  query GetUserSearchHistory {
    user {
      id
      name
    }
  }
`;
