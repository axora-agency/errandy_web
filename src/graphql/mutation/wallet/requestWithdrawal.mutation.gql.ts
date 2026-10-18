import { gql } from "@apollo/client";

export const REQUEST_WITHDRAWAL = gql`
  mutation RequestWithdrawal($input: RequestWithdrawalInput!) {
    requestWithdrawal(input: $input) {
      success
      gatewayReference
      message
    }
  }
`;
