import { gql } from "@apollo/client";

export const GET_ERRAND_APPLICATIONS = gql`
  query ErrandApplications($errandId: ID!) {
    errandApplications(errandId: $errandId) {
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

