/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AddWorkerServicesInput = {
  serviceIds: Array<Scalars['ID']['input']>;
};

export type AddressDetails = {
  __typename?: 'AddressDetails';
  formattedAddress: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type AddressSuggestion = {
  __typename?: 'AddressSuggestion';
  description: Scalars['String']['output'];
  placeId: Scalars['String']['output'];
};

export type Application = {
  __typename?: 'Application';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type Chat = {
  __typename?: 'Chat';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type Client = {
  __typename?: 'Client';
  errands: Array<Errand>;
  id: Scalars['ID']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type CreateAddressInput = {
  address: Scalars['String']['input'];
  label: Scalars['String']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type CreateApplicationInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateChatInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateErrandInput = {
  /** Errand title */
  title: Scalars['String']['input'];
};

export type CreateReviewInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateWalletInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Errand = {
  __typename?: 'Errand';
  applicationDeadline?: Maybe<Scalars['DateTime']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  client: Client;
  clientId: Scalars['String']['output'];
  completionDeadline?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hourlyRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  pricingType: PricingType;
  profession?: Maybe<Scalars['String']['output']>;
  reviews: Array<Review>;
  service?: Maybe<Scalars['String']['output']>;
  serviceAddress?: Maybe<Scalars['String']['output']>;
  status: ErrandStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workerType?: Maybe<WorkerType>;
};

export type ErrandQueryInput = {
  /** Maximum distance in kilometers for location filtering */
  maxDistanceKm?: InputMaybe<Scalars['Float']['input']>;
  /** Pagination parameters */
  pagination?: InputMaybe<PaginationInput>;
  /** Search keyword for title, description, or category filtering */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Type of errand feed to retrieve */
  type?: Scalars['String']['input'];
};

export type ErrandStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'DRAFT'
  | 'IN_PROGRESS'
  | 'OPEN';

export type ErrandSubscriptionPayload = {
  __typename?: 'ErrandSubscriptionPayload';
  distance?: Maybe<Scalars['Float']['output']>;
  errand: Errand;
  type: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type ErrandWithClient = {
  __typename?: 'ErrandWithClient';
  applicationDeadline?: Maybe<Scalars['DateTime']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  client: Client;
  clientId: Scalars['String']['output'];
  clientName?: Maybe<Scalars['String']['output']>;
  clientRating?: Maybe<Scalars['Float']['output']>;
  completionDeadline?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hourlyRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  pricingType: PricingType;
  profession?: Maybe<Scalars['String']['output']>;
  reviews: Array<Review>;
  service?: Maybe<Scalars['String']['output']>;
  serviceAddress?: Maybe<Scalars['String']['output']>;
  status: ErrandStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workerType?: Maybe<WorkerType>;
};

export type GeoPoint = {
  __typename?: 'GeoPoint';
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type GetAllErrandInput = {
  maxDistanceKm?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type GetServiceCategoriesInput = {
  type?: InputMaybe<ServiceCategoryType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress: User;
  addWorkerServices: User;
  /** Clear user search history */
  clearSearchHistory: Scalars['Boolean']['output'];
  createApplication: Application;
  createChat: Chat;
  createErrand: Errand;
  createReview: Review;
  createUserRole: User;
  createWallet: Wallet;
  removeApplication: Application;
  removeChat: Chat;
  removeErrand: Errand;
  removeReview: Review;
  removeWallet: Wallet;
  saveUserAddress: User;
  updateApplication: Application;
  updateChat: Chat;
  updateErrand: Errand;
  updateReview: Review;
  updateUser: User;
  updateWallet: Wallet;
  useCurrentAddress: User;
};


export type MutationAddAddressArgs = {
  dto: CreateAddressInput;
};


export type MutationAddWorkerServicesArgs = {
  dto: AddWorkerServicesInput;
};


export type MutationCreateApplicationArgs = {
  createApplicationInput: CreateApplicationInput;
};


export type MutationCreateChatArgs = {
  createChatInput: CreateChatInput;
};


export type MutationCreateErrandArgs = {
  createErrandInput: CreateErrandInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationCreateUserRoleArgs = {
  role: Scalars['String']['input'];
};


export type MutationCreateWalletArgs = {
  createWalletInput: CreateWalletInput;
};


export type MutationRemoveApplicationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveChatArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveErrandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveWalletArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSaveUserAddressArgs = {
  dto: SaveUserAddressInput;
};


export type MutationUpdateApplicationArgs = {
  updateApplicationInput: UpdateApplicationInput;
};


export type MutationUpdateChatArgs = {
  updateChatInput: UpdateChatInput;
};


export type MutationUpdateErrandArgs = {
  updateErrandInput: UpdateErrandInput;
};


export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateWalletArgs = {
  updateWalletInput: UpdateWalletInput;
};


export type MutationUseCurrentAddressArgs = {
  input: ReverseGeocodeInput;
};

export type OnboardingProgress =
  | 'ADDRESS_ADDED'
  | 'COMPLETED'
  | 'NONE'
  | 'ROLE_SELECTED'
  | 'SERVICES_SELECTED';

export type PaginatedErrands = {
  __typename?: 'PaginatedErrands';
  data: Array<ErrandWithClient>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
};

export type PlaceDetailsInput = {
  placeId: Scalars['String']['input'];
};

export type PricingType =
  | 'FIXED'
  | 'HOURLY';

export type Query = {
  __typename?: 'Query';
  application: Application;
  chat: Chat;
  errand: Errand;
  errands: Array<Errand>;
  /** Advanced errand query with personalized feeds and location-based filtering */
  getErrands: PaginatedErrands;
  placeDetails: AddressDetails;
  review: Review;
  service: Service;
  serviceCategories: Array<ServiceCategory>;
  services: Array<Service>;
  suggestAddresses: Array<AddressSuggestion>;
  user: User;
  /** Get user search history for workers */
  userSearchHistory: Array<Search>;
  wallet: Wallet;
};


export type QueryApplicationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryChatArgs = {
  id: Scalars['Int']['input'];
};


export type QueryErrandArgs = {
  id: Scalars['ID']['input'];
};


export type QueryErrandsArgs = {
  dto: GetAllErrandInput;
};


export type QueryGetErrandsArgs = {
  input: ErrandQueryInput;
};


export type QueryPlaceDetailsArgs = {
  input: PlaceDetailsInput;
};


export type QueryReviewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryServiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceCategoriesArgs = {
  input?: InputMaybe<GetServiceCategoriesInput>;
};


export type QueryServicesArgs = {
  categoryType?: InputMaybe<ServiceCategoryType>;
};


export type QuerySuggestAddressesArgs = {
  input: SuggestAddressInput;
};


export type QueryWalletArgs = {
  id: Scalars['Int']['input'];
};

export type ReverseGeocodeInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  errandId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  reviewerId: Scalars['String']['output'];
  workerId: Scalars['String']['output'];
};

export type SaveUserAddressInput = {
  address: Scalars['String']['input'];
  label: Scalars['String']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Search = {
  __typename?: 'Search';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  keyword: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workerId?: Maybe<Scalars['ID']['output']>;
};

export type Service = {
  __typename?: 'Service';
  category?: Maybe<ServiceCategory>;
  categoryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: ServiceCategoryType;
};

export type ServiceCategory = {
  __typename?: 'ServiceCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  services?: Maybe<Array<Service>>;
  type: ServiceCategoryType;
};

export type ServiceCategoryType =
  | 'CASUAL'
  | 'PROFESSIONAL';

export type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe to new errands created nearby */
  errandCreated: ErrandSubscriptionPayload;
  /** Subscribe to errand deletions */
  errandDeleted: ErrandSubscriptionPayload;
  /** Subscribe to errand updates */
  errandUpdated: ErrandSubscriptionPayload;
};

export type SuggestAddressInput = {
  input: Scalars['String']['input'];
};

export type UpdateApplicationInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateChatInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateErrandInput = {
  applicationDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  completionDeadline?: InputMaybe<Scalars['DateTime']['input']>;
  /** Errand description */
  description?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  pricingType?: InputMaybe<PricingType>;
  profession?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<Scalars['String']['input']>;
  serviceAddress?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ErrandStatus>;
  /** Errand title */
  title?: InputMaybe<Scalars['String']['input']>;
  workerType?: InputMaybe<WorkerType>;
};

export type UpdateReviewInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  displayUsername?: InputMaybe<Scalars['String']['input']>;
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWalletInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  activeAddressId?: Maybe<Scalars['ID']['output']>;
  activeRole?: Maybe<UserRole>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayUsername?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  onboardingProgress: OnboardingProgress;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  twoFactorEnabled?: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userAddress?: Maybe<Array<Maybe<UserAddress>>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  address: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  location: GeoPoint;
  userId: Scalars['String']['output'];
};

export type UserRole =
  | 'CLIENT'
  | 'WORKER';

export type Wallet = {
  __typename?: 'Wallet';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type WorkerType =
  | 'GENERAL'
  | 'PROFESSIONAL';

export type AddAddressMutationVariables = Exact<{
  dto: CreateAddressInput;
}>;


export type AddAddressMutation = { __typename?: 'Mutation', addAddress: { __typename?: 'User', activeAddressId?: string | null, activeRole?: UserRole | null, country?: string | null, createdAt: any, displayUsername?: string | null, email: string, emailVerified: boolean, id: string, image?: string | null, name: string, username?: string | null, onboardingProgress: OnboardingProgress, phoneNumber?: string | null, phoneNumberVerified?: boolean | null, twoFactorEnabled?: boolean | null, updatedAt: any } };

export type AddWorkerServicesMutationVariables = Exact<{
  dto: AddWorkerServicesInput;
}>;


export type AddWorkerServicesMutation = { __typename?: 'Mutation', addWorkerServices: { __typename?: 'User', activeAddressId?: string | null, activeRole?: UserRole | null, country?: string | null, createdAt: any, displayUsername?: string | null, email: string, emailVerified: boolean, id: string, image?: string | null, name: string, onboardingProgress: OnboardingProgress, phoneNumber?: string | null, phoneNumberVerified?: boolean | null, twoFactorEnabled?: boolean | null, updatedAt: any, username?: string | null } };

export type CreateUserRoleMutationVariables = Exact<{
  role: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type CreateUserRoleMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', username?: string | null, updatedAt: any, twoFactorEnabled?: boolean | null, phoneNumberVerified?: boolean | null, phoneNumber?: string | null, name: string, image?: string | null, id: string, emailVerified: boolean, email: string, displayUsername?: string | null, createdAt: any, country?: string | null, activeAddressId?: string | null, onboardingProgress: OnboardingProgress } };

export type UseCurrentAddressMutationVariables = Exact<{
  input: ReverseGeocodeInput;
}>;


export type UseCurrentAddressMutation = { __typename?: 'Mutation', useCurrentAddress: { __typename?: 'User', activeAddressId?: string | null, activeRole?: UserRole | null, country?: string | null, createdAt: any, displayUsername?: string | null, email: string, emailVerified: boolean, id: string, image?: string | null, name: string, username?: string | null, updatedAt: any, twoFactorEnabled?: boolean | null, phoneNumberVerified?: boolean | null, phoneNumber?: string | null, onboardingProgress: OnboardingProgress } };

export type PlaceDetailsQueryVariables = Exact<{
  input: PlaceDetailsInput;
}>;


export type PlaceDetailsQuery = { __typename?: 'Query', placeDetails: { __typename?: 'AddressDetails', formattedAddress: string, latitude: number, longitude: number } };

export type SuggestAddressesQueryVariables = Exact<{
  input: SuggestAddressInput;
}>;


export type SuggestAddressesQuery = { __typename?: 'Query', suggestAddresses: Array<{ __typename?: 'AddressSuggestion', description: string, placeId: string }> };

export type GetErrandsQueryVariables = Exact<{
  input: ErrandQueryInput;
}>;


export type GetErrandsQuery = { __typename?: 'Query', getErrands: { __typename?: 'PaginatedErrands', total: number, page: number, limit: number, totalPages: number, hasNextPage: boolean, hasPreviousPage: boolean, data: Array<{ __typename?: 'ErrandWithClient', id: string, title: string, description?: string | null, status: ErrandStatus, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceAddress?: string | null, latitude?: number | null, longitude?: number | null, service?: string | null, profession?: string | null, workerType?: WorkerType | null, applicationDeadline?: any | null, completionDeadline?: any | null, createdAt: any, updatedAt: any, clientId: string, assignedTo?: string | null, clientName?: string | null, clientRating?: number | null, client: { __typename?: 'Client', id: string, userId: string, user: { __typename?: 'User', id: string, name: string, email: string, image?: string | null } }, reviews: Array<{ __typename?: 'Review', id: string, rating: number, comment?: string | null, reviewerId: string, workerId: string, errandId: string, createdAt: any }> }> } };

export type ServiceCategoriesQueryVariables = Exact<{
  input?: InputMaybe<Scalars['String']['input']>;
}>;


export type ServiceCategoriesQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string } };

export type GetUserSearchHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSearchHistoryQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', activeAddressId?: string | null, country?: string | null, activeRole?: UserRole | null, createdAt: any, displayUsername?: string | null, email: string, emailVerified: boolean, id: string, image?: string | null, name: string, phoneNumber?: string | null, phoneNumberVerified?: boolean | null, twoFactorEnabled?: boolean | null, updatedAt: any, username?: string | null, onboardingProgress: OnboardingProgress, userAddress?: Array<{ __typename?: 'UserAddress', label: string, address: string, id: string } | null> | null } };

export type ErrandCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ErrandCreatedSubscription = { __typename?: 'Subscription', errandCreated: { __typename?: 'ErrandSubscriptionPayload', type: string, userId?: string | null, distance?: number | null, errand: { __typename?: 'Errand', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, status: ErrandStatus, workerType?: WorkerType | null, profession?: string | null, service?: string | null, serviceAddress?: string | null, latitude?: number | null, longitude?: number | null, createdAt: any } } };

export type ErrandDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ErrandDeletedSubscription = { __typename?: 'Subscription', errandDeleted: { __typename?: 'ErrandSubscriptionPayload', type: string, userId?: string | null, errand: { __typename?: 'Errand', id: string, title: string } } };

export type ErrandUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ErrandUpdatedSubscription = { __typename?: 'Subscription', errandUpdated: { __typename?: 'ErrandSubscriptionPayload', type: string, userId?: string | null, errand: { __typename?: 'Errand', id: string, title: string, description?: string | null, status: ErrandStatus, assignedTo?: string | null, updatedAt: any } } };


export const AddAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<AddAddressMutation, AddAddressMutationVariables>;
export const AddWorkerServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddWorkerServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddWorkerServicesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addWorkerServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<AddWorkerServicesMutation, AddWorkerServicesMutationVariables>;
export const CreateUserRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateUserInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}}]}}]}}]} as unknown as DocumentNode<CreateUserRoleMutation, CreateUserRoleMutationVariables>;
export const UseCurrentAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UseCurrentAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReverseGeocodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"useCurrentAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}}]}}]}}]} as unknown as DocumentNode<UseCurrentAddressMutation, UseCurrentAddressMutationVariables>;
export const PlaceDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlaceDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDetailsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formattedAddress"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]} as unknown as DocumentNode<PlaceDetailsQuery, PlaceDetailsQueryVariables>;
export const SuggestAddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestAddresses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SuggestAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suggestAddresses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"placeId"}}]}}]}}]} as unknown as DocumentNode<SuggestAddressesQuery, SuggestAddressesQueryVariables>;
export const GetErrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetErrands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ErrandQueryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getErrands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"service"}},{"kind":"Field","name":{"kind":"Name","value":"profession"}},{"kind":"Field","name":{"kind":"Name","value":"workerType"}},{"kind":"Field","name":{"kind":"Name","value":"applicationDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"completionDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"clientName"}},{"kind":"Field","name":{"kind":"Name","value":"clientRating"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"reviewerId"}},{"kind":"Field","name":{"kind":"Name","value":"workerId"}},{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]} as unknown as DocumentNode<GetErrandsQuery, GetErrandsQueryVariables>;
export const ServiceCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServiceCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ServiceCategoriesQuery, ServiceCategoriesQueryVariables>;
export const GetUserSearchHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserSearchHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetUserSearchHistoryQuery, GetUserSearchHistoryQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const ErrandCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ErrandCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"workerType"}},{"kind":"Field","name":{"kind":"Name","value":"profession"}},{"kind":"Field","name":{"kind":"Name","value":"service"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}}]}}]}}]} as unknown as DocumentNode<ErrandCreatedSubscription, ErrandCreatedSubscriptionVariables>;
export const ErrandDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ErrandDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandDeleted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<ErrandDeletedSubscription, ErrandDeletedSubscriptionVariables>;
export const ErrandUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ErrandUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<ErrandUpdatedSubscription, ErrandUpdatedSubscriptionVariables>;