import { gql } from "@apollo/client";

export const SEARCH_PROVIDERS = gql`
  query SearchProviders($input: SearchProvidersInput!) {
    searchProviders(input: $input) {
      id
      userId
      tier
      tierUpdatedAt
      providerType
      user {
        id
        name
        email
        image
      }
      activeAddress {
        id
        address
        label
      }
      services {
        id
        name
      }
      rating {
        averageRating
        totalReviews
      }
    }
  }
`;
