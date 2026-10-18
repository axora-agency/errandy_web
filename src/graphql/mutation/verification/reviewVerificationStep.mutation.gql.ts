import { gql } from "@apollo/client";

export const REVIEW_VERIFICATION_STEP = gql`
  mutation ReviewVerificationStep($input: ReviewVerificationStepInput!) {
    reviewVerificationStep(input: $input)
  }
`;
