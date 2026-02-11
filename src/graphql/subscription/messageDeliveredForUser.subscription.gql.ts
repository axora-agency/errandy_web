import { gql } from "@apollo/client";

export const MESSAGE_DELIVERED_SUBSCRIPTION = gql`
  subscription MessageDeliveredForUser {
    messageDeliveredForUser {
      id
      roomId
      senderId
      delivered
      seen
    }
  }
`;
