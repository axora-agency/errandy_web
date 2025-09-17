import { gql } from "@apollo/client";

export const GET_USER = gql`
  query User {
    user {
      activeAddressId
      activeRole
      country
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
    }
  }
`;
