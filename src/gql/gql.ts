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
    "\n  mutation AddWorkerServices($dto: AddWorkerServicesInput!) {\n    addWorkerServices(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n    }\n  }\n": typeof types.AddWorkerServicesDocument,
    "\n  mutation CreateUserRole($role: String!) {\n    createUserRole(role: $role) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeRole\n      activeAddressId\n      onboardingProgress\n    }\n  }\n": typeof types.CreateUserRoleDocument,
    "\n  query ServiceCategories($input: GetServiceCategoriesInput) {\n    serviceCategories(input: $input) {\n      services {\n        name\n        type\n        id\n        categoryId\n      }\n      name\n      type\n    }\n  }\n": typeof types.ServiceCategoriesDocument,
    "\n  query User {\n    user {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n    }\n  }\n": typeof types.UserDocument,
};
const documents: Documents = {
    "\n  mutation AddWorkerServices($dto: AddWorkerServicesInput!) {\n    addWorkerServices(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n    }\n  }\n": types.AddWorkerServicesDocument,
    "\n  mutation CreateUserRole($role: String!) {\n    createUserRole(role: $role) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeRole\n      activeAddressId\n      onboardingProgress\n    }\n  }\n": types.CreateUserRoleDocument,
    "\n  query ServiceCategories($input: GetServiceCategoriesInput) {\n    serviceCategories(input: $input) {\n      services {\n        name\n        type\n        id\n        categoryId\n      }\n      name\n      type\n    }\n  }\n": types.ServiceCategoriesDocument,
    "\n  query User {\n    user {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n    }\n  }\n": types.UserDocument,
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
export function gql(source: "\n  mutation AddWorkerServices($dto: AddWorkerServicesInput!) {\n    addWorkerServices(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation AddWorkerServices($dto: AddWorkerServicesInput!) {\n    addWorkerServices(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUserRole($role: String!) {\n    createUserRole(role: $role) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeRole\n      activeAddressId\n      onboardingProgress\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserRole($role: String!) {\n    createUserRole(role: $role) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeRole\n      activeAddressId\n      onboardingProgress\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ServiceCategories($input: GetServiceCategoriesInput) {\n    serviceCategories(input: $input) {\n      services {\n        name\n        type\n        id\n        categoryId\n      }\n      name\n      type\n    }\n  }\n"): (typeof documents)["\n  query ServiceCategories($input: GetServiceCategoriesInput) {\n    serviceCategories(input: $input) {\n      services {\n        name\n        type\n        id\n        categoryId\n      }\n      name\n      type\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query User {\n    user {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n    }\n  }\n"): (typeof documents)["\n  query User {\n    user {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;