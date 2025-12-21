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
    "\n  mutation AddAddress($dto: CreateAddressInput!) {\n    addAddress(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      username\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n    }\n  }\n": typeof types.AddAddressDocument,
    "\n  mutation AddWorkerServices($dto: AddWorkerServicesInput!) {\n    addWorkerServices(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n    }\n  }\n": typeof types.AddWorkerServicesDocument,
    "\n  mutation CreateUserRole($role: String!, $id: String!) {\n    updateUser(updateUserInput: { id: $id }) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeAddressId\n      onboardingProgress\n    }\n  }\n": typeof types.CreateUserRoleDocument,
    "\n  mutation UseCurrentAddress($input: ReverseGeocodeInput!) {\n    useCurrentAddress(input: $input) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      onboardingProgress\n    }\n  }\n": typeof types.UseCurrentAddressDocument,
    "\n  query PlaceDetails($input: PlaceDetailsInput!) {\n    placeDetails(input: $input) {\n      formattedAddress\n      latitude\n      longitude\n    }\n  }\n": typeof types.PlaceDetailsDocument,
    "\n  query SuggestAddresses($input: SuggestAddressInput!) {\n    suggestAddresses(input: $input) {\n      description\n      placeId\n    }\n  }\n": typeof types.SuggestAddressesDocument,
    "\n  query GetErrands($input: ErrandQueryInput!) {\n    getErrands(input: $input) {\n      data {\n        id\n        title\n        description\n        status\n        pricingType\n        price\n        hourlyRate\n        serviceAddress\n        latitude\n        longitude\n        service\n        profession\n        workerType\n        applicationDeadline\n        completionDeadline\n        createdAt\n        updatedAt\n        clientId\n        assignedTo\n        clientName\n        clientRating\n        client {\n          id\n          userId\n          user {\n            id\n            name\n            email\n            image\n          }\n        }\n        reviews {\n          id\n          rating\n          comment\n          reviewerId\n          workerId\n          errandId\n          createdAt\n        }\n      }\n      total\n      page\n      limit\n      totalPages\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n": typeof types.GetErrandsDocument,
    "\n  query ServiceCategories($input: String) {\n    user {\n      id\n      name\n    }\n  }\n": typeof types.ServiceCategoriesDocument,
    "\n  query GetUserSearchHistory {\n    user {\n      id\n      name\n    }\n  }\n": typeof types.GetUserSearchHistoryDocument,
    "\n  query User {\n    user {\n      activeAddressId\n      country\n      activeRole\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n      userAddress {\n        label\n        address\n        id\n      }\n    }\n  }\n": typeof types.UserDocument,
    "\n  subscription ErrandCreated {\n    errandCreated {\n      errand {\n        id\n        title\n        description\n        pricingType\n        price\n        hourlyRate\n        status\n        workerType\n        profession\n        service\n        serviceAddress\n        latitude\n        longitude\n        createdAt\n      }\n      type\n      userId\n      distance\n    }\n  }\n": typeof types.ErrandCreatedDocument,
    "\n  subscription ErrandDeleted {\n    errandDeleted {\n      errand {\n        id\n        title\n      }\n      type\n      userId\n    }\n  }\n": typeof types.ErrandDeletedDocument,
    "\n  subscription ErrandUpdated {\n    errandUpdated {\n      errand {\n        id\n        title\n        description\n        status\n        assignedTo\n        updatedAt\n      }\n      type\n      userId\n    }\n  }\n": typeof types.ErrandUpdatedDocument,
};
const documents: Documents = {
    "\n  mutation AddAddress($dto: CreateAddressInput!) {\n    addAddress(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      username\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n    }\n  }\n": types.AddAddressDocument,
    "\n  mutation AddWorkerServices($dto: AddWorkerServicesInput!) {\n    addWorkerServices(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n    }\n  }\n": types.AddWorkerServicesDocument,
    "\n  mutation CreateUserRole($role: String!, $id: String!) {\n    updateUser(updateUserInput: { id: $id }) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeAddressId\n      onboardingProgress\n    }\n  }\n": types.CreateUserRoleDocument,
    "\n  mutation UseCurrentAddress($input: ReverseGeocodeInput!) {\n    useCurrentAddress(input: $input) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      onboardingProgress\n    }\n  }\n": types.UseCurrentAddressDocument,
    "\n  query PlaceDetails($input: PlaceDetailsInput!) {\n    placeDetails(input: $input) {\n      formattedAddress\n      latitude\n      longitude\n    }\n  }\n": types.PlaceDetailsDocument,
    "\n  query SuggestAddresses($input: SuggestAddressInput!) {\n    suggestAddresses(input: $input) {\n      description\n      placeId\n    }\n  }\n": types.SuggestAddressesDocument,
    "\n  query GetErrands($input: ErrandQueryInput!) {\n    getErrands(input: $input) {\n      data {\n        id\n        title\n        description\n        status\n        pricingType\n        price\n        hourlyRate\n        serviceAddress\n        latitude\n        longitude\n        service\n        profession\n        workerType\n        applicationDeadline\n        completionDeadline\n        createdAt\n        updatedAt\n        clientId\n        assignedTo\n        clientName\n        clientRating\n        client {\n          id\n          userId\n          user {\n            id\n            name\n            email\n            image\n          }\n        }\n        reviews {\n          id\n          rating\n          comment\n          reviewerId\n          workerId\n          errandId\n          createdAt\n        }\n      }\n      total\n      page\n      limit\n      totalPages\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n": types.GetErrandsDocument,
    "\n  query ServiceCategories($input: String) {\n    user {\n      id\n      name\n    }\n  }\n": types.ServiceCategoriesDocument,
    "\n  query GetUserSearchHistory {\n    user {\n      id\n      name\n    }\n  }\n": types.GetUserSearchHistoryDocument,
    "\n  query User {\n    user {\n      activeAddressId\n      country\n      activeRole\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n      onboardingProgress\n      userAddress {\n        label\n        address\n        id\n      }\n    }\n  }\n": types.UserDocument,
    "\n  subscription ErrandCreated {\n    errandCreated {\n      errand {\n        id\n        title\n        description\n        pricingType\n        price\n        hourlyRate\n        status\n        workerType\n        profession\n        service\n        serviceAddress\n        latitude\n        longitude\n        createdAt\n      }\n      type\n      userId\n      distance\n    }\n  }\n": types.ErrandCreatedDocument,
    "\n  subscription ErrandDeleted {\n    errandDeleted {\n      errand {\n        id\n        title\n      }\n      type\n      userId\n    }\n  }\n": types.ErrandDeletedDocument,
    "\n  subscription ErrandUpdated {\n    errandUpdated {\n      errand {\n        id\n        title\n        description\n        status\n        assignedTo\n        updatedAt\n      }\n      type\n      userId\n    }\n  }\n": types.ErrandUpdatedDocument,
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
export function gql(source: "\n  mutation AddAddress($dto: CreateAddressInput!) {\n    addAddress(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      username\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation AddAddress($dto: CreateAddressInput!) {\n    addAddress(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      username\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddWorkerServices($dto: AddWorkerServicesInput!) {\n    addWorkerServices(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation AddWorkerServices($dto: AddWorkerServicesInput!) {\n    addWorkerServices(dto: $dto) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      onboardingProgress\n      phoneNumber\n      phoneNumberVerified\n      twoFactorEnabled\n      updatedAt\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUserRole($role: String!, $id: String!) {\n    updateUser(updateUserInput: { id: $id }) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeAddressId\n      onboardingProgress\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserRole($role: String!, $id: String!) {\n    updateUser(updateUserInput: { id: $id }) {\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      name\n      image\n      id\n      emailVerified\n      email\n      displayUsername\n      createdAt\n      country\n      activeAddressId\n      onboardingProgress\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UseCurrentAddress($input: ReverseGeocodeInput!) {\n    useCurrentAddress(input: $input) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      onboardingProgress\n    }\n  }\n"): (typeof documents)["\n  mutation UseCurrentAddress($input: ReverseGeocodeInput!) {\n    useCurrentAddress(input: $input) {\n      activeAddressId\n      activeRole\n      country\n      createdAt\n      displayUsername\n      email\n      emailVerified\n      id\n      image\n      name\n      username\n      updatedAt\n      twoFactorEnabled\n      phoneNumberVerified\n      phoneNumber\n      onboardingProgress\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PlaceDetails($input: PlaceDetailsInput!) {\n    placeDetails(input: $input) {\n      formattedAddress\n      latitude\n      longitude\n    }\n  }\n"): (typeof documents)["\n  query PlaceDetails($input: PlaceDetailsInput!) {\n    placeDetails(input: $input) {\n      formattedAddress\n      latitude\n      longitude\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SuggestAddresses($input: SuggestAddressInput!) {\n    suggestAddresses(input: $input) {\n      description\n      placeId\n    }\n  }\n"): (typeof documents)["\n  query SuggestAddresses($input: SuggestAddressInput!) {\n    suggestAddresses(input: $input) {\n      description\n      placeId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetErrands($input: ErrandQueryInput!) {\n    getErrands(input: $input) {\n      data {\n        id\n        title\n        description\n        status\n        pricingType\n        price\n        hourlyRate\n        serviceAddress\n        latitude\n        longitude\n        service\n        profession\n        workerType\n        applicationDeadline\n        completionDeadline\n        createdAt\n        updatedAt\n        clientId\n        assignedTo\n        clientName\n        clientRating\n        client {\n          id\n          userId\n          user {\n            id\n            name\n            email\n            image\n          }\n        }\n        reviews {\n          id\n          rating\n          comment\n          reviewerId\n          workerId\n          errandId\n          createdAt\n        }\n      }\n      total\n      page\n      limit\n      totalPages\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n"): (typeof documents)["\n  query GetErrands($input: ErrandQueryInput!) {\n    getErrands(input: $input) {\n      data {\n        id\n        title\n        description\n        status\n        pricingType\n        price\n        hourlyRate\n        serviceAddress\n        latitude\n        longitude\n        service\n        profession\n        workerType\n        applicationDeadline\n        completionDeadline\n        createdAt\n        updatedAt\n        clientId\n        assignedTo\n        clientName\n        clientRating\n        client {\n          id\n          userId\n          user {\n            id\n            name\n            email\n            image\n          }\n        }\n        reviews {\n          id\n          rating\n          comment\n          reviewerId\n          workerId\n          errandId\n          createdAt\n        }\n      }\n      total\n      page\n      limit\n      totalPages\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n"];
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
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription ErrandCreated {\n    errandCreated {\n      errand {\n        id\n        title\n        description\n        pricingType\n        price\n        hourlyRate\n        status\n        workerType\n        profession\n        service\n        serviceAddress\n        latitude\n        longitude\n        createdAt\n      }\n      type\n      userId\n      distance\n    }\n  }\n"): (typeof documents)["\n  subscription ErrandCreated {\n    errandCreated {\n      errand {\n        id\n        title\n        description\n        pricingType\n        price\n        hourlyRate\n        status\n        workerType\n        profession\n        service\n        serviceAddress\n        latitude\n        longitude\n        createdAt\n      }\n      type\n      userId\n      distance\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription ErrandDeleted {\n    errandDeleted {\n      errand {\n        id\n        title\n      }\n      type\n      userId\n    }\n  }\n"): (typeof documents)["\n  subscription ErrandDeleted {\n    errandDeleted {\n      errand {\n        id\n        title\n      }\n      type\n      userId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription ErrandUpdated {\n    errandUpdated {\n      errand {\n        id\n        title\n        description\n        status\n        assignedTo\n        updatedAt\n      }\n      type\n      userId\n    }\n  }\n"): (typeof documents)["\n  subscription ErrandUpdated {\n    errandUpdated {\n      errand {\n        id\n        title\n        description\n        status\n        assignedTo\n        updatedAt\n      }\n      type\n      userId\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;