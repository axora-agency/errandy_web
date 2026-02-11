import { gql } from "@apollo/client";

export const CREATE_ERRAND = gql`
  mutation CreateErrand($createErrandInput: CreateErrandInput!) {
    createErrand(createErrandInput: $createErrandInput) {
      client {
        userId
        id
      }
      createdAt
      description
      hourlyRate
      id
      price
      pricingType
      service {
        id
        name
      }
      serviceAddress
      title
      status
      updatedAt
      providerType
    }
  }
`;
