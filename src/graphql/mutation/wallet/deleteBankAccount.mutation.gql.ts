import { gql } from "@apollo/client";

export const DELETE_BANK_ACCOUNT = gql`
  mutation DeleteBankAccount($id: String!) {
    deleteBankAccount(id: $id)
  }
`;
