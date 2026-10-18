import { gql } from "@apollo/client";

export const RESOLVE_DISPUTE = gql`
  mutation ResolveDispute($input: ResolveDisputeInput!) {
    resolveDispute(input: $input)
  }
`;
