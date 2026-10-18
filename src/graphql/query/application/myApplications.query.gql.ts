import { gql } from "@apollo/client";

export const MY_APPLICATIONS = gql`
  query MyApplications {
    myApplications {
      id
      errandId
      providerPartyId
      proposal
      proposedAmountMinorUnits
      currency
      status
      type
      createdAt
      acceptedAt
      rejectedAt
    }
  }
`;
