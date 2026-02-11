import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
  query ServiceCategories($input: GetServiceCategoriesInput) {
    serviceCategories(input: $input) {
      id
      name
      type
      services {
        id
        name
        type
        categoryId
      }
    }
  }
`;
