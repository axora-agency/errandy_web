import { gql } from "@apollo/client";

export const CREATE_ERRAND_BUNDLE = gql`
  mutation CreateErrandBundle($input: CreateErrandBundleInput!) {
    createErrandBundle(input: $input) {
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
        }
      }
    }
  }
`;
