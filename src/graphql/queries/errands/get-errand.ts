import { gql } from "@apollo/client";

export const GET_ERRAND_QUERY = gql`
  query Errand($errandId: ID!) {
    errand(id: $errandId) {
      title
      status
      serviceAddress
      workerType
      updatedAt
      service
      reviews {
        comment
        createdAt
        errandId
        id
        rating
        reviewerId
        workerId
      }
      profession
      pricingType
      price
      id
      hourlyRate
      description
      createdAt
      completionDeadline
      clientId
      applicationDeadline
      assignedTo
      client {
        user {
          name
          image
          username
          email
        }
      }
    }
  }
`;
