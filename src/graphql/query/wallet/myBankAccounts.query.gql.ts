import { gql } from "@apollo/client";

export const MY_BANK_ACCOUNTS = gql`
  query MyBankAccounts {
    myBankAccounts {
      id
      bankCode
      accountNumber
      accountName
      isDefault
      currency
      isVerified
      createdAt
    }
  }
`;
