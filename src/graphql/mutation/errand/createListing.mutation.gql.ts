import { gql } from "@apollo/client";

export const CREATE_LISTING = gql`
  mutation CreateListing($input: CreateListingInput!) {
    createListing(input: $input) {
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
