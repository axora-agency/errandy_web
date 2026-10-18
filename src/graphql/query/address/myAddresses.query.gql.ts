import { gql } from "@apollo/client";

export const MY_ADDRESSES = gql`
  query MyAddresses {
    myAddresses {
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
      createdAt
      updatedAt
    }
  }
`;
