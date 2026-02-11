import { gql } from "@apollo/client";

// TODO: This mutation is not yet implemented in the GraphQL server
// Uncomment when the server implements addWorkerServices mutation
export const ADD_PROVIDER_SERVICES = gql`
  mutation AddWorkerServices($dto: AddWorkerServicesInput!) {
    addWorkerServices(dto: $dto) {
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
