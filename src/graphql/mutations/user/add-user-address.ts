import { gql } from "@apollo/client";

export const ADD_USER_ADDRESS = gql`
  mutation SaveUserAddress($input: SaveUserAddressInput!) {
    createAddress(input: $input) {
      address
      createdAt
      id
      label
      latitude
      longitude
      updatedAt
      userId
    }
  }
`;
