/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AcceptApplicationInput = {
  applicationId: Scalars['ID']['input'];
  paymentMethodId?: InputMaybe<Scalars['ID']['input']>;
};

export type AddBundleItemInput = {
  bundleId: Scalars['ID']['input'];
  templateId: Scalars['ID']['input'];
};

export type AddRatingReactionInput = {
  emoji: Scalars['String']['input'];
  ratingId: Scalars['ID']['input'];
};

export type AddRatingReplyInput = {
  content: Scalars['String']['input'];
  ratingId: Scalars['ID']['input'];
};

export type AddToCircleInput = {
  circleName?: InputMaybe<Scalars['String']['input']>;
  providerId: Scalars['ID']['input'];
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
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  errandId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  source: ApplicationSource;
  status: ApplicationStatus;
  worker?: Maybe<Provider>;
  workerId: Scalars['String']['output'];
};

export enum ApplicationSource {
  Invited = 'INVITED',
  Public = 'PUBLIC'
}

export enum ApplicationStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export enum AssignmentRole {
  Lead = 'LEAD',
  Member = 'MEMBER'
}

export enum AssignmentStatus {
  Accepted = 'ACCEPTED',
  Assigned = 'ASSIGNED',
  Completed = 'COMPLETED',
  Rejected = 'REJECTED'
}

export type BankTransferDetails = {
  __typename?: 'BankTransferDetails';
  accountName: Scalars['String']['output'];
  accountNumber: Scalars['String']['output'];
  bankName: Scalars['String']['output'];
  expiresAt?: Maybe<Scalars['String']['output']>;
};

export type BundleItem = {
  __typename?: 'BundleItem';
  bundleId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  template?: Maybe<ErrandTemplate>;
  templateId: Scalars['String']['output'];
};

