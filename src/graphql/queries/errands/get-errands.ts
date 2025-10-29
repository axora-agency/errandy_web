import { gql } from "@apollo/client";

export const GET_ERRANDS = gql`
  query GetErrands($input: ErrandQueryInput!) {
    getErrands(input: $input) {
      data {
        applicationDeadline
        assignedTo
        clientId
        clientName
        clientRating
        completionDeadline
        createdAt
        description
        hourlyRate
        id
        latitude
        longitude
        price
        pricingType
        profession
        service
        serviceAddress
        status
        title
        updatedAt
        workerType
      }
      hasNextPage
      hasPreviousPage
      limit
      page
      total
      totalPages
    }
  }
`;
