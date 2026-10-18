import { gql } from "@apollo/client";

export const OPEN_ERRANDS = gql`
  query OpenErrands($input: BrowseOpenErrandsInput!) {
    openErrands(input: $input) {
      items {
        id
        title
        categoryId
        createdAt
        distanceMeters
        budget {
          amountMinorUnits
          currency
        }
      }
    }
  }
`;
