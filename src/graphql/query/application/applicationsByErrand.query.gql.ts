import { gql } from "@apollo/client";

export const APPLICATIONS_BY_ERRAND = gql`
  query ApplicationsByErrand($errandId: String!) {
    applicationsByErrand(errandId: $errandId) {
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
