import { gql } from '@apollo/client';

export const GET_USER_SEARCH_HISTORY = gql`
  query GetUserSearchHistory {
    userSearchHistory {
      id
      keyword
      workerId
      createdAt
      updatedAt
    }
  }
`;
