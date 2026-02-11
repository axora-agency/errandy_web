import { gql } from "@apollo/client";

export const ADD_BUNDLE_ITEM = gql`
  mutation AddBundleItem($input: AddBundleItemInput!) {
    addBundleItem(input: $input) {
      id
      template {
        id
        title
      }
    }
  }
`;
