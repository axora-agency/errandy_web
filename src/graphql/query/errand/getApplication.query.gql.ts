import { gql } from "@apollo/client";

export const GET_APPLICATION_QUERY = gql`
  query Application($id: ID!) {
    application(id: $id) {
      id
      errandId
      workerId
      status
      acceptedAt
      createdAt
      worker {
        id
        userId
        user {
          id
          name
          image
          username
        }
      }
    }
  }
`;

