import { gql } from "@apollo/client";

export const PLACE_DETAILS = gql`
  query PlaceDetails($input: PlaceDetailsInput!) {
    placeDetails(input: $input) {
      formattedAddress
      latitude
      longitude
    }
  }
`;
