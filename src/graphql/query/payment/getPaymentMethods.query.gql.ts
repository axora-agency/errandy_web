import { gql } from "@apollo/client";

export const GET_PAYMENT_METHODS_QUERY = gql`
  query GetPaymentMethods {
    myPaymentMethods {
      id
      provider
      type
      cardBrand
      last4
      expMonth
      expYear
      isDefault
      verified
    }
  }
`;
