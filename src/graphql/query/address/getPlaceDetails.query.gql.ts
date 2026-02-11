import { gql } from "@apollo/client";

export const GET_PLACE_DETAILS = gql`
  query GetPlaceDetails($input: PlaceDetailsInput!) {
    placeDetails(input: $input) {
      formattedAddress
      latitude
      longitude
    }
  }
`;
