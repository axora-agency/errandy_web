import { gql } from "@apollo/client";

export const CREATE_ERRAND = gql`
  mutation CreateErrand($input: CreateErrandInput!) {
    createErrand(input: $input) {
      errandId
      status
    }
  }
`;
