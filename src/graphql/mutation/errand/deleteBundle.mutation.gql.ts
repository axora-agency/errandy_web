import { gql } from "@apollo/client";

export const DELETE_ERRAND_BUNDLE = gql`
  mutation DeleteErrandBundle($id: ID!) {
    deleteErrandBundle(id: $id) {
      id
    }
  }
`;
