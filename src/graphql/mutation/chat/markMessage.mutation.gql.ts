import { gql } from "@apollo/client";

export const MARK_MESSAGE_AS_DELIVERED = gql`
  mutation MarkMessageAsDelivered($messageId: String!) {
    markMessageAsDelivered(messageId: $messageId) {
      id
      roomId
      senderId
      delivered
      seen
    }
  }
`;

export const MARK_MESSAGE_AS_SEEN = gql`
  mutation MarkMessageAsSeen($messageId: String!) {
    markMessageAsSeen(messageId: $messageId) {
      id
      roomId
      senderId
      delivered
      seen
    }
  }
`;
