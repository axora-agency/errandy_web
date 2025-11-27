import { gql } from "@apollo/client";

// TODO: This mutation is not yet implemented in the GraphQL server
// Uncomment when the server implements addWorkerServices mutation
export const ADD_WORKER_SERVICES = gql`
  mutation AddWorkerServices($dto: SaveUserAddressInput!) {
    createAddress(input: $dto) {
      address
      createdAt
      id
      label
      latitude
      longitude
      updatedAt
      userId
    }
  }
`;
