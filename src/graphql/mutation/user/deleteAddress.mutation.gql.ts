import { gql } from "@apollo/client";

export const DELETE_ADDRESS = gql`
  mutation DeleteAddress($addressId: String!) {
    deleteAddress(addressId: $addressId)
  }
`;
