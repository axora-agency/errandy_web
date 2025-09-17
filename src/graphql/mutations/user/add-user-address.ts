import { gql } from "@apollo/client";

export const ADD_USER_ADDRESS = gql`
  mutation SaveUserAddress($dto: SaveUserAddressInput!) {
    saveUserAddress(dto: $dto) {
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
      onboardingProgress
      phoneNumber
      phoneNumberVerified
      twoFactorEnabled
      updatedAt
      username
    }
  }
`;
