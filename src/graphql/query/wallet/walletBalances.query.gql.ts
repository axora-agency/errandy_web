import { gql } from "@apollo/client";

export const WALLET_BALANCES = gql`
  query WalletBalances {
    walletBalances {
      activeMinorUnits
      pendingMinorUnits
      availableMinorUnits
      currency
    }
  }
`;
