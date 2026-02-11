import { gql } from "@apollo/client";

export const REMOVE_ERRAND = gql`
  mutation RemoveErrand($id: ID!) {
    removeErrand(id: $id) {
      id
      title
      status
    }
  }
`;
