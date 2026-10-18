import { gql } from "@apollo/client";

export const MY_CHAT_THREADS = gql`
  query MyChatThreads {
    myChatThreads {
      id
      errandId
      participantIds
      createdAt
      closedAt
      firstResponseAt
    }
  }
`;
