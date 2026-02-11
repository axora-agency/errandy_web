import { gql } from "@apollo/client";

export const UPDATE_ERRAND_BUNDLE = gql`
  mutation UpdateErrandBundle($input: UpdateErrandBundleInput!) {
    updateErrandBundle(input: $input) {
      id
      name
      description
      basePrice
      active
    }
  }
`;
