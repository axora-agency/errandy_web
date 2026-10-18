import { gql } from "@apollo/client";

export const ADD_TRUSTED_MEMBER = gql`
  mutation AddTrustedMember($input: AddTrustedMemberInput!) {
    addTrustedMember(input: $input)
  }
`;

export const REMOVE_TRUSTED_MEMBER = gql`
  mutation RemoveTrustedMember($memberPartyId: String!) {
    removeTrustedMember(memberPartyId: $memberPartyId)
  }
`;

export const LIST_SERVICE = gql`
  mutation ListService($input: ListServiceInput!) {
    listService(input: $input) {
      serviceId
    }
  }
`;

export const DEACTIVATE_SERVICE = gql`
  mutation DeactivateService($serviceId: String!) {
    deactivateService(serviceId: $serviceId) {
      serviceId
    }
  }
`;

export const REQUEST_TIER_UPGRADE = gql`
  mutation RequestTierUpgrade($partyId: String!, $targetTier: ProviderTier!) {
    requestTierUpgrade(partyId: $partyId, targetTier: $targetTier) {
      partyId
      tier
    }
  }
`;
