import { gql } from "@apollo/client";

export const APPLY_TO_ERRAND_MUTATION = gql`
  mutation Apply($createApplicationInput: CreateApplicationInput!) {
    apply(createApplicationInput: $createApplicationInput) {
      errandId
      id
      status
      workerId
      createdAt
    }
  }
`;
