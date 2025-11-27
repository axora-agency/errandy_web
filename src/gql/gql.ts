/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation SaveUserAddress($input: SaveUserAddressInput!) {\n    createAddress(input: $input) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n": typeof types.SaveUserAddressDocument,
    "\n  mutation AddWorkerServices($dto: SaveUserAddressInput!) {\n    createAddress(input: $dto) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n": typeof types.AddWorkerServicesDocument,
    "\n  mutation CreateUserRole($role: String!, $id: String!) {\n    updateUser(updateUserInput: { id: $id }) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeAddressId\n      onboardingProgress\n    }\n  }\n": typeof types.CreateUserRoleDocument,
    "\n  mutation UseCurrentAddress($input: CurrentAddressInput!) {\n    useCurrentAddress(input: $input) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n": typeof types.UseCurrentAddressDocument,
    "\n  mutation PlaceDetails($placeId: String!) {\n    placeDetails(placeId: $placeId) {\n      formattedAddress\n      latitude\n      longitude\n    }\n  }\n": typeof types.PlaceDetailsDocument,
    "\n  query SuggestAddresses($input: String!) {\n    suggestAddresses(input: $input) {\n      suggestions {\n        description\n        placeId\n      }\n    }\n  }\n": typeof types.SuggestAddressesDocument,
    "\n  query GetErrands($input: String!) {\n    user {\n      id\n      name\n      email\n    }\n  }\n": typeof types.GetErrandsDocument,
    "\n  query ServiceCategories($input: String) {\n    user {\n      id\n      name\n    }\n  }\n": typeof types.ServiceCategoriesDocument,
    "\n  query GetUserSearchHistory {\n    user {\n      id\n      name\n    }\n  }\n": typeof types.GetUserSearchHistoryDocument,
    "\n  query User {\n    user {\n      activeAddressId\n      country\n      activeRole\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n      userAddress {\n        label\n        address\n        id\n      }\n    }\n  }\n": typeof types.UserDocument,
};
const documents: Documents = {
    "\n  mutation SaveUserAddress($input: SaveUserAddressInput!) {\n    createAddress(input: $input) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n": types.SaveUserAddressDocument,
    "\n  mutation AddWorkerServices($dto: SaveUserAddressInput!) {\n    createAddress(input: $dto) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n": types.AddWorkerServicesDocument,
    "\n  mutation CreateUserRole($role: String!, $id: String!) {\n    updateUser(updateUserInput: { id: $id }) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeAddressId\n      onboardingProgress\n    }\n  }\n": types.CreateUserRoleDocument,
    "\n  mutation UseCurrentAddress($input: CurrentAddressInput!) {\n    useCurrentAddress(input: $input) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n": types.UseCurrentAddressDocument,
    "\n  mutation PlaceDetails($placeId: String!) {\n    placeDetails(placeId: $placeId) {\n      formattedAddress\n      latitude\n      longitude\n    }\n  }\n": types.PlaceDetailsDocument,
    "\n  query SuggestAddresses($input: String!) {\n    suggestAddresses(input: $input) {\n      suggestions {\n        description\n        placeId\n      }\n    }\n  }\n": types.SuggestAddressesDocument,
    "\n  query GetErrands($input: String!) {\n    user {\n      id\n      name\n      email\n    }\n  }\n": types.GetErrandsDocument,
    "\n  query ServiceCategories($input: String) {\n    user {\n      id\n      name\n    }\n  }\n": types.ServiceCategoriesDocument,
    "\n  query GetUserSearchHistory {\n    user {\n      id\n      name\n    }\n  }\n": types.GetUserSearchHistoryDocument,
    "\n  query User {\n    user {\n      activeAddressId\n      country\n      activeRole\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n      userAddress {\n        label\n        address\n        id\n      }\n    }\n  }\n": types.UserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SaveUserAddress($input: SaveUserAddressInput!) {\n    createAddress(input: $input) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation SaveUserAddress($input: SaveUserAddressInput!) {\n    createAddress(input: $input) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddWorkerServices($dto: SaveUserAddressInput!) {\n    createAddress(input: $dto) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation AddWorkerServices($dto: SaveUserAddressInput!) {\n    createAddress(input: $dto) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUserRole($role: String!, $id: String!) {\n    updateUser(updateUserInput: { id: $id }) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeAddressId\n      onboardingProgress\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserRole($role: String!, $id: String!) {\n    updateUser(updateUserInput: { id: $id }) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeAddressId\n      onboardingProgress\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UseCurrentAddress($input: CurrentAddressInput!) {\n    useCurrentAddress(input: $input) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n"): (typeof documents)["\n  mutation UseCurrentAddress($input: CurrentAddressInput!) {\n    useCurrentAddress(input: $input) {\n      address\n      createdAt\n      id\n      label\n      latitude\n      longitude\n      updatedAt\n      userId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation PlaceDetails($placeId: String!) {\n    placeDetails(placeId: $placeId) {\n      formattedAddress\n      latitude\n      longitude\n    }\n  }\n"): (typeof documents)["\n  mutation PlaceDetails($placeId: String!) {\n    placeDetails(placeId: $placeId) {\n      formattedAddress\n      latitude\n      longitude\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SuggestAddresses($input: String!) {\n    suggestAddresses(input: $input) {\n      suggestions {\n        description\n        placeId\n      }\n    }\n  }\n"): (typeof documents)["\n  query SuggestAddresses($input: String!) {\n    suggestAddresses(input: $input) {\n      suggestions {\n        description\n        placeId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetErrands($input: String!) {\n    user {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  query GetErrands($input: String!) {\n    user {\n      id\n      name\n      email\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ServiceCategories($input: String) {\n    user {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query ServiceCategories($input: String) {\n    user {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserSearchHistory {\n    user {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetUserSearchHistory {\n    user {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query User {\n    user {\n      activeAddressId\n      country\n      activeRole\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n      userAddress {\n        label\n        address\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query User {\n    user {\n      activeAddressId\n      country\n      activeRole\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n      userAddress {\n        label\n        address\n        id\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;