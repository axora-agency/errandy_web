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
    "\n  query GetProfessions {\n    professions {\n      name\n      services\n    }\n  }\n": typeof types.GetProfessionsDocument,
    "\n  query GetServices {\n    services {\n      name\n      services\n    }\n  }\n": typeof types.GetServicesDocument,
    "\n  query GetUser {\n    user {\n      id\n      name\n      email\n      username\n      emailVerified\n      displayUsername\n      activeRole\n      image\n      phoneNumber\n      roles\n    }\n  }\n": typeof types.GetUserDocument,
};
const documents: Documents = {
    "\n  query GetProfessions {\n    professions {\n      name\n      services\n    }\n  }\n": types.GetProfessionsDocument,
    "\n  query GetServices {\n    services {\n      name\n      services\n    }\n  }\n": types.GetServicesDocument,
    "\n  query GetUser {\n    user {\n      id\n      name\n      email\n      username\n      emailVerified\n      displayUsername\n      activeRole\n      image\n      phoneNumber\n      roles\n    }\n  }\n": types.GetUserDocument,
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
export function gql(source: "\n  query GetProfessions {\n    professions {\n      name\n      services\n    }\n  }\n"): (typeof documents)["\n  query GetProfessions {\n    professions {\n      name\n      services\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetServices {\n    services {\n      name\n      services\n    }\n  }\n"): (typeof documents)["\n  query GetServices {\n    services {\n      name\n      services\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUser {\n    user {\n      id\n      name\n      email\n      username\n      emailVerified\n      displayUsername\n      activeRole\n      image\n      phoneNumber\n      roles\n    }\n  }\n"): (typeof documents)["\n  query GetUser {\n    user {\n      id\n      name\n      email\n      username\n      emailVerified\n      displayUsername\n      activeRole\n      image\n      phoneNumber\n      roles\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;