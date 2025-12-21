import { gql } from "@apollo/client";

export const ADD_USER_ADDRESS = gql`
  mutation AddAddress($dto: CreateAddressInput!) {
    addAddress(dto: $dto) {
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
      username
      onboardingProgress
      phoneNumber
      phoneNumberVerified
      twoFactorEnabled
      updatedAt
    }
  }
`;
