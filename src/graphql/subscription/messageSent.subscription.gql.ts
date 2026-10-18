import { gql } from "@apollo/client";

export const MESSAGE_SENT_SUBSCRIPTION = gql`
  subscription MessageSent($threadId: String!) {
    messageSent(threadId: $threadId) {
      id
      threadId
      senderId
      content
      sentAt
    }
  }
`;
