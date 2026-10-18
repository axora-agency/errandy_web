import { gql } from "@apollo/client";

export const SUBMIT_VERIFICATION_STEP = gql`
  mutation SubmitVerificationStep($input: SubmitVerificationStepInput!) {
    submitVerificationStep(input: $input)
  }
`;
