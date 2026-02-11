import { gql } from "@apollo/client";

export const GET_MY_ORGANIZATION = gql`
  query GetMyOrganization {
    myOrganization {
      id
      name
      description
      logo
      ownerId
      members {
        id
        role
        user {
          id
          name
          email
          image
        }
      }
    }
  }
`;
