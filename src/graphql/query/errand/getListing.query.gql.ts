import { gql } from "@apollo/client";

export const GET_LISTING = gql`
  query GetListing($id: ID!) {
    listing(id: $id) {
      id
      title
      description
      price
      pricingType
      publishState
      publishedAt
      service {
        id
        name
      }
      providerOrgId
    }
  }
`;
