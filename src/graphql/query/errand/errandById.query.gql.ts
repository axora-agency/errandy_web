import { gql } from "@apollo/client";

export const GET_ERRAND_BY_ID = gql`
  query ErrandById($id: String!) {
    errandById(id: $id) {
      id
      title
      description
      categoryId
      addressId
      clientPartyId
      marketId
      requiredTier
      sourceType
      status
      startedAt
      completedAt
      createdAt
      budget {
        amountMinorUnits
        currency
      }
    }
  }
`;
