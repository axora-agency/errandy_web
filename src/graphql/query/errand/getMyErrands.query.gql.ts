import { gql } from "@apollo/client";

export const GET_MY_ERRANDS = gql`
  query GetMyErrands($input: GetMyErrandsInput!) {
    getMyErrands(input: $input) {
      data {
        id
        title
        description
        status
        pricingType
        price
        hourlyRate
        serviceAddress
        location
        service {
          id
          name
        }
        providerType
        completionDeadline
        createdAt
        updatedAt
        clientId
        assignedTo
        clientName
        clientRating
        distance
        isSaved
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
