import { gql } from "@apollo/client";

export const GET_MY_ERRAND_TEMPLATES = gql`
  query MyErrandTemplates {
    myErrandTemplates {
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
