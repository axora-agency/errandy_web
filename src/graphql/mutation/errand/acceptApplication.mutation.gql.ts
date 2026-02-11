import { gql } from "@apollo/client";

export const ACCEPT_APPLICATION_MUTATION = gql`
  mutation AcceptApplication($input: AcceptApplicationInput!) {
    acceptApplication(input: $input) {
      id
      status
      assignedTo
      assignedAt
    }
  }
`;

