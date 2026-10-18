import { gql } from "@apollo/client";

export const OPEN_DISPUTE = gql`
  mutation OpenDispute($input: OpenDisputeInput!) {
    openDispute(input: $input)
  }
`;
