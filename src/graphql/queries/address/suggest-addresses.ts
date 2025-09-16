import { gql } from "@apollo/client";

export const SUGGEST_ADDRESSES = gql`
  query SuggestAddresses($q: String!) {
    suggestAddresses(q: $q) {
      placeId
      description
    }
  }
`;
