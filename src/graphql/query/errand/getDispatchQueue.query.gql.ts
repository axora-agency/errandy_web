import { gql } from "@apollo/client";

export const GET_DISPATCH_QUEUE = gql`
  query GetDispatchQueue($providerOrgId: ID!) {
    dispatchQueue(providerOrgId: $providerOrgId) {
      id
      title
      description
      status
      sourceType
      providerOrgId
      clientId
      price
      pricingType
      serviceAddress
      location
      createdAt
      client {
        userId
        user {
          id
          name
          image
        }
      }
    }
  }
`;
