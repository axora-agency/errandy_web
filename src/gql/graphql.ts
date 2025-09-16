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

export type CreateAddressInput = {
  address: Scalars['String']['input'];
  label: Scalars['String']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  userId: Scalars['String']['input'];
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

export type CreateServiceInput = {
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
  userId: Scalars['String']['output'];
  workerType?: Maybe<WorkerType>;
};

export type ErrandStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'DRAFT'
  | 'IN_PROGRESS'
  | 'OPEN';

export type GetAllErrandInput = {
  maxDistanceKm?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress: User;
  createApplication: Application;
  createChat: Chat;
  createErrand: Errand;
  createReview: Review;
  createService: Service;
  createUserRole: User;
  createWallet: Wallet;
  removeApplication: Application;
  removeChat: Chat;
  removeErrand: Errand;
  removeReview: Review;
  removeService: Service;
  removeWallet: Wallet;
  updateApplication: Application;
  updateChat: Chat;
  updateErrand: Errand;
  updateReview: Review;
  updateService: Service;
  updateUser: User;
  updateWallet: Wallet;
};


export type MutationAddAddressArgs = {
  dto: CreateAddressInput;
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


export type MutationCreateServiceArgs = {
  createServiceInput: CreateServiceInput;
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


export type MutationRemoveServiceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveWalletArgs = {
  id: Scalars['Int']['input'];
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


export type MutationUpdateServiceArgs = {
  updateServiceInput: UpdateServiceInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateWalletArgs = {
  updateWalletInput: UpdateWalletInput;
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
  professions: Array<ServiceGroup>;
  review: Review;
  service: Service;
  services: Array<ServiceGroup>;
  user: User;
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


export type QueryReviewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryServiceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWalletArgs = {
  id: Scalars['Int']['input'];
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

export type Service = {
  __typename?: 'Service';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type ServiceGroup = {
  __typename?: 'ServiceGroup';
  name: Scalars['String']['output'];
  services: Array<Scalars['String']['output']>;
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

export type UpdateServiceInput = {
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
  activeAddressId?: Maybe<Scalars['String']['output']>;
  activeRole?: Maybe<UserRole>;
  createdAt: Scalars['DateTime']['output'];
  displayUsername?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<UserRole>>;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
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

export type GetProfessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfessionsQuery = { __typename?: 'Query', professions: Array<{ __typename?: 'ServiceGroup', name: string, services: Array<string> }> };

export type GetServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesQuery = { __typename?: 'Query', services: Array<{ __typename?: 'ServiceGroup', name: string, services: Array<string> }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, email: string, username?: string | null, emailVerified?: boolean | null, displayUsername?: string | null, activeRole?: UserRole | null, image?: string | null, phoneNumber?: string | null, roles?: Array<UserRole> | null } };


export const GetProfessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"professions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"services"}}]}}]}}]} as unknown as DocumentNode<GetProfessionsQuery, GetProfessionsQueryVariables>;
export const GetServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"services"}}]}}]}}]} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;