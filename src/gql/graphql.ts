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

export type GetServiceCategoriesInput = {
  type?: InputMaybe<ServiceCategoryType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress: User;
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
  updateApplication: Application;
  updateChat: Chat;
  updateErrand: Errand;
  updateReview: Review;
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

export type OnboardingProgress =
  | 'ADDRESS_ADDED'
  | 'COMPLETED'
  | 'NONE'
  | 'ROLE_SELECTED'
  | 'SERVICES_SELECTED';

export type PricingType =
  | 'FIXED'
  | 'HOURLY';

export type Query = {
  __typename?: 'Query';
  application: Application;
  chat: Chat;
  errand: Errand;
  errands: Array<Errand>;
  review: Review;
  service: Service;
  serviceCategories: Array<ServiceCategory>;
  services: Array<Service>;
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
  id: Scalars['ID']['input'];
};


export type QueryServiceCategoriesArgs = {
  input?: InputMaybe<GetServiceCategoriesInput>;
};


export type QueryServicesArgs = {
  categoryType?: InputMaybe<ServiceCategoryType>;
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

export type CreateUserRoleMutationVariables = Exact<{
  role: Scalars['String']['input'];
}>;


export type CreateUserRoleMutation = { __typename?: 'Mutation', createUserRole: { __typename?: 'User', username?: string | null, updatedAt: any, twoFactorEnabled?: boolean | null, phoneNumberVerified?: boolean | null, phoneNumber?: string | null, name: string, image?: string | null, id: string, emailVerified: boolean, email: string, displayUsername?: string | null, createdAt: any, country?: string | null, activeRole?: UserRole | null, activeAddressId?: string | null, onboardingProgress: OnboardingProgress } };

export type ServiceCategoriesQueryVariables = Exact<{
  input?: InputMaybe<GetServiceCategoriesInput>;
}>;


export type ServiceCategoriesQuery = { __typename?: 'Query', serviceCategories: Array<{ __typename?: 'ServiceCategory', name: string, type: ServiceCategoryType, services?: Array<{ __typename?: 'Service', name: string, type: ServiceCategoryType, id: string, categoryId: string }> | null }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', activeAddressId?: string | null, activeRole?: UserRole | null, country?: string | null, createdAt: any, displayUsername?: string | null, email: string, emailVerified: boolean, id: string, image?: string | null, name: string, phoneNumber?: string | null, phoneNumberVerified?: boolean | null, twoFactorEnabled?: boolean | null, updatedAt: any, username?: string | null, onboardingProgress: OnboardingProgress } };


export const CreateUserRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}}]}}]}}]} as unknown as DocumentNode<CreateUserRoleMutation, CreateUserRoleMutationVariables>;
export const ServiceCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServiceCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetServiceCategoriesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<ServiceCategoriesQuery, ServiceCategoriesQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;