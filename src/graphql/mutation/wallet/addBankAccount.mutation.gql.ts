import { gql } from "@apollo/client";

export const ADD_BANK_ACCOUNT = gql`
  mutation AddBankAccount($input: AddBankAccountInput!) {
    addBankAccount(input: $input) {
      id
      bankCode
      accountNumber
      accountName
      isDefault
      currency
    }
  }
`;
