import { gql } from "@apollo/client";

export const GET_ERRAND_BUNDLE = gql`
  query ErrandBundle($id: ID!) {
    errandBundle(id: $id) {
      id
      name
      description
      basePrice
      active
      items {
        id
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
  }
`;
