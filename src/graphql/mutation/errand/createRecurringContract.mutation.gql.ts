import { gql } from "@apollo/client";

export const CREATE_RECURRING_CONTRACT_FROM_LISTING = gql`
  mutation CreateRecurringContract($templateId: ID!, $frequency: String!) {
    createRecurringContractFromListing(
      templateId: $templateId
      frequency: $frequency
    ) {
      id
      clientId
      providerOrgId
      templateId
      frequency
      nextRunAt
      active
      providerPreAccepted
      acceptedAt
      template {
        id
        title
        description
        price
        pricingType
      }
    }
  }
`;
