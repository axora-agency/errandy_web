import { gql } from "@apollo/client";

export const SEARCH_PROVIDERS_BY_SERVICE = gql`
  query SearchProvidersByService($service: String!, $limit: Float) {
    searchProvidersByService(service: $service, limit: $limit) {
      providers {
        partyId
        tier
        bio
        skills
        completedErrandsCount
        avgRatingCached
        trustedByCount
      }
    }
  }
`;

export const MY_TRUSTED_CIRCLE = gql`
  query MyTrustedCircle {
    myTrustedCircle {
      id
      ownerPartyId
      createdAt
      updatedAt
      members {
        memberId
        status
        addedAt
        sharedFromPartyId
      }
    }
  }
`;
