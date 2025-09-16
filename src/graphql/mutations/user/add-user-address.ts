import { gql } from "@apollo/client";

export const ADD_USER_ADDRESS = gql`
  mutation AddUserAddress($dto: AddUserAddressInput!) {
    addUserAddress(dto: $dto) {
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
