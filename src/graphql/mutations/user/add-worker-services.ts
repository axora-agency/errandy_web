import { gql } from "@apollo/client";

export const ADD_WORKER_SERVICES = gql`
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
