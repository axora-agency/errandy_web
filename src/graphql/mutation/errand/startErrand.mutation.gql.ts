import { gql } from "@apollo/client";

export const START_ERRAND = gql`
  mutation StartErrand($errandId: String!, $providerPartyId: String!) {
    startErrand(errandId: $errandId, providerPartyId: $providerPartyId) {
      errandId
      status
    }
  }
`;
