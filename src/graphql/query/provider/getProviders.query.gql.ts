import { gql } from "@apollo/client";

export const GET_PROVIDERS = gql`
  query GetProviders {
    getProviders {
      popular {
        ...ProviderFields
      }
      new {
        ...ProviderFields
      }
      trusted {
        ...ProviderFields
      }
      suggested {
        ...ProviderFields
      }
    }
  }

  fragment ProviderFields on Provider {
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
`;
