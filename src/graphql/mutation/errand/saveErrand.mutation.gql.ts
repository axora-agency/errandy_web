import { gql } from "@apollo/client";

export const SAVE_ERRAND_MUTATION = gql`
  mutation SaveErrand($errandId: ID!) {
    saveErrand(errandId: $errandId) {
      errandId
      id
      userId
    }
  }
`;
