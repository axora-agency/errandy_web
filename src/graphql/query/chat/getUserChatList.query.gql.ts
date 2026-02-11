import { gql } from "@apollo/client";

export const GET_USER_CHAT_LIST = gql`
  query getUserChats {
    getUserChats {
      id
      participantIds
      participants {
        id
        name
        image
      }
      createdAt
      updatedAt
      messages {
        id
        roomId
        senderId
        content
        contentUrl
        type
        seen
        delivered
        createdAt
        fileName
        fileSize
        mimeType
        width
        height
        durationMs
        waveform
      }
      unreadCount
      lastMessage {
        content
        type
        seen
        delivered
        sent
        createdAt
        senderId
      }
    }
  }
`;
