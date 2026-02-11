import { gql } from "@apollo/client";

export const UPDATE_ERRAND = gql`
  mutation UpdateErrand($updateErrandInput: UpdateErrandInput!) {
    updateErrand(updateErrandInput: $updateErrandInput) {
      providerType
      updatedAt
      title
      status
      serviceId
      serviceAddress
      service {
        name
        type
        id
        categoryId
        category {
          name
          type
          id
        }
      }
      pricingType
      price
      location
      id
      hourlyRate
      transportAllowance
      materialsBudget
      description
      createdAt
      clientId
      assignedTo
      client {
        id
      }
    }
  }
`;
