import { gql } from "@apollo/client";

export const MESSAGE_SENT_SUBSCRIPTION = gql`
  subscription MessageSentForUser {
    messageSentForUser {
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
