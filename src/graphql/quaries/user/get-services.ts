import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
  query ServiceCategories($input: GetServiceCategoriesInput) {
    serviceCategories(input: $input) {
      services {
        name
        type
        id
        categoryId
      }
      name
      type
    }
  }
`;