export type ChatRoom = {
  __typename?: 'ChatRoom';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lastMessage?: Maybe<Message>;
  lastMessageId?: Maybe<Scalars['String']['output']>;
  messages?: Maybe<Array<Maybe<Message>>>;
  name?: Maybe<Scalars['String']['output']>;
  participantIds: Array<Scalars['String']['output']>;
  participants: Array<User>;
  unreadCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum CircleSource {
  CompletedTask = 'COMPLETED_TASK',
  Invited = 'INVITED',
  ManualAdd = 'MANUAL_ADD'
}

export type Client = {
  __typename?: 'Client';
  errands?: Maybe<Array<Maybe<Errand>>>;
  id: Scalars['ID']['output'];
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  ratings?: Maybe<Array<Maybe<Rating>>>;
  recurringContracts?: Maybe<Array<Maybe<RecurringContract>>>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type ClientDashboard = {
  __typename?: 'ClientDashboard';
  activeErrands: Array<Errand>;
  activeErrandsCount: Scalars['Int']['output'];
  completedErrandsCount: Scalars['Int']['output'];
  completedRequirementsCount: Scalars['Int']['output'];
  draftErrands: Array<Errand>;
  draftErrandsCount: Scalars['Int']['output'];
  marketTrends: Array<Scalars['String']['output']>;
  requirements: Array<DashboardRequirement>;
  totalErrandsCount: Scalars['Int']['output'];
  totalRequirementsCount: Scalars['Int']['output'];
  totalSpent: Scalars['Float']['output'];
  walletBalance: Scalars['Float']['output'];
};

export type CreateAddressInput = {
  address: Scalars['String']['input'];
  label: Scalars['String']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type CreateApplicationInput = {
  errandId: Scalars['String']['input'];
};

export type CreateChatInput = {
  receiverId: Scalars['String']['input'];
  roomId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateErrandBundleInput = {
  basePrice: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  templateIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreateErrandFromTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  serviceAddress?: InputMaybe<Scalars['String']['input']>;
  templateId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateErrandInput = {
  /** Errand title */
  title: Scalars['String']['input'];
};

export type CreateErrandTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  location?: InputMaybe<Scalars['JSON']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  pricingType: PricingType;
  providerType?: InputMaybe<ProviderType>;
  serviceAddress?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type CreateErrandsFromBundleInput = {
  bundleId: Scalars['ID']['input'];
  serviceAddress?: InputMaybe<Scalars['String']['input']>;
};

export type CreateListingInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  listingTags?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  pricingType: PricingType;
  providerOrgId: Scalars['String']['input'];
  providerType?: InputMaybe<ProviderType>;
  serviceAddress?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateRecurringErrandInput = {
  frequency: RecurrenceFrequency;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  templateId: Scalars['ID']['input'];
};

export type CreateWalletInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type DashboardRequirement = {
  __typename?: 'DashboardRequirement';
  description: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  requiredTo: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type DeleteRatingReplyInput = {
  replyId: Scalars['ID']['input'];
};

export type DispatchErrandInput = {
  errandId: Scalars['String']['input'];
  providerOrgId: Scalars['String']['input'];
  role?: InputMaybe<AssignmentRole>;
  workerId?: InputMaybe<Scalars['String']['input']>;
};

export type Errand = {
  __typename?: 'Errand';
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  client: Client;
  clientId: Scalars['String']['output'];
  completionDeadline?: Maybe<Scalars['DateTime']['output']>;
  completionDurationDays?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hourlyRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isRecurring: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['JSON']['output']>;
  materialsBudget?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  pricingType: PricingType;
  providerOrgId?: Maybe<Scalars['String']['output']>;
  providerType?: Maybe<ProviderType>;
  ratings?: Maybe<Array<Maybe<Rating>>>;
  service?: Maybe<Service>;
  serviceAddress?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  sourceType: Scalars['String']['output'];
  status?: Maybe<ErrandStatus>;
  templateId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  transportAllowance?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ErrandApplicationSummary = {
  __typename?: 'ErrandApplicationSummary';
  acceptedApplications: Scalars['Int']['output'];
  cancelledApplications: Scalars['Int']['output'];
  chattingApplicants: Scalars['Int']['output'];
  myApplicationStatus?: Maybe<ApplicationStatus>;
  pendingApplications: Scalars['Int']['output'];
  rejectedApplications: Scalars['Int']['output'];
  totalApplications: Scalars['Int']['output'];
};

export type ErrandAssignment = {
  __typename?: 'ErrandAssignment';
  assignedAt: Scalars['DateTime']['output'];
  errand: Errand;
  errandId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  providerOrgId: Scalars['String']['output'];
  role: AssignmentRole;
  status: AssignmentStatus;
  workerId?: Maybe<Scalars['String']['output']>;
};

export type ErrandBundle = {
  __typename?: 'ErrandBundle';
  active: Scalars['Boolean']['output'];
  basePrice: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<BundleItem>>>;
  name: Scalars['String']['output'];
};

export type ErrandQueryInput = {
  /** Maximum distance in kilometers for location filtering */
  maxDistanceKm?: InputMaybe<Scalars['Float']['input']>;
  /** Pagination parameters */
  pagination?: InputMaybe<PaginationInput>;
  /** Search keyword for title, description, or category filtering */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Type of errand feed to retrieve */
  type?: InputMaybe<ErrandType>;
};

export enum ErrandStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN',
  Overdue = 'OVERDUE'
}

export type ErrandTemplate = {
  __typename?: 'ErrandTemplate';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hourlyRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isListing: Scalars['Boolean']['output'];
  listingTags?: Maybe<Array<Scalars['String']['output']>>;
  location?: Maybe<Scalars['JSON']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  pricingType: PricingType;
  providerOrgId?: Maybe<Scalars['String']['output']>;
  providerType?: Maybe<ProviderType>;
  publishState: ListingPublishState;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  service?: Maybe<Service>;
  serviceAddress?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

/** Type of errand feed to retrieve */
export enum ErrandType {
  BestMatch = 'BEST_MATCH',
  Feed = 'FEED',
  MostRecent = 'MOST_RECENT',
  Saved = 'SAVED',
  Search = 'SEARCH'
}

export type ErrandWithClient = {
  __typename?: 'ErrandWithClient';
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  client: Client;
  clientId: Scalars['String']['output'];
  clientName?: Maybe<Scalars['String']['output']>;
  clientRating?: Maybe<Scalars['Float']['output']>;
  completionDeadline?: Maybe<Scalars['DateTime']['output']>;
  completionDurationDays?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  hourlyRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isRecurring: Scalars['Boolean']['output'];
  isSaved?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  materialsBudget?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  pricingType: PricingType;
  providerOrgId?: Maybe<Scalars['String']['output']>;
  providerType?: Maybe<ProviderType>;
  ratings?: Maybe<Array<Maybe<Rating>>>;
  service?: Maybe<Service>;
  serviceAddress?: Maybe<Scalars['String']['output']>;
  serviceId?: Maybe<Scalars['String']['output']>;
  sourceType: Scalars['String']['output'];
  status?: Maybe<ErrandStatus>;
  templateId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  transportAllowance?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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

export type GetErrandInput = {
  id: Scalars['ID']['input'];
};

export type GetMyErrandsInput = {
  /** Pagination parameters */
  pagination?: InputMaybe<PaginationInput>;
  /** Type of my errands to retrieve */
  type: MyErrandsType;
};

export type GetServiceCategoriesInput = {
  type?: InputMaybe<ServiceCategoryType>;
};

export enum ListingPublishState {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Message = {
  __typename?: 'Message';
  content?: Maybe<Scalars['String']['output']>;
  contentUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  delivered: Scalars['Boolean']['output'];
  durationMs?: Maybe<Scalars['Int']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  roomId: Scalars['String']['output'];
  seen: Scalars['Boolean']['output'];
  senderId: Scalars['String']['output'];
  sent: Scalars['Boolean']['output'];
  type: MessageType;
  waveform?: Maybe<Scalars['JSON']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export enum MessageType {
  File = 'FILE',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO',
  Voice = 'VOICE'
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptApplication: Errand;
  acceptSharedProvider: TrustedCircle;
  addAddress: User;
  addBundleItem: BundleItem;
  addRatingReply: RatingReply;
  addToCircle: TrustedCircle;
  addWorkerServices: User;
  apply: Application;
  cancelRecurringErrand: RecurringContract;
  /** Clear user search history */
  clearSearchHistory: Scalars['Boolean']['output'];
  createErrand: Errand;
  createErrandBundle: ErrandBundle;
  createErrandFromTemplate: Errand;
  createErrandTemplate: ErrandTemplate;
  createErrandsFromBundle: Array<Errand>;
  createListing: ErrandTemplate;
  createRecurringContractFromListing: RecurringContract;
  createRecurringErrand: RecurringContract;
  createUserRole: User;
  createWallet: Wallet;
  /** Delete a user address */
  deleteAddress: Scalars['Boolean']['output'];
  deleteErrandBundle: ErrandBundle;
  deleteErrandTemplate: ErrandTemplate;
  deleteRatingReply: RatingReply;
  deleteRecurringErrand: RecurringContract;
  dispatchErrand: ErrandAssignment;
  getOrCreateChat: ChatRoom;
  hireFromListing: Errand;
  initializePaymentMethod: PaymentInitializationResponse;
  initializeWalletFunding: WalletFundingResponse;
  markErrandCompleted: Errand;
  markMessageAsDelivered: Message;
  markMessageAsSeen: Message;
  publishListing: ErrandTemplate;
  rejectSharedProvider: TrustedCircle;
  removeBundleItem: BundleItem;
  removeErrand: Errand;
  removeFromCircle: TrustedCircle;
  removeWallet: Wallet;
  saveErrand: SavedErrand;
  saveUserAddress: User;
  sendMessage: Message;
  shareTrustedCircle: Scalars['Boolean']['output'];
  toggleRatingReaction?: Maybe<RatingReaction>;
  updateErrand: Errand;
  updateErrandBundle: ErrandBundle;
  updateErrandTemplate: ErrandTemplate;
  updateListing: ErrandTemplate;
  updateRecurringErrand: RecurringContract;
  updateUser: User;
  updateWallet: Wallet;
  useCurrentAddress: User;
  verifyAndSavePaymentMethod: PaymentMethod;
};


export type MutationAcceptApplicationArgs = {
  input: AcceptApplicationInput;
};


export type MutationAcceptSharedProviderArgs = {
  providerId: Scalars['ID']['input'];
};


export type MutationAddAddressArgs = {
  dto: CreateAddressInput;
};


export type MutationAddBundleItemArgs = {
  input: AddBundleItemInput;
};


export type MutationAddRatingReplyArgs = {
  input: AddRatingReplyInput;
};


export type MutationAddToCircleArgs = {
  input: AddToCircleInput;
};


export type MutationAddWorkerServicesArgs = {
  dto: AddWorkerServicesInput;
};


export type MutationApplyArgs = {
  createApplicationInput: CreateApplicationInput;
};


export type MutationCancelRecurringErrandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateErrandArgs = {
  createErrandInput: CreateErrandInput;
};


export type MutationCreateErrandBundleArgs = {
  input: CreateErrandBundleInput;
};


export type MutationCreateErrandFromTemplateArgs = {
  input: CreateErrandFromTemplateInput;
};


export type MutationCreateErrandTemplateArgs = {
  input: CreateErrandTemplateInput;
};


export type MutationCreateErrandsFromBundleArgs = {
  input: CreateErrandsFromBundleInput;
};


export type MutationCreateListingArgs = {
  input: CreateListingInput;
};


export type MutationCreateRecurringContractFromListingArgs = {
  frequency: Scalars['String']['input'];
  templateId: Scalars['ID']['input'];
};


export type MutationCreateRecurringErrandArgs = {
  input: CreateRecurringErrandInput;
};


export type MutationCreateUserRoleArgs = {
  role: UserRole;
};


export type MutationCreateWalletArgs = {
  createWalletInput: CreateWalletInput;
};


export type MutationDeleteAddressArgs = {
  addressId: Scalars['String']['input'];
};


export type MutationDeleteErrandBundleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteErrandTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRatingReplyArgs = {
  input: DeleteRatingReplyInput;
};


export type MutationDeleteRecurringErrandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDispatchErrandArgs = {
  input: DispatchErrandInput;
};


export type MutationGetOrCreateChatArgs = {
  createChatInput: CreateChatInput;
};


export type MutationHireFromListingArgs = {
  templateId: Scalars['ID']['input'];
};


export type MutationInitializePaymentMethodArgs = {
  provider?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInitializeWalletFundingArgs = {
  amount: Scalars['Float']['input'];
  channel: WalletFundingChannel;
};


export type MutationMarkErrandCompletedArgs = {
  errandId: Scalars['ID']['input'];
};


export type MutationMarkMessageAsDeliveredArgs = {
  messageId: Scalars['String']['input'];
};


export type MutationMarkMessageAsSeenArgs = {
  messageId: Scalars['String']['input'];
};


export type MutationPublishListingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRejectSharedProviderArgs = {
  providerId: Scalars['ID']['input'];
};


export type MutationRemoveBundleItemArgs = {
  input: RemoveBundleItemInput;
};


export type MutationRemoveErrandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveFromCircleArgs = {
  providerId: Scalars['ID']['input'];
};


export type MutationRemoveWalletArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSaveErrandArgs = {
  errandId: Scalars['ID']['input'];
};


export type MutationSaveUserAddressArgs = {
  dto: SaveUserAddressInput;
};


export type MutationSendMessageArgs = {
  sendMessageInput: SendMessageInput;
};


export type MutationShareTrustedCircleArgs = {
  input: ShareCircleInput;
};


export type MutationToggleRatingReactionArgs = {
  input: AddRatingReactionInput;
};


export type MutationUpdateErrandArgs = {
  updateErrandInput: UpdateErrandInput;
};


export type MutationUpdateErrandBundleArgs = {
  input: UpdateErrandBundleInput;
};


export type MutationUpdateErrandTemplateArgs = {
  input: UpdateErrandTemplateInput;
};


export type MutationUpdateListingArgs = {
  input: UpdateListingInput;
};


export type MutationUpdateRecurringErrandArgs = {
  input: UpdateRecurringErrandInput;
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


export type MutationVerifyAndSavePaymentMethodArgs = {
  provider?: InputMaybe<Scalars['String']['input']>;
  reference: Scalars['String']['input'];
};

/** Type of errands to retrieve for My Errands view */
export enum MyErrandsType {
  ClientActive = 'CLIENT_ACTIVE',
  ClientDraft = 'CLIENT_DRAFT',
  ClientPublished = 'CLIENT_PUBLISHED',
  ProviderActive = 'PROVIDER_ACTIVE',
  ProviderCompleted = 'PROVIDER_COMPLETED',
  ProviderPending = 'PROVIDER_PENDING',
  ProviderRejected = 'PROVIDER_REJECTED'
}

export enum OnboardingProgress {
  AddressAdded = 'ADDRESS_ADDED',
  Completed = 'COMPLETED',
  None = 'NONE',
  RoleSelected = 'ROLE_SELECTED',
  ServicesSelected = 'SERVICES_SELECTED'
}

export type OrgMember = {
  __typename?: 'OrgMember';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  orgId: Scalars['String']['output'];
  role: OrgRole;
  user: User;
  userId: Scalars['String']['output'];
};

export enum OrgRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type Organization = {
  __typename?: 'Organization';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  members?: Maybe<Array<Maybe<OrgMember>>>;
  name: Scalars['String']['output'];
  owner?: Maybe<Provider>;
  ownerId: Scalars['String']['output'];
};

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

export type PaymentInitializationData = {
  __typename?: 'PaymentInitializationData';
  access_code?: Maybe<Scalars['String']['output']>;
  authorization_url?: Maybe<Scalars['String']['output']>;
  reference: Scalars['String']['output'];
};

export type PaymentInitializationResponse = {
  __typename?: 'PaymentInitializationResponse';
  data?: Maybe<PaymentInitializationData>;
  message: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  cardBrand?: Maybe<Scalars['String']['output']>;
  client?: Maybe<Client>;
  createdAt: Scalars['DateTime']['output'];
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  last4?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerRef: Scalars['String']['output'];
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type PaystackCustomer = {
  __typename?: 'PaystackCustomer';
  customer_code: Scalars['String']['output'];
  customer_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  paystackData?: Maybe<Scalars['JSON']['output']>;
  userId: Scalars['String']['output'];
};

export type PlaceDetailsInput = {
  placeId: Scalars['String']['input'];
};

export enum PresenceStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export enum PricingType {
  Fixed = 'FIXED',
  Hourly = 'HOURLY'
}

export type Provider = {
  __typename?: 'Provider';
  activeAddress?: Maybe<UserAddress>;
  id: Scalars['ID']['output'];
  providerType?: Maybe<ProviderType>;
  rating?: Maybe<RatingStats>;
  services: Array<Maybe<Service>>;
  tier: ProviderTier;
  tierUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type ProviderDiscoveryResponse = {
  __typename?: 'ProviderDiscoveryResponse';
  new: Array<Provider>;
  popular: Array<Provider>;
  suggested: Array<Provider>;
  trusted: Array<Provider>;
};

export enum ProviderTier {
  Certified = 'CERTIFIED',
  Community = 'COMMUNITY',
  CompanyPartner = 'COMPANY_PARTNER',
  Verified = 'VERIFIED'
}

export enum ProviderType {
  Artisan = 'ARTISAN',
  General = 'GENERAL',
  Professional = 'PROFESSIONAL'
}

export type QrCodeDetails = {
  __typename?: 'QRCodeDetails';
  displayText?: Maybe<Scalars['String']['output']>;
  qrCode: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  application: Application;
  /** Get client dashboard data including requirements and errands */
  clientDashboard: ClientDashboard;
  clientRatings: Array<Rating>;
  dispatchQueue: Array<Errand>;
  errand: Errand;
  errandApplicationSummary: ErrandApplicationSummary;
  errandApplications: Array<Application>;
  errandBundle?: Maybe<ErrandBundle>;
  errandBundles: Array<ErrandBundle>;
  errandRatings: Array<Rating>;
  errandTemplate?: Maybe<ErrandTemplate>;
  errands: Array<Errand>;
  /** Advanced errand query with personalized feeds and location-based filtering */
  getErrands: PaginatedErrands;
  /** Get user errands - Clients see their created errands, Providers see errands they applied for */
  getMyErrands: PaginatedErrands;
  getPendingTrustedCircleMembers: Array<TrustedCircleMember>;
  getProviders: ProviderDiscoveryResponse;
  getTrustedCircle?: Maybe<TrustedCircle>;
  getUserAddresses: Array<UserAddress>;
  getUserChats: Array<ChatRoom>;
  listing?: Maybe<ErrandTemplate>;
  listings: Array<ErrandTemplate>;
  myApplicationForErrand?: Maybe<Application>;
  myErrandTemplates: Array<ErrandTemplate>;
  myOrganization?: Maybe<Organization>;
  myPaymentMethods: Array<PaymentMethod>;
  myPaystackCustomer?: Maybe<PaystackCustomer>;
  myRecurringErrands: Array<RecurringContract>;
  placeDetails: AddressDetails;
  presence: UserPresence;
  searchProviders: Array<Provider>;
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
  id: Scalars['ID']['input'];
};


export type QueryClientRatingsArgs = {
  clientId: Scalars['ID']['input'];
};


export type QueryDispatchQueueArgs = {
  providerOrgId: Scalars['ID']['input'];
};


export type QueryErrandArgs = {
  input: GetErrandInput;
};


export type QueryErrandApplicationSummaryArgs = {
  errandId: Scalars['ID']['input'];
};


export type QueryErrandApplicationsArgs = {
  errandId: Scalars['ID']['input'];
};


export type QueryErrandBundleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryErrandRatingsArgs = {
  errandId: Scalars['ID']['input'];
};


export type QueryErrandTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryErrandsArgs = {
  dto: GetAllErrandInput;
};


export type QueryGetErrandsArgs = {
  input: ErrandQueryInput;
};


export type QueryGetMyErrandsArgs = {
  input: GetMyErrandsInput;
};


export type QueryListingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryListingsArgs = {
  providerOrgId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMyApplicationForErrandArgs = {
  errandId: Scalars['ID']['input'];
};


export type QueryPlaceDetailsArgs = {
  input: PlaceDetailsInput;
};


export type QueryPresenceArgs = {
  userId: Scalars['ID']['input'];
};


export type QuerySearchProvidersArgs = {
  input: SearchProvidersInput;
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

export enum RateeType {
  Client = 'CLIENT',
  Provider = 'PROVIDER'
}

export type Rating = {
  __typename?: 'Rating';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  errandId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  rateeId: Scalars['String']['output'];
  rateeType: RateeType;
  raterId: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  reactions?: Maybe<Array<Maybe<RatingReaction>>>;
  replies?: Maybe<Array<Maybe<RatingReply>>>;
};

export type RatingReaction = {
  __typename?: 'RatingReaction';
  createdAt: Scalars['DateTime']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ratingId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type RatingReply = {
  __typename?: 'RatingReply';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ratingId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type RatingStats = {
  __typename?: 'RatingStats';
  averageRating: Scalars['Float']['output'];
  totalReviews: Scalars['Int']['output'];
};

export type Reaction = {
  __typename?: 'Reaction';
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  messageId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export enum RecurrenceFrequency {
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY'
}

export type RecurringContract = {
  __typename?: 'RecurringContract';
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  active: Scalars['Boolean']['output'];
  clientId: Scalars['String']['output'];
  frequency: RecurrenceFrequency;
  id: Scalars['ID']['output'];
  nextRunAt: Scalars['DateTime']['output'];
  providerOrgId: Scalars['String']['output'];
  providerPreAccepted: Scalars['Boolean']['output'];
  template: ErrandTemplate;
  templateId: Scalars['String']['output'];
};

export type RemoveBundleItemInput = {
  bundleId: Scalars['ID']['input'];
  templateId: Scalars['ID']['input'];
};

export type ReverseGeocodeInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type SaveUserAddressInput = {
  address: Scalars['String']['input'];
  label: Scalars['String']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type SavedErrand = {
  __typename?: 'SavedErrand';
  errand?: Maybe<Errand>;
  errandId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  savedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type Search = {
  __typename?: 'Search';
  id: Scalars['ID']['output'];
  keyword: Scalars['String']['output'];
  providerId?: Maybe<Scalars['ID']['output']>;
};

export type SearchProvidersInput = {
  minRating?: InputMaybe<Scalars['Float']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  providerTypes?: InputMaybe<Array<ProviderType>>;
  query?: InputMaybe<Scalars['String']['input']>;
  serviceIds?: InputMaybe<Array<Scalars['String']['input']>>;
  tiers?: InputMaybe<Array<ProviderTier>>;
};

export type SendMessageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentUrl?: InputMaybe<Scalars['String']['input']>;
  durationMs?: InputMaybe<Scalars['Int']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileSize?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['String']['input'];
  senderId?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  waveform?: InputMaybe<Scalars['JSON']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
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

export enum ServiceCategoryType {
  Artisan = 'ARTISAN',
  Casual = 'CASUAL',
  Professional = 'PROFESSIONAL'
}

export type ShareCircleInput = {
  recipientEmail?: InputMaybe<Scalars['String']['input']>;
  recipientUserId?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageDeliveredForUser: Message;
  messageSeenForUser: Message;
  messageSentForUser: Message;
  presenceChanged: UserPresence;
};


export type SubscriptionPresenceChangedArgs = {
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type SuggestAddressInput = {
  input: Scalars['String']['input'];
};

export type TrustedCircle = {
  __typename?: 'TrustedCircle';
  client?: Maybe<Client>;
  clientId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  members?: Maybe<Array<Maybe<TrustedCircleMember>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TrustedCircleMember = {
  __typename?: 'TrustedCircleMember';
  addedAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  provider: Provider;
  providerId: Scalars['ID']['output'];
  source: CircleSource;
  status: TrustedCircleMemberStatus;
  trustedCircleId: Scalars['ID']['output'];
};

export enum TrustedCircleMemberStatus {
  Active = 'ACTIVE',
  Pending = 'PENDING'
}

export type UpdateErrandBundleInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  basePrice?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  templateIds?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  materialsBudget?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  pricingType?: InputMaybe<PricingType>;
  providerType?: InputMaybe<ProviderType>;
  serviceAddress?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ErrandStatus>;
  /** Errand title */
  title?: InputMaybe<Scalars['String']['input']>;
  transportAllowance?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateErrandTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['JSON']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  pricingType?: InputMaybe<PricingType>;
  providerType?: InputMaybe<ProviderType>;
  serviceAddress?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateListingInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hourlyRate?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  listingTags?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRecurringErrandInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  frequency?: InputMaybe<RecurrenceFrequency>;
  id: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  templateId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateUserInput = {
  displayUsername?: InputMaybe<Scalars['String']['input']>;
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<Scalars['Upload']['input']>;
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
  activeFor?: Maybe<Array<User>>;
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  location: GeoPoint;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type UserPresence = {
  __typename?: 'UserPresence';
  lastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  status: PresenceStatus;
  userId: Scalars['ID']['output'];
};

export enum UserRole {
  Client = 'CLIENT',
  Provider = 'PROVIDER'
}

export type Wallet = {
  __typename?: 'Wallet';
  available: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  held: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  ownerId: Scalars['String']['output'];
  ownerType: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

/** Payment channel for wallet funding */
export enum WalletFundingChannel {
  Card = 'CARD',
  Qr = 'QR',
  Transfer = 'TRANSFER'
}

export type WalletFundingResponse = {
  __typename?: 'WalletFundingResponse';
  amount: Scalars['Float']['output'];
  /** For card channel - redirect URL */
  authorizationUrl?: Maybe<Scalars['String']['output']>;
  /** For transfer channel - bank details */
  bankDetails?: Maybe<BankTransferDetails>;
  channel: WalletFundingChannel;
  message: Scalars['String']['output'];
  /** For QR channel - QR code data */
  qrDetails?: Maybe<QrCodeDetails>;
  reference: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type GetOrCreateChatMutationVariables = Exact<{
  createChatInput: CreateChatInput;
}>;


export type GetOrCreateChatMutation = { __typename?: 'Mutation', getOrCreateChat: { __typename?: 'ChatRoom', createdAt: any, id: string, unreadCount: number, participantIds: Array<string>, updatedAt: any, messages?: Array<{ __typename?: 'Message', content?: string | null, contentUrl?: string | null, createdAt: any, delivered: boolean, durationMs?: number | null, fileName?: string | null, fileSize?: number | null, height?: number | null, id: string, mimeType?: string | null, roomId: string, seen: boolean, senderId: string, type: MessageType, waveform?: any | null, width?: number | null, reactions?: Array<{ __typename?: 'Reaction', emoji: string, id: string, messageId: string, userId: string } | null> | null } | null> | null, participants: Array<{ __typename?: 'User', id: string, name: string, image?: string | null }> } };

export type MarkMessageAsDeliveredMutationVariables = Exact<{
  messageId: Scalars['String']['input'];
}>;


export type MarkMessageAsDeliveredMutation = { __typename?: 'Mutation', markMessageAsDelivered: { __typename?: 'Message', id: string, roomId: string, senderId: string, delivered: boolean, seen: boolean } };

export type MarkMessageAsSeenMutationVariables = Exact<{
  messageId: Scalars['String']['input'];
}>;


export type MarkMessageAsSeenMutation = { __typename?: 'Mutation', markMessageAsSeen: { __typename?: 'Message', id: string, roomId: string, senderId: string, delivered: boolean, seen: boolean } };

export type SendMessageMutationVariables = Exact<{
  sendMessageInput: SendMessageInput;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', content?: string | null, contentUrl?: string | null, createdAt: any, delivered: boolean, durationMs?: number | null, fileName?: string | null, fileSize?: number | null, height?: number | null, id: string, mimeType?: string | null, roomId: string, seen: boolean, senderId: string, type: MessageType, waveform?: any | null, width?: number | null, reactions?: Array<{ __typename?: 'Reaction', emoji: string, id: string, messageId: string, userId: string } | null> | null } };

export type AcceptApplicationMutationVariables = Exact<{
  input: AcceptApplicationInput;
}>;


export type AcceptApplicationMutation = { __typename?: 'Mutation', acceptApplication: { __typename?: 'Errand', id: string, status?: ErrandStatus | null, assignedTo?: string | null, assignedAt?: any | null } };

export type AddBundleItemMutationVariables = Exact<{
  input: AddBundleItemInput;
}>;


export type AddBundleItemMutation = { __typename?: 'Mutation', addBundleItem: { __typename?: 'BundleItem', id: string, template?: { __typename?: 'ErrandTemplate', id: string, title: string } | null } };

export type ApplyMutationVariables = Exact<{
  createApplicationInput: CreateApplicationInput;
}>;


export type ApplyMutation = { __typename?: 'Mutation', apply: { __typename?: 'Application', errandId: string, id: string, status: ApplicationStatus, workerId: string, createdAt: any } };

export type CancelRecurringErrandMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CancelRecurringErrandMutation = { __typename?: 'Mutation', cancelRecurringErrand: { __typename?: 'RecurringContract', id: string, active: boolean } };

export type CreateErrandBundleMutationVariables = Exact<{
  input: CreateErrandBundleInput;
}>;


export type CreateErrandBundleMutation = { __typename?: 'Mutation', createErrandBundle: { __typename?: 'ErrandBundle', id: string, name: string, description: string, basePrice: number, active: boolean, items?: Array<{ __typename?: 'BundleItem', id: string, template?: { __typename?: 'ErrandTemplate', id: string, title: string } | null } | null> | null } };

export type CreateErrandMutationVariables = Exact<{
  createErrandInput: CreateErrandInput;
}>;


export type CreateErrandMutation = { __typename?: 'Mutation', createErrand: { __typename?: 'Errand', createdAt: any, description?: string | null, hourlyRate?: number | null, id: string, price?: number | null, pricingType: PricingType, serviceAddress?: string | null, title: string, status?: ErrandStatus | null, updatedAt: any, providerType?: ProviderType | null, client: { __typename?: 'Client', userId: string, id: string }, service?: { __typename?: 'Service', id: string, name: string } | null } };

export type CreateErrandsFromBundleMutationVariables = Exact<{
  input: CreateErrandsFromBundleInput;
}>;


export type CreateErrandsFromBundleMutation = { __typename?: 'Mutation', createErrandsFromBundle: Array<{ __typename?: 'Errand', id: string, title: string, status?: ErrandStatus | null }> };

export type CreateErrandFromTemplateMutationVariables = Exact<{
  input: CreateErrandFromTemplateInput;
}>;


export type CreateErrandFromTemplateMutation = { __typename?: 'Mutation', createErrandFromTemplate: { __typename?: 'Errand', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, status?: ErrandStatus | null, clientId: string } };

export type CreateListingMutationVariables = Exact<{
  input: CreateListingInput;
}>;


export type CreateListingMutation = { __typename?: 'Mutation', createListing: { __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceAddress?: string | null, location?: any | null, providerOrgId?: string | null, publishState: ListingPublishState, publishedAt?: any | null, isListing: boolean, listingTags?: Array<string> | null, createdAt: any } };

export type CreateRecurringErrandMutationVariables = Exact<{
  input: CreateRecurringErrandInput;
}>;


export type CreateRecurringErrandMutation = { __typename?: 'Mutation', createRecurringErrand: { __typename?: 'RecurringContract', id: string, clientId: string, templateId: string, frequency: RecurrenceFrequency, nextRunAt: any, active: boolean, template: { __typename?: 'ErrandTemplate', id: string, title: string } } };

export type CreateRecurringContractMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
  frequency: Scalars['String']['input'];
}>;


export type CreateRecurringContractMutation = { __typename?: 'Mutation', createRecurringContractFromListing: { __typename?: 'RecurringContract', id: string, clientId: string, providerOrgId: string, templateId: string, frequency: RecurrenceFrequency, nextRunAt: any, active: boolean, providerPreAccepted: boolean, acceptedAt?: any | null, template: { __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, price?: number | null, pricingType: PricingType } } };

export type CreateErrandTemplateMutationVariables = Exact<{
  input: CreateErrandTemplateInput;
}>;


export type CreateErrandTemplateMutation = { __typename?: 'Mutation', createErrandTemplate: { __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceId?: string | null, providerType?: ProviderType | null, serviceAddress?: string | null, createdAt: any } };

export type DeleteErrandBundleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteErrandBundleMutation = { __typename?: 'Mutation', deleteErrandBundle: { __typename?: 'ErrandBundle', id: string } };

export type DeleteRecurringErrandMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRecurringErrandMutation = { __typename?: 'Mutation', deleteRecurringErrand: { __typename?: 'RecurringContract', id: string } };

export type DeleteErrandTemplateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteErrandTemplateMutation = { __typename?: 'Mutation', deleteErrandTemplate: { __typename?: 'ErrandTemplate', id: string } };

export type DispatchErrandMutationVariables = Exact<{
  input: DispatchErrandInput;
}>;


export type DispatchErrandMutation = { __typename?: 'Mutation', dispatchErrand: { __typename?: 'ErrandAssignment', id: string, errandId: string, providerOrgId: string, workerId?: string | null, role: AssignmentRole, status: AssignmentStatus, assignedAt: any } };

export type HireFromListingMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
}>;


export type HireFromListingMutation = { __typename?: 'Mutation', hireFromListing: { __typename?: 'Errand', id: string, title: string, description?: string | null, status?: ErrandStatus | null, sourceType: string, providerOrgId?: string | null, clientId: string, price?: number | null, pricingType: PricingType, serviceAddress?: string | null, location?: any | null, createdAt: any } };

export type PublishListingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PublishListingMutation = { __typename?: 'Mutation', publishListing: { __typename?: 'ErrandTemplate', id: string, title: string, publishState: ListingPublishState, publishedAt?: any | null, isListing: boolean } };

export type RemoveBundleItemMutationVariables = Exact<{
  input: RemoveBundleItemInput;
}>;


export type RemoveBundleItemMutation = { __typename?: 'Mutation', removeBundleItem: { __typename?: 'BundleItem', id: string } };

export type RemoveErrandMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveErrandMutation = { __typename?: 'Mutation', removeErrand: { __typename?: 'Errand', id: string, title: string, status?: ErrandStatus | null } };

export type SaveErrandMutationVariables = Exact<{
  errandId: Scalars['ID']['input'];
}>;


export type SaveErrandMutation = { __typename?: 'Mutation', saveErrand: { __typename?: 'SavedErrand', errandId: string, id: string, userId: string } };

export type UpdateErrandBundleMutationVariables = Exact<{
  input: UpdateErrandBundleInput;
}>;


export type UpdateErrandBundleMutation = { __typename?: 'Mutation', updateErrandBundle: { __typename?: 'ErrandBundle', id: string, name: string, description: string, basePrice: number, active: boolean } };

export type UpdateErrandMutationVariables = Exact<{
  updateErrandInput: UpdateErrandInput;
}>;


export type UpdateErrandMutation = { __typename?: 'Mutation', updateErrand: { __typename?: 'Errand', providerType?: ProviderType | null, updatedAt: any, title: string, status?: ErrandStatus | null, serviceId?: string | null, serviceAddress?: string | null, pricingType: PricingType, price?: number | null, location?: any | null, id: string, hourlyRate?: number | null, transportAllowance?: number | null, materialsBudget?: number | null, description?: string | null, createdAt: any, clientId: string, assignedTo?: string | null, service?: { __typename?: 'Service', name: string, type: ServiceCategoryType, id: string, categoryId: string, category?: { __typename?: 'ServiceCategory', name: string, type: ServiceCategoryType, id: string } | null } | null, client: { __typename?: 'Client', id: string } } };

export type UpdateListingMutationVariables = Exact<{
  input: UpdateListingInput;
}>;


export type UpdateListingMutation = { __typename?: 'Mutation', updateListing: { __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceAddress?: string | null, location?: any | null, publishState: ListingPublishState, publishedAt?: any | null, listingTags?: Array<string> | null } };

export type UpdateRecurringErrandMutationVariables = Exact<{
  input: UpdateRecurringErrandInput;
}>;


export type UpdateRecurringErrandMutation = { __typename?: 'Mutation', updateRecurringErrand: { __typename?: 'RecurringContract', id: string, frequency: RecurrenceFrequency, nextRunAt: any, active: boolean } };

export type UpdateErrandTemplateMutationVariables = Exact<{
  input: UpdateErrandTemplateInput;
}>;


export type UpdateErrandTemplateMutation = { __typename?: 'Mutation', updateErrandTemplate: { __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceId?: string | null, providerType?: ProviderType | null, serviceAddress?: string | null, createdAt: any } };

export type InitializePaymentMethodMutationVariables = Exact<{
  provider?: InputMaybe<Scalars['String']['input']>;
}>;


export type InitializePaymentMethodMutation = { __typename?: 'Mutation', initializePaymentMethod: { __typename?: 'PaymentInitializationResponse', status: boolean, message: string, data?: { __typename?: 'PaymentInitializationData', authorization_url?: string | null, access_code?: string | null, reference: string } | null } };

export type VerifyAndSavePaymentMethodMutationVariables = Exact<{
  reference: Scalars['String']['input'];
  provider?: InputMaybe<Scalars['String']['input']>;
}>;


export type VerifyAndSavePaymentMethodMutation = { __typename?: 'Mutation', verifyAndSavePaymentMethod: { __typename?: 'PaymentMethod', id: string, cardBrand?: string | null, last4?: string | null, isDefault: boolean, verified: boolean } };

export type AddWorkerServicesMutationVariables = Exact<{
  dto: AddWorkerServicesInput;
}>;


export type AddWorkerServicesMutation = { __typename?: 'Mutation', addWorkerServices: { __typename?: 'User', activeAddressId?: string | null, activeRole?: UserRole | null, country?: string | null, createdAt: any, displayUsername?: string | null, email: string, emailVerified: boolean, id: string, image?: string | null, name: string, onboardingProgress: OnboardingProgress, phoneNumber?: string | null, phoneNumberVerified?: boolean | null, twoFactorEnabled?: boolean | null, updatedAt: any, username?: string | null } };

export type AddAddressMutationVariables = Exact<{
  dto: CreateAddressInput;
}>;


export type AddAddressMutation = { __typename?: 'Mutation', addAddress: { __typename?: 'User', activeAddressId?: string | null, activeRole?: UserRole | null, country?: string | null, createdAt: any, displayUsername?: string | null, email: string, emailVerified: boolean, id: string, image?: string | null, name: string, username?: string | null, onboardingProgress: OnboardingProgress, phoneNumber?: string | null, phoneNumberVerified?: boolean | null, twoFactorEnabled?: boolean | null, updatedAt: any } };

export type CreateUserRoleMutationVariables = Exact<{
  role: UserRole;
}>;


export type CreateUserRoleMutation = { __typename?: 'Mutation', createUserRole: { __typename?: 'User', username?: string | null, updatedAt: any, twoFactorEnabled?: boolean | null, phoneNumberVerified?: boolean | null, phoneNumber?: string | null, name: string, image?: string | null, id: string, emailVerified: boolean, email: string, displayUsername?: string | null, createdAt: any, country?: string | null, activeAddressId?: string | null, onboardingProgress: OnboardingProgress, activeRole?: UserRole | null } };

export type DeleteAddressMutationVariables = Exact<{
  addressId: Scalars['String']['input'];
}>;


export type DeleteAddressMutation = { __typename?: 'Mutation', deleteAddress: boolean };

export type UseCurrentAddressMutationVariables = Exact<{
  input: ReverseGeocodeInput;
}>;


export type UseCurrentAddressMutation = { __typename?: 'Mutation', useCurrentAddress: { __typename?: 'User', activeAddressId?: string | null, activeRole?: UserRole | null, country?: string | null, createdAt: any, displayUsername?: string | null, email: string, emailVerified: boolean, id: string, image?: string | null, name: string, username?: string | null, updatedAt: any, twoFactorEnabled?: boolean | null, phoneNumberVerified?: boolean | null, phoneNumber?: string | null, onboardingProgress: OnboardingProgress } };

export type GetPlaceDetailsQueryVariables = Exact<{
  input: PlaceDetailsInput;
}>;


export type GetPlaceDetailsQuery = { __typename?: 'Query', placeDetails: { __typename?: 'AddressDetails', formattedAddress: string, latitude: number, longitude: number } };

export type GetUserAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAddressesQuery = { __typename?: 'Query', getUserAddresses: Array<{ __typename?: 'UserAddress', address: string, createdAt: any, id: string, label: string, updatedAt: any, userId: string, location: { __typename?: 'GeoPoint', type: string, coordinates: Array<number> } }> };

export type SuggestAddressesQueryVariables = Exact<{
  input: SuggestAddressInput;
}>;


export type SuggestAddressesQuery = { __typename?: 'Query', suggestAddresses: Array<{ __typename?: 'AddressSuggestion', description: string, placeId: string }> };

export type GetUserChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserChatsQuery = { __typename?: 'Query', getUserChats: Array<{ __typename?: 'ChatRoom', id: string, participantIds: Array<string>, createdAt: any, updatedAt: any, unreadCount: number, participants: Array<{ __typename?: 'User', id: string, name: string, image?: string | null }>, messages?: Array<{ __typename?: 'Message', id: string, roomId: string, senderId: string, content?: string | null, contentUrl?: string | null, type: MessageType, seen: boolean, delivered: boolean, createdAt: any, fileName?: string | null, fileSize?: number | null, mimeType?: string | null, width?: number | null, height?: number | null, durationMs?: number | null, waveform?: any | null } | null> | null, lastMessage?: { __typename?: 'Message', content?: string | null, type: MessageType, seen: boolean, delivered: boolean, sent: boolean, createdAt: any, senderId: string } | null }> };

export type ClientDashboardQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientDashboardQuery = { __typename?: 'Query', clientDashboard: { __typename?: 'ClientDashboard', completedRequirementsCount: number, totalRequirementsCount: number, activeErrandsCount: number, draftErrandsCount: number, totalErrandsCount: number, completedErrandsCount: number, totalSpent: number, walletBalance: number, marketTrends: Array<string>, requirements: Array<{ __typename?: 'DashboardRequirement', key: string, title: string, description: string, requiredTo: string, isCompleted: boolean }>, activeErrands: Array<{ __typename?: 'Errand', id: string, title: string, description?: string | null, status?: ErrandStatus | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceAddress?: string | null, providerType?: ProviderType | null, createdAt: any, updatedAt: any, completionDeadline?: any | null, service?: { __typename?: 'Service', id: string, name: string } | null }>, draftErrands: Array<{ __typename?: 'Errand', id: string, title: string, description?: string | null, status?: ErrandStatus | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceAddress?: string | null, serviceId?: string | null, providerType?: ProviderType | null, createdAt: any, updatedAt: any, service?: { __typename?: 'Service', id: string, name: string } | null }> } };

export type ApplicationQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ApplicationQuery = { __typename?: 'Query', application: { __typename?: 'Application', id: string, errandId: string, workerId: string, status: ApplicationStatus, acceptedAt?: any | null, createdAt: any, worker?: { __typename?: 'Provider', id: string, userId: string, user: { __typename?: 'User', id: string, name: string, image?: string | null, username?: string | null } } | null } };

export type ErrandBundleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ErrandBundleQuery = { __typename?: 'Query', errandBundle?: { __typename?: 'ErrandBundle', id: string, name: string, description: string, basePrice: number, active: boolean, items?: Array<{ __typename?: 'BundleItem', id: string, template?: { __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null } | null } | null> | null } | null };

export type ErrandBundlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ErrandBundlesQuery = { __typename?: 'Query', errandBundles: Array<{ __typename?: 'ErrandBundle', id: string, name: string, description: string, basePrice: number, active: boolean, items?: Array<{ __typename?: 'BundleItem', id: string, template?: { __typename?: 'ErrandTemplate', id: string, title: string, price?: number | null, hourlyRate?: number | null } | null } | null> | null }> };

export type GetDispatchQueueQueryVariables = Exact<{
  providerOrgId: Scalars['ID']['input'];
}>;


export type GetDispatchQueueQuery = { __typename?: 'Query', dispatchQueue: Array<{ __typename?: 'Errand', id: string, title: string, description?: string | null, status?: ErrandStatus | null, sourceType: string, providerOrgId?: string | null, clientId: string, price?: number | null, pricingType: PricingType, serviceAddress?: string | null, location?: any | null, createdAt: any, client: { __typename?: 'Client', userId: string, user: { __typename?: 'User', id: string, name: string, image?: string | null } } }> };

export type ErrandQueryVariables = Exact<{
  errandId: Scalars['ID']['input'];
}>;


export type ErrandQuery = { __typename?: 'Query', errand: { __typename?: 'Errand', id: string, title: string, status?: ErrandStatus | null, serviceAddress?: string | null, location?: any | null, providerType?: ProviderType | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, transportAllowance?: number | null, materialsBudget?: number | null, description?: string | null, createdAt: any, updatedAt: any, completionDeadline?: any | null, clientId: string, assignedTo?: string | null, isRecurring: boolean, service?: { __typename?: 'Service', id: string, name: string } | null, client: { __typename?: 'Client', id: string, paymentMethods?: Array<{ __typename?: 'PaymentMethod', verified: boolean } | null> | null, user: { __typename?: 'User', id: string, name: string, image?: string | null, username?: string | null, email: string, createdAt: any } }, ratings?: Array<{ __typename?: 'Rating', id: string, rating: number, comment?: string | null, raterId: string, rateeId: string, rateeType: RateeType, createdAt: any, reactions?: Array<{ __typename?: 'RatingReaction', id: string, emoji: string, userId: string } | null> | null, replies?: Array<{ __typename?: 'RatingReply', id: string, userId: string, content: string, createdAt: any } | null> | null } | null> | null } };

export type ErrandApplicationSummaryQueryVariables = Exact<{
  errandId: Scalars['ID']['input'];
}>;


export type ErrandApplicationSummaryQuery = { __typename?: 'Query', errandApplicationSummary: { __typename?: 'ErrandApplicationSummary', totalApplications: number, pendingApplications: number, acceptedApplications: number, cancelledApplications: number, rejectedApplications: number, chattingApplicants: number, myApplicationStatus?: ApplicationStatus | null } };

export type ErrandApplicationsQueryVariables = Exact<{
  errandId: Scalars['ID']['input'];
}>;


export type ErrandApplicationsQuery = { __typename?: 'Query', errandApplications: Array<{ __typename?: 'Application', id: string, errandId: string, workerId: string, status: ApplicationStatus, acceptedAt?: any | null, createdAt: any, worker?: { __typename?: 'Provider', id: string, userId: string, user: { __typename?: 'User', id: string, name: string, image?: string | null, username?: string | null } } | null }> };

export type GetErrandsQueryVariables = Exact<{
  input: ErrandQueryInput;
}>;


export type GetErrandsQuery = { __typename?: 'Query', getErrands: { __typename?: 'PaginatedErrands', total: number, page: number, limit: number, totalPages: number, hasNextPage: boolean, hasPreviousPage: boolean, data: Array<{ __typename?: 'ErrandWithClient', id: string, title: string, description?: string | null, status?: ErrandStatus | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceAddress?: string | null, location?: any | null, providerType?: ProviderType | null, completionDeadline?: any | null, createdAt: any, updatedAt: any, clientId: string, assignedTo?: string | null, clientName?: string | null, clientRating?: number | null, distance?: number | null, isSaved?: boolean | null, service?: { __typename?: 'Service', id: string, name: string } | null, client: { __typename?: 'Client', id: string, userId: string, user: { __typename?: 'User', id: string, name: string, email: string, image?: string | null } } }> } };

export type GetListingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetListingQuery = { __typename?: 'Query', listing?: { __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, price?: number | null, pricingType: PricingType, publishState: ListingPublishState, publishedAt?: any | null, providerOrgId?: string | null, service?: { __typename?: 'Service', id: string, name: string } | null } | null };

export type GetListingsQueryVariables = Exact<{
  providerOrgId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetListingsQuery = { __typename?: 'Query', listings: Array<{ __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceAddress?: string | null, location?: any | null, providerOrgId?: string | null, publishState: ListingPublishState, publishedAt?: any | null, isListing: boolean, listingTags?: Array<string> | null, createdAt: any }> };

export type MyErrandTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyErrandTemplatesQuery = { __typename?: 'Query', myErrandTemplates: Array<{ __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceId?: string | null, providerType?: ProviderType | null, serviceAddress?: string | null, createdAt: any }> };

export type GetMyErrandsQueryVariables = Exact<{
  input: GetMyErrandsInput;
}>;


export type GetMyErrandsQuery = { __typename?: 'Query', getMyErrands: { __typename?: 'PaginatedErrands', total: number, page: number, limit: number, totalPages: number, hasNextPage: boolean, hasPreviousPage: boolean, data: Array<{ __typename?: 'ErrandWithClient', id: string, title: string, description?: string | null, status?: ErrandStatus | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceAddress?: string | null, location?: any | null, providerType?: ProviderType | null, completionDeadline?: any | null, createdAt: any, updatedAt: any, clientId: string, assignedTo?: string | null, clientName?: string | null, clientRating?: number | null, distance?: number | null, isSaved?: boolean | null, service?: { __typename?: 'Service', id: string, name: string } | null, client: { __typename?: 'Client', id: string, userId: string, user: { __typename?: 'User', id: string, name: string, email: string, image?: string | null } } }> } };

export type MyRecurringErrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyRecurringErrandsQuery = { __typename?: 'Query', myRecurringErrands: Array<{ __typename?: 'RecurringContract', id: string, clientId: string, templateId: string, frequency: RecurrenceFrequency, nextRunAt: any, active: boolean, template: { __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null } }> };

export type ErrandTemplateQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ErrandTemplateQuery = { __typename?: 'Query', errandTemplate?: { __typename?: 'ErrandTemplate', id: string, title: string, description?: string | null, pricingType: PricingType, price?: number | null, hourlyRate?: number | null, serviceId?: string | null, providerType?: ProviderType | null, serviceAddress?: string | null, createdAt: any } | null };

export type GetMyOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyOrganizationQuery = { __typename?: 'Query', myOrganization?: { __typename?: 'Organization', id: string, name: string, description?: string | null, logo?: string | null, ownerId: string, members?: Array<{ __typename?: 'OrgMember', id: string, role: OrgRole, user: { __typename?: 'User', id: string, name: string, email: string, image?: string | null } } | null> | null } | null };

export type GetPaymentMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentMethodsQuery = { __typename?: 'Query', myPaymentMethods: Array<{ __typename?: 'PaymentMethod', id: string, provider: string, type: string, cardBrand?: string | null, last4?: string | null, expMonth?: number | null, expYear?: number | null, isDefault: boolean, verified: boolean }> };

export type GetProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProvidersQuery = { __typename?: 'Query', getProviders: { __typename?: 'ProviderDiscoveryResponse', popular: Array<(
      { __typename?: 'Provider' }
      & { ' $fragmentRefs'?: { 'ProviderFieldsFragment': ProviderFieldsFragment } }
    )>, new: Array<(
      { __typename?: 'Provider' }
      & { ' $fragmentRefs'?: { 'ProviderFieldsFragment': ProviderFieldsFragment } }
    )>, trusted: Array<(
      { __typename?: 'Provider' }
      & { ' $fragmentRefs'?: { 'ProviderFieldsFragment': ProviderFieldsFragment } }
    )>, suggested: Array<(
      { __typename?: 'Provider' }
      & { ' $fragmentRefs'?: { 'ProviderFieldsFragment': ProviderFieldsFragment } }
    )> } };

export type ProviderFieldsFragment = { __typename?: 'Provider', id: string, userId: string, tier: ProviderTier, tierUpdatedAt?: any | null, providerType?: ProviderType | null, user: { __typename?: 'User', id: string, name: string, email: string, image?: string | null }, activeAddress?: { __typename?: 'UserAddress', id: string, address: string, label: string } | null, services: Array<{ __typename?: 'Service', id: string, name: string } | null>, rating?: { __typename?: 'RatingStats', averageRating: number, totalReviews: number } | null } & { ' $fragmentName'?: 'ProviderFieldsFragment' };

export type GetTrustedCircleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrustedCircleQuery = { __typename?: 'Query', getTrustedCircle?: { __typename?: 'TrustedCircle', id: string, members?: Array<{ __typename?: 'TrustedCircleMember', id: string, provider: { __typename?: 'Provider', id: string, userId: string, tier: ProviderTier, tierUpdatedAt?: any | null, providerType?: ProviderType | null, user: { __typename?: 'User', id: string, name: string, email: string, image?: string | null, createdAt: any, emailVerified: boolean, onboardingProgress: OnboardingProgress, updatedAt: any }, activeAddress?: { __typename?: 'UserAddress', id: string, address: string, label: string } | null, services: Array<{ __typename?: 'Service', id: string, name: string, category?: { __typename?: 'ServiceCategory', id: string, name: string } | null } | null>, rating?: { __typename?: 'RatingStats', averageRating: number, totalReviews: number } | null } } | null> | null } | null };

export type SearchProvidersQueryVariables = Exact<{
  input: SearchProvidersInput;
}>;


export type SearchProvidersQuery = { __typename?: 'Query', searchProviders: Array<{ __typename?: 'Provider', id: string, userId: string, tier: ProviderTier, tierUpdatedAt?: any | null, providerType?: ProviderType | null, user: { __typename?: 'User', id: string, name: string, email: string, image?: string | null }, activeAddress?: { __typename?: 'UserAddress', id: string, address: string, label: string } | null, services: Array<{ __typename?: 'Service', id: string, name: string } | null>, rating?: { __typename?: 'RatingStats', averageRating: number, totalReviews: number } | null }> };

export type GetUserSearchHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSearchHistoryQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string } };

export type ServiceCategoriesQueryVariables = Exact<{
  input?: InputMaybe<GetServiceCategoriesInput>;
}>;


export type ServiceCategoriesQuery = { __typename?: 'Query', serviceCategories: Array<{ __typename?: 'ServiceCategory', id: string, name: string, type: ServiceCategoryType, services?: Array<{ __typename?: 'Service', id: string, name: string, type: ServiceCategoryType, categoryId: string }> | null }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', activeAddressId?: string | null, country?: string | null, activeRole?: UserRole | null, createdAt: any, displayUsername?: string | null, email: string, emailVerified: boolean, id: string, image?: string | null, name: string, phoneNumber?: string | null, phoneNumberVerified?: boolean | null, twoFactorEnabled?: boolean | null, updatedAt: any, username?: string | null, onboardingProgress: OnboardingProgress, userAddress?: Array<{ __typename?: 'UserAddress', label: string, address: string, id: string, location: { __typename?: 'GeoPoint', type: string, coordinates: Array<number> } } | null> | null } };

export type MessageDeliveredForUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageDeliveredForUserSubscription = { __typename?: 'Subscription', messageDeliveredForUser: { __typename?: 'Message', id: string, roomId: string, senderId: string, delivered: boolean, seen: boolean } };

export type MessageSeenForUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageSeenForUserSubscription = { __typename?: 'Subscription', messageSeenForUser: { __typename?: 'Message', id: string, roomId: string, senderId: string, delivered: boolean, seen: boolean } };

export type MessageSentForUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageSentForUserSubscription = { __typename?: 'Subscription', messageSentForUser: { __typename?: 'Message', content?: string | null, contentUrl?: string | null, createdAt: any, delivered: boolean, durationMs?: number | null, fileName?: string | null, fileSize?: number | null, height?: number | null, id: string, mimeType?: string | null, roomId: string, seen: boolean, senderId: string, type: MessageType, waveform?: any | null, width?: number | null, reactions?: Array<{ __typename?: 'Reaction', emoji: string, id: string, messageId: string, userId: string } | null> | null } };

export const ProviderFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"tier"}},{"kind":"Field","name":{"kind":"Name","value":"tierUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"totalReviews"}}]}}]}}]} as unknown as DocumentNode<ProviderFieldsFragment, unknown>;
export const GetOrCreateChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GetOrCreateChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createChatInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOrCreateChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createChatInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createChatInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messageId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roomId"}},{"kind":"Field","name":{"kind":"Name","value":"seen"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"waveform"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unreadCount"}},{"kind":"Field","name":{"kind":"Name","value":"participantIds"}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetOrCreateChatMutation, GetOrCreateChatMutationVariables>;
export const MarkMessageAsDeliveredDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MarkMessageAsDelivered"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markMessageAsDelivered"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"messageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roomId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"seen"}}]}}]}}]} as unknown as DocumentNode<MarkMessageAsDeliveredMutation, MarkMessageAsDeliveredMutationVariables>;
export const MarkMessageAsSeenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MarkMessageAsSeen"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markMessageAsSeen"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"messageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roomId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"seen"}}]}}]}}]} as unknown as DocumentNode<MarkMessageAsSeenMutation, MarkMessageAsSeenMutationVariables>;
export const SendMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sendMessageInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sendMessageInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sendMessageInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messageId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roomId"}},{"kind":"Field","name":{"kind":"Name","value":"seen"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"waveform"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]} as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const AcceptApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AcceptApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AcceptApplicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"}}]}}]}}]} as unknown as DocumentNode<AcceptApplicationMutation, AcceptApplicationMutationVariables>;
export const AddBundleItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddBundleItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddBundleItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addBundleItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<AddBundleItemMutation, AddBundleItemMutationVariables>;
export const ApplyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Apply"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createApplicationInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateApplicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apply"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createApplicationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createApplicationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"workerId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ApplyMutation, ApplyMutationVariables>;
export const CancelRecurringErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelRecurringErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelRecurringErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<CancelRecurringErrandMutation, CancelRecurringErrandMutationVariables>;
export const CreateErrandBundleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateErrandBundle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateErrandBundleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createErrandBundle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"basePrice"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateErrandBundleMutation, CreateErrandBundleMutationVariables>;
export const CreateErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createErrandInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateErrandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createErrandInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createErrandInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}}]}}]}}]} as unknown as DocumentNode<CreateErrandMutation, CreateErrandMutationVariables>;
export const CreateErrandsFromBundleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateErrandsFromBundle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateErrandsFromBundleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createErrandsFromBundle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CreateErrandsFromBundleMutation, CreateErrandsFromBundleMutationVariables>;
export const CreateErrandFromTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateErrandFromTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateErrandFromTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createErrandFromTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}}]}}]}}]} as unknown as DocumentNode<CreateErrandFromTemplateMutation, CreateErrandFromTemplateMutationVariables>;
export const CreateListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateListingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"providerOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"publishState"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isListing"}},{"kind":"Field","name":{"kind":"Name","value":"listingTags"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateListingMutation, CreateListingMutationVariables>;
export const CreateRecurringErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRecurringErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRecurringErrandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecurringErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"nextRunAt"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRecurringErrandMutation, CreateRecurringErrandMutationVariables>;
export const CreateRecurringContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRecurringContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"templateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frequency"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecurringContractFromListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"templateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"templateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"frequency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frequency"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"providerOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"nextRunAt"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"providerPreAccepted"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRecurringContractMutation, CreateRecurringContractMutationVariables>;
export const CreateErrandTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateErrandTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateErrandTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createErrandTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateErrandTemplateMutation, CreateErrandTemplateMutationVariables>;
export const DeleteErrandBundleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteErrandBundle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteErrandBundle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteErrandBundleMutation, DeleteErrandBundleMutationVariables>;
export const DeleteRecurringErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRecurringErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRecurringErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteRecurringErrandMutation, DeleteRecurringErrandMutationVariables>;
export const DeleteErrandTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteErrandTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteErrandTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteErrandTemplateMutation, DeleteErrandTemplateMutationVariables>;
export const DispatchErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DispatchErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DispatchErrandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dispatchErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"providerOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"workerId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"}}]}}]}}]} as unknown as DocumentNode<DispatchErrandMutation, DispatchErrandMutationVariables>;
export const HireFromListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"HireFromListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"templateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hireFromListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"templateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"templateId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}},{"kind":"Field","name":{"kind":"Name","value":"providerOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<HireFromListingMutation, HireFromListingMutationVariables>;
export const PublishListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishState"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isListing"}}]}}]}}]} as unknown as DocumentNode<PublishListingMutation, PublishListingMutationVariables>;
export const RemoveBundleItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveBundleItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveBundleItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeBundleItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveBundleItemMutation, RemoveBundleItemMutationVariables>;
export const RemoveErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<RemoveErrandMutation, RemoveErrandMutationVariables>;
export const SaveErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"errandId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<SaveErrandMutation, SaveErrandMutationVariables>;
export const UpdateErrandBundleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateErrandBundle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateErrandBundleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateErrandBundle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"basePrice"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<UpdateErrandBundleMutation, UpdateErrandBundleMutationVariables>;
export const UpdateErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateErrandInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateErrandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateErrandInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateErrandInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"transportAllowance"}},{"kind":"Field","name":{"kind":"Name","value":"materialsBudget"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateErrandMutation, UpdateErrandMutationVariables>;
export const UpdateListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateListingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"publishState"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"listingTags"}}]}}]}}]} as unknown as DocumentNode<UpdateListingMutation, UpdateListingMutationVariables>;
export const UpdateRecurringErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRecurringErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateRecurringErrandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRecurringErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"nextRunAt"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<UpdateRecurringErrandMutation, UpdateRecurringErrandMutationVariables>;
export const UpdateErrandTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateErrandTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateErrandTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateErrandTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<UpdateErrandTemplateMutation, UpdateErrandTemplateMutationVariables>;
export const InitializePaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InitializePaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"provider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"initializePaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"provider"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorization_url"}},{"kind":"Field","name":{"kind":"Name","value":"access_code"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}}]}}]}}]}}]} as unknown as DocumentNode<InitializePaymentMethodMutation, InitializePaymentMethodMutationVariables>;
export const VerifyAndSavePaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyAndSavePaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reference"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"provider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAndSavePaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reference"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reference"}}},{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"provider"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}},{"kind":"Field","name":{"kind":"Name","value":"last4"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]} as unknown as DocumentNode<VerifyAndSavePaymentMethodMutation, VerifyAndSavePaymentMethodMutationVariables>;
export const AddWorkerServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddWorkerServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddWorkerServicesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addWorkerServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<AddWorkerServicesMutation, AddWorkerServicesMutationVariables>;
export const AddAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<AddAddressMutation, AddAddressMutationVariables>;
export const CreateUserRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserRole"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}}]}}]}}]} as unknown as DocumentNode<CreateUserRoleMutation, CreateUserRoleMutationVariables>;
export const DeleteAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addressId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addressId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addressId"}}}]}]}}]} as unknown as DocumentNode<DeleteAddressMutation, DeleteAddressMutationVariables>;
export const UseCurrentAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UseCurrentAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReverseGeocodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"useCurrentAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}}]}}]}}]} as unknown as DocumentNode<UseCurrentAddressMutation, UseCurrentAddressMutationVariables>;
export const GetPlaceDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlaceDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDetailsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formattedAddress"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]} as unknown as DocumentNode<GetPlaceDetailsQuery, GetPlaceDetailsQueryVariables>;
export const GetUserAddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserAddresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserAddresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserAddressesQuery, GetUserAddressesQueryVariables>;
export const SuggestAddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestAddresses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SuggestAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suggestAddresses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"placeId"}}]}}]}}]} as unknown as DocumentNode<SuggestAddressesQuery, SuggestAddressesQueryVariables>;
export const GetUserChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserChats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserChats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"participantIds"}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roomId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentUrl"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"seen"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"waveform"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unreadCount"}},{"kind":"Field","name":{"kind":"Name","value":"lastMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"seen"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"sent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserChatsQuery, GetUserChatsQueryVariables>;
export const ClientDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClientDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requiredTo"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completedRequirementsCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalRequirementsCount"}},{"kind":"Field","name":{"kind":"Name","value":"activeErrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completionDeadline"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeErrandsCount"}},{"kind":"Field","name":{"kind":"Name","value":"draftErrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draftErrandsCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalErrandsCount"}},{"kind":"Field","name":{"kind":"Name","value":"completedErrandsCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalSpent"}},{"kind":"Field","name":{"kind":"Name","value":"walletBalance"}},{"kind":"Field","name":{"kind":"Name","value":"marketTrends"}}]}}]}}]} as unknown as DocumentNode<ClientDashboardQuery, ClientDashboardQueryVariables>;
export const ApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Application"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"workerId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"worker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ApplicationQuery, ApplicationQueryVariables>;
export const ErrandBundleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ErrandBundle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandBundle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"basePrice"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ErrandBundleQuery, ErrandBundleQueryVariables>;
export const ErrandBundlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ErrandBundles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandBundles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"basePrice"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ErrandBundlesQuery, ErrandBundlesQueryVariables>;
export const GetDispatchQueueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDispatchQueue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerOrgId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dispatchQueue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"providerOrgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerOrgId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}},{"kind":"Field","name":{"kind":"Name","value":"providerOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDispatchQueueQuery, GetDispatchQueueQueryVariables>;
export const ErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Errand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"transportAllowance"}},{"kind":"Field","name":{"kind":"Name","value":"materialsBudget"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completionDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"isRecurring"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"raterId"}},{"kind":"Field","name":{"kind":"Name","value":"rateeId"}},{"kind":"Field","name":{"kind":"Name","value":"rateeType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ErrandQuery, ErrandQueryVariables>;
export const ErrandApplicationSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ErrandApplicationSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandApplicationSummary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"errandId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalApplications"}},{"kind":"Field","name":{"kind":"Name","value":"pendingApplications"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedApplications"}},{"kind":"Field","name":{"kind":"Name","value":"cancelledApplications"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedApplications"}},{"kind":"Field","name":{"kind":"Name","value":"chattingApplicants"}},{"kind":"Field","name":{"kind":"Name","value":"myApplicationStatus"}}]}}]}}]} as unknown as DocumentNode<ErrandApplicationSummaryQuery, ErrandApplicationSummaryQueryVariables>;
export const ErrandApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ErrandApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandApplications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"errandId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"workerId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"worker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ErrandApplicationsQuery, ErrandApplicationsQueryVariables>;
export const GetErrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetErrands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ErrandQueryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getErrands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"completionDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"clientName"}},{"kind":"Field","name":{"kind":"Name","value":"clientRating"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"isSaved"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]} as unknown as DocumentNode<GetErrandsQuery, GetErrandsQueryVariables>;
export const GetListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"publishState"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerOrgId"}}]}}]}}]} as unknown as DocumentNode<GetListingQuery, GetListingQueryVariables>;
export const GetListingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerOrgId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"providerOrgId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerOrgId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"providerOrgId"}},{"kind":"Field","name":{"kind":"Name","value":"publishState"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isListing"}},{"kind":"Field","name":{"kind":"Name","value":"listingTags"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetListingsQuery, GetListingsQueryVariables>;
export const MyErrandTemplatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyErrandTemplates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myErrandTemplates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<MyErrandTemplatesQuery, MyErrandTemplatesQueryVariables>;
export const GetMyErrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyErrands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMyErrandsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyErrands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"completionDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"clientName"}},{"kind":"Field","name":{"kind":"Name","value":"clientRating"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"isSaved"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]} as unknown as DocumentNode<GetMyErrandsQuery, GetMyErrandsQueryVariables>;
export const MyRecurringErrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyRecurringErrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myRecurringErrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"nextRunAt"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}}]}}]}}]}}]} as unknown as DocumentNode<MyRecurringErrandsQuery, MyRecurringErrandsQueryVariables>;
export const ErrandTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ErrandTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricingType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hourlyRate"}},{"kind":"Field","name":{"kind":"Name","value":"serviceId"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"serviceAddress"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ErrandTemplateQuery, ErrandTemplateQueryVariables>;
export const GetMyOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMyOrganizationQuery, GetMyOrganizationQueryVariables>;
export const GetPaymentMethodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myPaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}},{"kind":"Field","name":{"kind":"Name","value":"last4"}},{"kind":"Field","name":{"kind":"Name","value":"expMonth"}},{"kind":"Field","name":{"kind":"Name","value":"expYear"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]} as unknown as DocumentNode<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>;
export const GetProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"popular"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"new"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trusted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"suggested"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"tier"}},{"kind":"Field","name":{"kind":"Name","value":"tierUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"totalReviews"}}]}}]}}]} as unknown as DocumentNode<GetProvidersQuery, GetProvidersQueryVariables>;
export const GetTrustedCircleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrustedCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTrustedCircle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"tier"}},{"kind":"Field","name":{"kind":"Name","value":"tierUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"totalReviews"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTrustedCircleQuery, GetTrustedCircleQueryVariables>;
export const SearchProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchProviders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchProvidersInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchProviders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"tier"}},{"kind":"Field","name":{"kind":"Name","value":"tierUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerType"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"totalReviews"}}]}}]}}]}}]} as unknown as DocumentNode<SearchProvidersQuery, SearchProvidersQueryVariables>;
export const GetUserSearchHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserSearchHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetUserSearchHistoryQuery, GetUserSearchHistoryQueryVariables>;
export const ServiceCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ServiceCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetServiceCategoriesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serviceCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}}]}}]}}]}}]} as unknown as DocumentNode<ServiceCategoriesQuery, ServiceCategoriesQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeAddressId"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"activeRole"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"twoFactorEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingProgress"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const MessageDeliveredForUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MessageDeliveredForUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageDeliveredForUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roomId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"seen"}}]}}]}}]} as unknown as DocumentNode<MessageDeliveredForUserSubscription, MessageDeliveredForUserSubscriptionVariables>;
export const MessageSeenForUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MessageSeenForUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageSeenForUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roomId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"seen"}}]}}]}}]} as unknown as DocumentNode<MessageSeenForUserSubscription, MessageSeenForUserSubscriptionVariables>;
export const MessageSentForUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MessageSentForUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageSentForUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"contentUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messageId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roomId"}},{"kind":"Field","name":{"kind":"Name","value":"seen"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"waveform"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]} as unknown as DocumentNode<MessageSentForUserSubscription, MessageSentForUserSubscriptionVariables>;