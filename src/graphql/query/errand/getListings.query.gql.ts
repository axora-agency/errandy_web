import { gql } from "@apollo/client";

export const GET_LISTINGS = gql`
  query GetListings($providerOrgId: ID) {
    listings(providerOrgId: $providerOrgId) {
      id
      title
      description
      pricingType
      price
      hourlyRate
      serviceAddress
      location
      providerOrgId
      publishState
      publishedAt
      isListing
      listingTags
      createdAt
    }
  }
`;
