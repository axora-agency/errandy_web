import { gql } from "@apollo/client";

export const PUBLISH_ERRAND = gql`
  mutation PublishErrand($errandId: String!) {
    publishErrand(errandId: $errandId) {
      errandId
      status
    }
  }
`;
