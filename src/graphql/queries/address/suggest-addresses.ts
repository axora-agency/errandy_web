import { gql } from "@apollo/client";

export const SUGGEST_ADDRESSES = gql`
  query SuggestAddresses($input: String!) {
    suggestAddresses(input: $input) {
      suggestions {
        description
        placeId
      }
    }
  }
`;
