import { gql } from "@apollo/client";

export const GET_ERRANDS = gql`
  query GetErrands($input: ErrandQueryInput!) {
    getErrands(input: $input) {
      data {
        id
        title
        description
        status
        pricingType
        price
        hourlyRate
        serviceAddress
        latitude
        longitude
        service
        profession
        workerType
        applicationDeadline
        completionDeadline
        createdAt
        updatedAt
        clientId
        assignedTo
        clientName
        clientRating
        client {
          id
          userId
          user {
            id
            name
            email
            image
          }
        }
        reviews {
          id
          rating
          comment
          reviewerId
          workerId
          errandId
          createdAt
        }
      }
      total
      page
      limit
      totalPages
      hasNextPage
      hasPreviousPage
    }
  }
`;
