import { gql } from "@apollo/client";

export const INITIALIZE_PAYMENT_METHOD_MUTATION = gql`
  mutation InitializePaymentMethod($provider: String) {
    initializePaymentMethod(provider: $provider) {
      status
      message
      data {
        authorization_url
        access_code
        reference
      }
    }
  }
`;
