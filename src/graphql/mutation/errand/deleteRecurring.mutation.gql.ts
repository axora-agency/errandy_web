import { gql } from "@apollo/client";

export const DELETE_RECURRING_ERRAND = gql`
  mutation DeleteRecurringErrand($id: ID!) {
    deleteRecurringErrand(id: $id) {
      id
    }
  }
`;
