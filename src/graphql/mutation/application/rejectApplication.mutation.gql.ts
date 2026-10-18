import { gql } from "@apollo/client";

export const REJECT_APPLICATION = gql`
  mutation RejectApplication($applicationId: String!, $errandId: String!) {
    rejectApplication(applicationId: $applicationId, errandId: $errandId) {
      id
      success
    }
  }
`;
