import { gql } from "@apollo/client";

export const VERIFY_AND_SAVE_PAYMENT_METHOD_MUTATION = gql`
  mutation VerifyAndSavePaymentMethod($reference: String!, $provider: String) {
    verifyAndSavePaymentMethod(reference: $reference, provider: $provider) {
      id
      cardBrand
      last4
      isDefault
      verified
    }
  }
`;
