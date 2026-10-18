import { gql } from "@apollo/client";

export const REQUEST_APPLICATION_ACCEPTANCE = gql`
  mutation RequestApplicationAcceptance(
    $input: RequestApplicationAcceptanceInput!
  ) {
    requestApplicationAcceptance(input: $input) {
      id
      success
    }
  }
`;
