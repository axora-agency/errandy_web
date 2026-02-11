import { gql } from "@apollo/client";

export const GET_ERRAND_BUNDLES = gql`
  query ErrandBundles {
    errandBundles {
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
          price
          hourlyRate
        }
      }
    }
  }
`;
