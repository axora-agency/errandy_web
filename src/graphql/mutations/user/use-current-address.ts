import { gql } from "@apollo/client";

export const USE_CURRENT_ADDRESS = gql`
  mutation UseCurrentAddress($input: CurrentAddressInput!) {
    useCurrentAddress(input: $input) {
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
