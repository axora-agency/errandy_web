import { gql } from "@apollo/client";

export const CHAT_MESSAGES = gql`
  query ChatMessages($threadId: String!, $limit: Int, $cursor: String) {
    chatMessages(threadId: $threadId, limit: $limit, cursor: $cursor) {
      items {
        id
        threadId
        senderId
        content
        sentAt
      }
      nextCursor
    }
  }
`;
