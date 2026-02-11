import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation SendMessage($sendMessageInput: SendMessageInput!) {
    sendMessage(sendMessageInput: $sendMessageInput) {
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
  }
`;
