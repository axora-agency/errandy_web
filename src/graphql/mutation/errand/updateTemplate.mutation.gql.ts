import { gql } from "@apollo/client";

export const UPDATE_ERRAND_TEMPLATE = gql`
  mutation UpdateErrandTemplate($input: UpdateErrandTemplateInput!) {
    updateErrandTemplate(input: $input) {
      id
      title
      description
      pricingType
      price
      hourlyRate
      serviceId
      providerType
      serviceAddress
      createdAt
    }
  }
`;
