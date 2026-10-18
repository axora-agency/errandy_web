import { gql } from "@apollo/client";

export const SET_DEFAULT_BANK_ACCOUNT = gql`
  mutation SetDefaultBankAccount($id: String!) {
    setDefaultBankAccount(id: $id) {
      id
      isDefault
    }
  }
`;
