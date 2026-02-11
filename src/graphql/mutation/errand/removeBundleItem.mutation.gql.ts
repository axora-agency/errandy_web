import { gql } from "@apollo/client";

export const REMOVE_BUNDLE_ITEM = gql`
  mutation RemoveBundleItem($input: RemoveBundleItemInput!) {
    removeBundleItem(input: $input) {
      id
    }
  }
`;
