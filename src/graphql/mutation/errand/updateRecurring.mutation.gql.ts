import { gql } from "@apollo/client";

export const UPDATE_RECURRING_ERRAND = gql`
  mutation UpdateRecurringErrand($input: UpdateRecurringErrandInput!) {
    updateRecurringErrand(input: $input) {
      id
      frequency
      nextRunAt
      active
    }
  }
`;
