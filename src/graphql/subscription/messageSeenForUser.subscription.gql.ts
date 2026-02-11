import { gql } from "@apollo/client";

export const MESSAGE_SEEN_SUBSCRIPTION = gql`
  subscription MessageSeenForUser {
    messageSeenForUser {
      id
      roomId
      senderId
      delivered
      seen
    }
  }
`;
