import { gql } from "@apollo/client";

export const SUGGEST_ADDRESSES = gql`
  query SuggestAddresses($input: SuggestAddressInput!) {
    suggestAddresses(input: $input) {
      description
      placeId
    }
  }
`;
