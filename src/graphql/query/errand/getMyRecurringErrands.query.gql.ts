import { gql } from "@apollo/client";

export const GET_MY_RECURRING_ERRANDS = gql`
  query MyRecurringErrands {
    myRecurringErrands {
      id
      clientId
      templateId
      frequency
      nextRunAt
      active
      template {
        id
        title
        description
        pricingType
        price
        hourlyRate
      }
    }
  }
`;
