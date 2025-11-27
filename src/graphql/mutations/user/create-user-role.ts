import { gql } from "@apollo/client";

// TODO: This mutation is not yet implemented in the GraphQL server
// Uncomment when the server implements createUserRole mutation
export const CREATE_USER_ROLE = gql`
  mutation CreateUserRole($role: String!, $id: String!) {
    updateUser(updateUserInput: { id: $id }) {
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
      activeAddressId
      onboardingProgress
    }
  }
`;