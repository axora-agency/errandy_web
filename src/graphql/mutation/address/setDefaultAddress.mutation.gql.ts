import { gql } from "@apollo/client";

export const SET_DEFAULT_ADDRESS = gql`
  mutation SetDefaultAddress($addressId: String!) {
    setDefaultAddress(addressId: $addressId)
  }
`;
