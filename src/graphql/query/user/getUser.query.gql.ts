import { gql } from "@apollo/client";

export const GET_USER = gql`
  query User {
    user {
      activeAddressId
      country
      activeRole
      createdAt
      displayUsername
      email
      emailVerified
      id
      image
      name
      phoneNumber
      phoneNumberVerified
      twoFactorEnabled
      updatedAt
      username
      onboardingProgress
      userAddress {
        label
        address
        id
        location {
          type
          coordinates
        }
      }
    }
  }
`;
