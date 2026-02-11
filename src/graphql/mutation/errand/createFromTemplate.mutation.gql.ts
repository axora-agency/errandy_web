import { gql } from "@apollo/client";

export const CREATE_ERRAND_FROM_TEMPLATE = gql`
  mutation CreateErrandFromTemplate($input: CreateErrandFromTemplateInput!) {
    createErrandFromTemplate(input: $input) {
      id
      title
      description
      pricingType
      price
      status
      clientId
    }
  }
`;
