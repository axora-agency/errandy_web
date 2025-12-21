import { gql } from "@apollo/client";

export const USE_CURRENT_ADDRESS = gql`
  mutation UseCurrentAddress($input: ReverseGeocodeInput!) {
    useCurrentAddress(input: $input) {
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
      updatedAt
      twoFactorEnabled
      phoneNumberVerified
      phoneNumber
      onboardingProgress
    }
  }
`;
