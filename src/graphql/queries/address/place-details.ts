import { gql } from "@apollo/client";

export const PLACE_DETAILS = gql`
  mutation PlaceDetails($placeId: String!) {
    placeDetails(placeId: $placeId) {
      formattedAddress
      latitude
      longitude
    }
  }
`;