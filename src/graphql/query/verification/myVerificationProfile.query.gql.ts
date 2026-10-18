import { gql } from "@apollo/client";

export const MY_VERIFICATION_PROFILE = gql`
  query MyVerificationProfile {
    myVerificationProfile {
      partyId
      overallStatus
      steps {
        stepType
        status
        documentUrls
        rejectionReason
        reviewedAt
        submittedAt
      }
    }
  }
`;
