import { gql } from "@apollo/client";

export const DELETE_ERRAND_TEMPLATE = gql`
  mutation DeleteErrandTemplate($id: ID!) {
    deleteErrandTemplate(id: $id) {
      id
    }
  }
`;
