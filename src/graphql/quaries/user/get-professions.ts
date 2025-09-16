import { gql } from "@apollo/client";

export const GET_PROFESSIONS = gql`
  query GetProfessions {
    professions {
      name
      services
    }
  }
`;