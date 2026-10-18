import { gql } from "@apollo/client";

export const COMPLETE_ERRAND = gql`
  mutation CompleteErrand(
    $errandId: String!
    $completedBy: String! = "CLIENT"
  ) {
    completeErrand(errandId: $errandId, completedBy: $completedBy) {
      errandId
      status
    }
  }
`;
