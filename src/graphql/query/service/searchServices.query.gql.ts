import { gql } from "@apollo/client";

export const SEARCH_SERVICES = gql`
  query SearchServices(
    $marketId: String!
    $categoryId: String
    $limit: Int
    $cursor: String
  ) {
    searchServices(
      marketId: $marketId
      categoryId: $categoryId
      limit: $limit
      cursor: $cursor
    ) {
      id
      title
      description
      categoryId
      listedById
      price {
        amountMinorUnits
        currency
      }
    }
  }
`;
