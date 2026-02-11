import { gql } from "@apollo/client";

export const DISPATCH_ERRAND = gql`
  mutation DispatchErrand($input: DispatchErrandInput!) {
    dispatchErrand(input: $input) {
      id
      errandId
      providerOrgId
      workerId
      role
      status
      assignedAt
    }
  }
`;
