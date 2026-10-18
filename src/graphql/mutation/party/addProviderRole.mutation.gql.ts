import { gql } from "@apollo/client";

export const ADD_PROVIDER_ROLE = gql`
  mutation AddProviderRole($partyId: String!) {
    addProviderRole(partyId: $partyId) {
      partyId
      tier
    }
  }
`;
