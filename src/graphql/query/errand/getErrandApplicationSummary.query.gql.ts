import { gql } from "@apollo/client";

export const GET_ERRAND_APPLICATION_SUMMARY = gql`
  query ErrandApplicationSummary($errandId: ID!) {
    errandApplicationSummary(errandId: $errandId) {
      totalApplications
      pendingApplications
      acceptedApplications
      cancelledApplications
      rejectedApplications
      chattingApplicants
      myApplicationStatus
    }
  }
`;

