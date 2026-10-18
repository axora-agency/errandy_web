import { gql } from "@apollo/client";

export const PUBLIC_PROVIDER_PROFILE = gql`
  query PublicProviderProfile($partyId: String!) {
    publicProviderProfile(partyId: $partyId) {
      partyId
      tier
      bio
      skills
      completedErrandsCount
      avgRatingCached
      trustedByCount
    }
  }
`;
