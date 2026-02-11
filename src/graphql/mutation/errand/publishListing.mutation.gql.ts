import { gql } from "@apollo/client";

export const PUBLISH_LISTING = gql`
  mutation PublishListing($id: ID!) {
    publishListing(id: $id) {
      id
      title
      publishState
      publishedAt
      isListing
    }
  }
`;
