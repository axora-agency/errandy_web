import { gql } from "@apollo/client";

export const CATEGORY_TREE = gql`
  query CategoryTree($rootId: String) {
    categoryTree(rootId: $rootId) {
      id
      name
      requiredTier
      children {
        id
        name
        requiredTier
      }
    }
  }
`;
