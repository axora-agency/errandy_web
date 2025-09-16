import { gql } from "@apollo/client";

export const CREATE_USER_ROLE = gql`
  mutation CreateUserRole($role: String!) {
    createUserRole(role: $role) {
      username
      updatedAt
      twoFactorEnabled
      phoneNumberVerified
      phoneNumber
      name
      image
      id
      emailVerified
      email
      displayUsername
      createdAt
      country
      activeRole
      activeAddressId
      onboardingProgress
    }
  }
`;