import { gql } from "@apollo/client";

export const CREATE_ERRANDS_FROM_BUNDLE = gql`
  mutation CreateErrandsFromBundle($input: CreateErrandsFromBundleInput!) {
    createErrandsFromBundle(input: $input) {
      id
      title
      status
    }
  }
`;
