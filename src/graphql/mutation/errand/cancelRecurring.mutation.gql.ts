import { gql } from "@apollo/client";

export const CANCEL_RECURRING_ERRAND = gql`
  mutation CancelRecurringErrand($id: ID!) {
    cancelRecurringErrand(id: $id) {
      id
      active
    }
  }
`;
