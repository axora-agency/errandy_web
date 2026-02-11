import { gql } from "@apollo/client";

export const CREATE_RECURRING_ERRAND = gql`
  mutation CreateRecurringErrand($input: CreateRecurringErrandInput!) {
    createRecurringErrand(input: $input) {
      id
      clientId
      templateId
      frequency
      nextRunAt
      active
      template {
        id
        title
      }
    }
  }
`;
