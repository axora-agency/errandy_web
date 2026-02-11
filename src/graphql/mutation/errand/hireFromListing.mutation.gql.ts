import { gql } from "@apollo/client";

export const HIRE_FROM_LISTING = gql`
  mutation HireFromListing($templateId: ID!) {
    hireFromListing(templateId: $templateId) {
      id
      title
      description
      status
      sourceType
      providerOrgId
      clientId
      price
      pricingType
      serviceAddress
      location
      createdAt
    }
  }
`;
