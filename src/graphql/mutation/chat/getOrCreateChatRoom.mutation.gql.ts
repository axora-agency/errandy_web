import { gql } from "@apollo/client";

export const GET_OR_CREATE_CHAT_ROOM = gql`
  mutation GetOrCreateChat($createChatInput: CreateChatInput!) {
    getOrCreateChat(createChatInput: $createChatInput) {
      createdAt
      id
      messages {
        content
        contentUrl
        createdAt
        delivered
        durationMs
        fileName
        fileSize
        height
        id
        mimeType
        reactions {
          emoji
          id
          messageId
          userId
        }
        roomId
        seen
        senderId
        type
        waveform
        width
      }
      unreadCount
      participantIds
      participants {
        id
        name
        image
      }
      updatedAt
    }
  }
`;
