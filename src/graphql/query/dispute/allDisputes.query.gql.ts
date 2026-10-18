import { gql } from "@apollo/client";

export const ALL_DISPUTES = gql`
  query AllDisputes($limit: Int, $status: String) {
    allDisputes(limit: $limit, status: $status) {
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
