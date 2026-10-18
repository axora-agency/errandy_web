import { gql } from "@apollo/client";

export const SUBMIT_RATING = gql`
  mutation SubmitRating($input: SubmitRatingInput!) {
    submitRating(input: $input)
  }
`;
