import { gql } from "@apollo/client";

export const GET_MY_ERRANDS = gql`
  query MyErrands($role: String, $status: String) {
    myErrands(role: $role, status: $status) {
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
