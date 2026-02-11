import { gql } from "@apollo/client";

export const CREATE_ERRAND_TEMPLATE = gql`
  mutation CreateErrandTemplate($input: CreateErrandTemplateInput!) {
    createErrandTemplate(input: $input) {
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
