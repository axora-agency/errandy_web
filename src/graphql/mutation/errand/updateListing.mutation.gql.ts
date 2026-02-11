import { gql } from "@apollo/client";

export const UPDATE_LISTING = gql`
  mutation UpdateListing($input: UpdateListingInput!) {
    updateListing(input: $input) {
      id
      title
      description
      pricingType
      price
      hourlyRate
      serviceAddress
      location
      publishState
      publishedAt
      listingTags
    }
  }
`;
