import { gql } from "@apollo/client";

export const CONFIRM_ASSIGNMENT_COMPLETION = gql`
  mutation ConfirmAssignmentCompletion(
    $errandAssignmentId: String!
    $providerPartyId: String!
    $proofUrl: String
  ) {
    confirmAssignmentCompletion(
      errandAssignmentId: $errandAssignmentId
      providerPartyId: $providerPartyId
      proofUrl: $proofUrl
    ) {
      errandAssignmentId
      status
      errandReadyForCompletion
    }
  }
`;
