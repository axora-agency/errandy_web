import { gql } from "@apollo/client";

export const UPDATE_PROVIDER_ROLE = gql`
  mutation UpdateProviderRole(
    $partyId: String!
    $input: UpdateProviderRoleInput!
  ) {
    updateProviderRole(partyId: $partyId, input: $input) {
      partyId
      tier
      skills
      bio
    }
  }
`;
