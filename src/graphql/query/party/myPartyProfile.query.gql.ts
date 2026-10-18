import { gql } from "@apollo/client";

export const MY_PARTY_PROFILE = gql`
  query MyPartyProfile {
    myPartyProfile {
      partyId
      userId
      kind
      marketId
      hasClientRole
      hasProviderRole
      providerTier
      skills
      bio
    }
  }
`;
