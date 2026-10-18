import { gql } from "@apollo/client";

export const MY_DISPUTES = gql`
  query MyDisputes {
    myDisputes {
      id
      errandId
      raisedById
      reason
      description
      evidenceUrls
      status
      resolution
      resolvedAt
      createdAt
    }
  }
`;
