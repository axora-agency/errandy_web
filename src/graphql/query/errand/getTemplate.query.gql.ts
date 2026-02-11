import { gql } from "@apollo/client";

export const GET_ERRAND_TEMPLATE = gql`
  query ErrandTemplate($id: ID!) {
    errandTemplate(id: $id) {
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
