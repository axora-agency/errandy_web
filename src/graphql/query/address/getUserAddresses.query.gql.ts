import { gql } from "@apollo/client";

export const GET_USER_ADDRESSES = gql`
  query GetUserAddresses {
    getUserAddresses {
      address
      createdAt
      id
      label
      updatedAt
      userId
      location {
        type
        coordinates
      }
    }
  }
`;
