import { gql } from "@apollo/client";

export const LEDGER_HISTORY = gql`
  query LedgerHistory($limit: Float, $cursor: String) {
    ledgerHistory(limit: $limit, cursor: $cursor) {
      entries {
        id
        type
        amountMinorUnits
        currency
        escrowId
        gatewayReference
        createdAt
      }
      nextCursor
    }
  }
`;
