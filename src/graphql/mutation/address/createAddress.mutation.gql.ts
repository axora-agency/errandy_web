import { gql } from "@apollo/client";

export const CREATE_ADDRESS = gql`
  mutation CreateAddress($input: CreateAddressInput!) {
    createAddress(input: $input) {
      id
      userId
      label
      street
      city
      state
      country
      isDefault
      coordinates {
        latitude
        longitude
      }
    }
  }
`;
