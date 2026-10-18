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

export type AddBankAccountInput = {
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountNumber: Scalars['String']['input'];
  bankCode: Scalars['String']['input'];
  currency?: Scalars['String']['input'];
  isDefault?: Scalars['Boolean']['input'];
};

export type AddOrganizationMemberInput = {
  organizationPartyId: Scalars['String']['input'];
  role: OrgMemberRole;
  userId: Scalars['String']['input'];
};

export type AddOrganizationMemberType = {
  __typename?: 'AddOrganizationMemberType';
  organizationPartyId: Scalars['String']['output'];
  role: OrgMemberRole;
  userId: Scalars['String']['output'];
};

export type AddProviderRoleType = {
  __typename?: 'AddProviderRoleType';
  partyId: Scalars['String']['output'];
  tier: ProviderTier;
};

export type AddTrustedMemberInput = {
  memberPartyId: Scalars['String']['input'];
  sharedFromPartyId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AddressCoordinatesGraphQlType = {
  __typename?: 'AddressCoordinatesGraphQLType';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type AddressGraphQlType = {
  __typename?: 'AddressGraphQLType';
  city: Scalars['String']['output'];
  coordinates?: Maybe<AddressCoordinatesGraphQlType>;
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type ApplicationGraphQlType = {
  __typename?: 'ApplicationGraphQLType';
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  errandId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  proposal: Scalars['String']['output'];
  proposedAmountMinorUnits: Scalars['Int']['output'];
  providerPartyId: Scalars['String']['output'];
  rejectedAt?: Maybe<Scalars['DateTime']['output']>;
  status: ApplicationStatus;
  type: ApplicationType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ApplicationOperationResultType = {
  __typename?: 'ApplicationOperationResultType';
  id: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export enum ApplicationStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export enum ApplicationType {
  DirectOffer = 'DIRECT_OFFER',
  Organization = 'ORGANIZATION',
  Provider = 'PROVIDER'
}

export type AwardBadgeInput = {
  awardedByOrganizationId: Scalars['String']['input'];
  badgeType: BadgeType;
  partyId: Scalars['String']['input'];
  period: Scalars['String']['input'];
};

export type AwardBadgeType = {
  __typename?: 'AwardBadgeType';
  badgeId: Scalars['String']['output'];
  badgeType: BadgeType;
  partyId: Scalars['String']['output'];
};

export enum BadgeType {
  WorkerOfTheMonth = 'WORKER_OF_THE_MONTH',
  WorkerOfTheYear = 'WORKER_OF_THE_YEAR'
}

export type BankAccountType = {
  __typename?: 'BankAccountType';
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber: Scalars['String']['output'];
  bankCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  ownerId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BrowseOpenErrandsInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  limit?: Scalars['Int']['input'];
  longitude: Scalars['Float']['input'];
  radiusMeters?: InputMaybe<Scalars['Float']['input']>;
  requesterPartyId: Scalars['String']['input'];
};

export type BrowseOpenErrandsResponseType = {
  __typename?: 'BrowseOpenErrandsResponseType';
  items: Array<ErrandSummaryType>;
};

export type CategoryTreeNodeType = {
  __typename?: 'CategoryTreeNodeType';
  children: Array<CategoryTreeNodeType>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  requiredTier?: Maybe<ProviderTier>;
};

export type ChatMessageType = {
  __typename?: 'ChatMessageType';
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
  sentAt: Scalars['String']['output'];
  threadId: Scalars['String']['output'];
};

export type ChatThreadType = {
  __typename?: 'ChatThreadType';
  closedAt?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  errandId: Scalars['String']['output'];
  firstResponseAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  participantIds: Array<Scalars['String']['output']>;
};

export type ConfirmAssignmentCompletionType = {
  __typename?: 'ConfirmAssignmentCompletionType';
  errandAssignmentId: Scalars['String']['output'];
  errandReadyForCompletion: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
};

export type CoordinatesInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type CreateAddressInput = {
  city: Scalars['String']['input'];
  coordinates: CoordinatesInput;
  country: Scalars['String']['input'];
  label: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type CreateErrandInput = {
  addressId: Scalars['String']['input'];
  budget: ErrandBudgetInput;
  categoryId: Scalars['String']['input'];
  clientPartyId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type DisputeType = {
  __typename?: 'DisputeType';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  errandId: Scalars['String']['output'];
  evidenceUrls: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  raisedById: Scalars['String']['output'];
  reason: Scalars['String']['output'];
  resolution?: Maybe<Scalars['String']['output']>;
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  resolvedById?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ErrandBudgetInput = {
  amountMinorUnits: Scalars['Int']['input'];
  currency: Scalars['String']['input'];
};

export type ErrandBudgetType = {
  __typename?: 'ErrandBudgetType';
  amountMinorUnits: Scalars['Int']['output'];
  currency: Scalars['String']['output'];
};

export type ErrandDetailType = {
  __typename?: 'ErrandDetailType';
  addressId: Scalars['String']['output'];
  budget: ErrandBudgetType;
  categoryId: Scalars['String']['output'];
  clientPartyId: Scalars['String']['output'];
  completedAt?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  marketId: Scalars['String']['output'];
  requiredTier: Scalars['String']['output'];
  sourceType: Scalars['String']['output'];
  startedAt?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ErrandOperationResultType = {
  __typename?: 'ErrandOperationResultType';
  errandId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type ErrandSummaryType = {
  __typename?: 'ErrandSummaryType';
  budget: ErrandBudgetType;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  distanceMeters: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type EscrowGraphQlType = {
  __typename?: 'EscrowGraphQLType';
  amountGross: Scalars['Float']['output'];
  amountNetWorker: Scalars['Float']['output'];
  clientPartyId: Scalars['String']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  errandId: Scalars['String']['output'];
  holdUntil?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  platformFee: Scalars['Float']['output'];
  providerPartyId: Scalars['String']['output'];
  refundedAt?: Maybe<Scalars['DateTime']['output']>;
  releasedAt?: Maybe<Scalars['DateTime']['output']>;
  status: EscrowStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export enum EscrowStatus {
  CompletedPendingPayout = 'COMPLETED_PENDING_PAYOUT',
  Disputed = 'DISPUTED',
  Funded = 'FUNDED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Refunding = 'REFUNDING',
  Released = 'RELEASED',
  Releasing = 'RELEASING'
}

export type LedgerEntryGraphQlType = {
  __typename?: 'LedgerEntryGraphQLType';
  amountMinorUnits: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  escrowId?: Maybe<Scalars['String']['output']>;
  gatewayReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  type: LedgerEntryType;
};

export enum LedgerEntryType {
  ActiveErrandCredit = 'ACTIVE_ERRAND_CREDIT',
  ActiveErrandReversal = 'ACTIVE_ERRAND_REVERSAL',
  AvailableCredit = 'AVAILABLE_CREDIT',
  PendingCredit = 'PENDING_CREDIT',
  PendingReversal = 'PENDING_REVERSAL',
  RefundCredit = 'REFUND_CREDIT',
  WithdrawalDebit = 'WITHDRAWAL_DEBIT'
}

export type LedgerHistoryPageType = {
  __typename?: 'LedgerHistoryPageType';
  entries: Array<LedgerEntryGraphQlType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type ListMessagesType = {
  __typename?: 'ListMessagesType';
  items: Array<ChatMessageType>;
  nextCursor?: Maybe<Scalars['String']['output']>;
};

export type ListServiceInput = {
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  listedById: Scalars['String']['input'];
  price: ServicePriceInput;
  title: Scalars['String']['input'];
};

export type MarketTemplateDto = {
  __typename?: 'MarketTemplateDto';
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  marketId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  subject?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a new bank account for payout / withdrawal */
  addBankAccount: BankAccountType;
  addOrganizationMember: AddOrganizationMemberType;
  addProviderRole: AddProviderRoleType;
  /** Add a provider to user trusted circle */
  addTrustedMember: Scalars['Boolean']['output'];
  awardBadge: AwardBadgeType;
  /** Confirm completion of all errand assignments and complete the errand */
  completeErrand: ErrandOperationResultType;
  /** Worker marks their assignment as completed done */
  confirmAssignmentCompletion: ConfirmAssignmentCompletionType;
  /** Create a new saved address for the authenticated user */
  createAddress: AddressGraphQlType;
  /** Create a new errand in DRAFT status */
  createErrand: ErrandOperationResultType;
  /** Deactivate an active service listing */
  deactivateService: ServiceOperationResultType;
  /** Delete an address for the authenticated user */
  deleteAddress: Scalars['Boolean']['output'];
  /** Delete a saved bank account */
  deleteBankAccount: Scalars['Boolean']['output'];
  /** List a new provider service in a category */
  listService: ServiceOperationResultType;
  /** Directly offer an errand to a trusted circle member */
  offerErrandToTrustedMember: OfferErrandResultType;
  /** Open a formal dispute on an errand */
  openDispute: Scalars['String']['output'];
  /** Publish a draft errand to the marketplace */
  publishErrand: ErrandOperationResultType;
  /** Add or update an emoji reaction on a rating */
  reactToRating: RatingReactionType;
  /** Reject an application for an errand */
  rejectApplication: ApplicationOperationResultType;
  removeOrganizationMember: RemoveOrganizationMemberType;
  /** Remove a provider from user trusted circle */
  removeTrustedMember: Scalars['Boolean']['output'];
  /** Add a reply comment to a rating */
  replyToRating: RatingReplyType;
  /** Client accepts a worker application, initiating escrow charge flow */
  requestApplicationAcceptance: ApplicationOperationResultType;
  requestTierUpgrade: RequestTierUpgradeType;
  /** Request a withdrawal from available wallet balance */
  requestWithdrawal: WithdrawalResultType;
  /** Resolve or reject a dispute (Admin only) */
  resolveDispute: Scalars['Boolean']['output'];
  /** Review and approve/reject a verification step (Admin only) */
  reviewVerificationStep: Scalars['Boolean']['output'];
  sendAdminBroadcast: Scalars['Boolean']['output'];
  /** Send a message in a chat thread */
  sendMessage: SendMessageType;
  /** Set an address as the default for the authenticated user */
  setDefaultAddress: Scalars['Boolean']['output'];
  /** Set a bank account as default */
  setDefaultBankAccount: BankAccountType;
  /** Mark an assigned errand as started/in progress */
  startErrand: ErrandOperationResultType;
  /** Submit an application to perform an errand */
  submitApplication: ApplicationOperationResultType;
  /** Submit a rating for an errand participant */
  submitRating: Scalars['String']['output'];
  /** Submit documents for a verification step */
  submitVerificationStep: Scalars['Boolean']['output'];
  updateMarketTemplate: Scalars['Boolean']['output'];
  updateProviderRole: UpdateProviderRoleType;
  /** Update the price of an existing service */
  updateServicePrice: ServiceOperationResultType;
};


export type MutationAddBankAccountArgs = {
  input: AddBankAccountInput;
};


export type MutationAddOrganizationMemberArgs = {
  input: AddOrganizationMemberInput;
};


export type MutationAddProviderRoleArgs = {
  partyId: Scalars['String']['input'];
};


export type MutationAddTrustedMemberArgs = {
  input: AddTrustedMemberInput;
};


export type MutationAwardBadgeArgs = {
  input: AwardBadgeInput;
};


export type MutationCompleteErrandArgs = {
  completedBy?: Scalars['String']['input'];
  errandId: Scalars['String']['input'];
};


export type MutationConfirmAssignmentCompletionArgs = {
  errandAssignmentId: Scalars['String']['input'];
  proofUrl?: InputMaybe<Scalars['String']['input']>;
  providerPartyId: Scalars['String']['input'];
};


export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


export type MutationCreateErrandArgs = {
  input: CreateErrandInput;
};


export type MutationDeactivateServiceArgs = {
  serviceId: Scalars['String']['input'];
};


export type MutationDeleteAddressArgs = {
  addressId: Scalars['String']['input'];
};


export type MutationDeleteBankAccountArgs = {
  id: Scalars['String']['input'];
};


export type MutationListServiceArgs = {
  input: ListServiceInput;
};


export type MutationOfferErrandToTrustedMemberArgs = {
  currency: Scalars['String']['input'];
  errandId: Scalars['String']['input'];
  offeredToPartyId: Scalars['String']['input'];
  proposedAmountMinorUnits: Scalars['Float']['input'];
};


export type MutationOpenDisputeArgs = {
  input: OpenDisputeInput;
};


export type MutationPublishErrandArgs = {
  errandId: Scalars['String']['input'];
};


export type MutationReactToRatingArgs = {
  input: ReactToRatingInput;
};


export type MutationRejectApplicationArgs = {
  applicationId: Scalars['String']['input'];
  errandId: Scalars['String']['input'];
};


export type MutationRemoveOrganizationMemberArgs = {
  organizationPartyId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationRemoveTrustedMemberArgs = {
  memberPartyId: Scalars['String']['input'];
};


export type MutationReplyToRatingArgs = {
  input: ReplyToRatingInput;
};


export type MutationRequestApplicationAcceptanceArgs = {
  input: RequestApplicationAcceptanceInput;
};


export type MutationRequestTierUpgradeArgs = {
  partyId: Scalars['String']['input'];
  targetTier: ProviderTier;
};


export type MutationRequestWithdrawalArgs = {
  input: RequestWithdrawalInput;
};


export type MutationResolveDisputeArgs = {
  input: ResolveDisputeInput;
};


export type MutationReviewVerificationStepArgs = {
  input: ReviewVerificationStepInput;
};


export type MutationSendAdminBroadcastArgs = {
  input: SendAdminBroadcastInput;
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
};


export type MutationSetDefaultAddressArgs = {
  addressId: Scalars['String']['input'];
};


export type MutationSetDefaultBankAccountArgs = {
  id: Scalars['String']['input'];
};


export type MutationStartErrandArgs = {
  errandId: Scalars['String']['input'];
  providerPartyId: Scalars['String']['input'];
};


export type MutationSubmitApplicationArgs = {
  input: SubmitApplicationInput;
};


export type MutationSubmitRatingArgs = {
  input: SubmitRatingInput;
};


export type MutationSubmitVerificationStepArgs = {
  input: SubmitVerificationStepInput;
};


export type MutationUpdateMarketTemplateArgs = {
  input: UpdateMarketTemplateInput;
};


export type MutationUpdateProviderRoleArgs = {
  input: UpdateProviderRoleInput;
  partyId: Scalars['String']['input'];
};


export type MutationUpdateServicePriceArgs = {
  input: UpdateServicePriceInput;
};

export type MyPartyProfileType = {
  __typename?: 'MyPartyProfileType';
  bio?: Maybe<Scalars['String']['output']>;
  hasClientRole: Scalars['Boolean']['output'];
  hasProviderRole: Scalars['Boolean']['output'];
  kind: Scalars['String']['output'];
  marketId: Scalars['String']['output'];
  partyId: Scalars['ID']['output'];
  providerTier?: Maybe<ProviderTier>;
  skills?: Maybe<Array<Scalars['String']['output']>>;
  userId: Scalars['String']['output'];
};

export type OfferErrandResultType = {
  __typename?: 'OfferErrandResultType';
  applicationId: Scalars['String']['output'];
};

export type OpenDisputeInput = {
  description: Scalars['String']['input'];
  errandId: Scalars['String']['input'];
  evidenceUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  providerPartyId: Scalars['String']['input'];
  reason: Scalars['String']['input'];
};

export type OrgFacingProviderProfileType = {
  __typename?: 'OrgFacingProviderProfileType';
  avgRatingCached?: Maybe<Scalars['Float']['output']>;
  avgResponseTimeSeconds?: Maybe<Scalars['Int']['output']>;
  badges: Array<ProviderBadgeSummaryType>;
  bio?: Maybe<Scalars['String']['output']>;
  completedErrandsCount: Scalars['Int']['output'];
  disputedErrandsCount: Scalars['Int']['output'];
  partyId: Scalars['String']['output'];
  skills: Array<Scalars['String']['output']>;
  tier: ProviderTier;
  trustedByCount: Scalars['Int']['output'];
};

export enum OrgMemberRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type ProviderBadgeSummaryType = {
  __typename?: 'ProviderBadgeSummaryType';
  awardedAt: Scalars['DateTime']['output'];
  awardedByOrganizationId: Scalars['String']['output'];
  badgeType: BadgeType;
  period: Scalars['String']['output'];
};

export type ProviderSearchResultType = {
  __typename?: 'ProviderSearchResultType';
  avgRatingCached?: Maybe<Scalars['Float']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  completedErrandsCount: Scalars['Int']['output'];
  partyId: Scalars['String']['output'];
  skills: Array<Scalars['String']['output']>;
  tier: ProviderTier;
  trustedByCount: Scalars['Int']['output'];
};

export enum ProviderTier {
  Certified = 'CERTIFIED',
  Community = 'COMMUNITY',
  Verified = 'VERIFIED'
}

export type PublicProviderProfileType = {
  __typename?: 'PublicProviderProfileType';
  avgRatingCached?: Maybe<Scalars['Float']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  completedErrandsCount: Scalars['Int']['output'];
  partyId: Scalars['String']['output'];
  skills: Array<Scalars['String']['output']>;
  tier: ProviderTier;
  trustedByCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** List disputes with optional status filter (Admin only) */
  allDisputes: Array<DisputeType>;
  /** Get an application by ID */
  applicationById: Array<ApplicationGraphQlType>;
  /** Get all applications submitted for an errand */
  applicationsByErrand: Array<ApplicationGraphQlType>;
  /** Get hierarchical category tree */
  categoryTree: Array<CategoryTreeNodeType>;
  /** List paginated messages in a chat thread */
  chatMessages: ListMessagesType;
  /** Get chat thread by errand ID */
  chatThreadByErrandId?: Maybe<ChatThreadType>;
  /** Get default bank account for the authenticated user */
  defaultBankAccount?: Maybe<BankAccountType>;
  /** Get dispute details by dispute ID */
  disputeById?: Maybe<DisputeType>;
  /** Get disputes for an errand */
  disputesByErrand: Array<DisputeType>;
  /** Retrieve errand details by ID */
  errandById?: Maybe<ErrandDetailType>;
  escrowById: EscrowGraphQlType;
  /** Get paginated audit ledger history for user wallet */
  ledgerHistory: LedgerHistoryPageType;
  marketTemplate: MarketTemplateDto;
  marketTemplates: Array<MarketTemplateDto>;
  /** Get all saved addresses for the authenticated user */
  myAddresses: Array<AddressGraphQlType>;
  /** Get all applications submitted by the authenticated provider */
  myApplications: Array<ApplicationGraphQlType>;
  /** Get all saved bank accounts for the authenticated user */
  myBankAccounts: Array<BankAccountType>;
  /** Get all chat threads where the authenticated user is a participant */
  myChatThreads: Array<ChatThreadType>;
  /** Get disputes raised by current user */
  myDisputes: Array<DisputeType>;
  /** Get errands where the authenticated user is client or assigned provider */
  myErrands: Array<ErrandDetailType>;
  /** Get party profile for the authenticated user */
  myPartyProfile?: Maybe<MyPartyProfileType>;
  /** Get trusted circle of providers for the authenticated user */
  myTrustedCircle?: Maybe<TrustedCircleType>;
  /** Get verification profile for authenticated user */
  myVerificationProfile?: Maybe<VerificationProfileType>;
  /** Browse available open errands within a market radius */
  openErrands: BrowseOpenErrandsResponseType;
  orgFacingProviderProfile: OrgFacingProviderProfileType;
  publicProviderProfile: PublicProviderProfileType;
  /** Get ratings for a completed errand */
  ratingsByErrand: Array<RatingType>;
  /** Get public ratings and reviews for a provider */
  ratingsByProvider: Array<RatingType>;
  searchProvidersByService: SearchProvidersByServiceType;
  /** Search active services by category and market */
  searchServices: Array<ServiceGraphQlType>;
  /** Get a service listing by its unique identifier */
  serviceById?: Maybe<ServiceGraphQlType>;
  /** Get verification profile by partyId (Admin only) */
  verificationProfileByPartyId?: Maybe<VerificationProfileType>;
  /** Get current wallet balances across active, pending, and available buckets */
  walletBalances: WalletBalancesType;
};


export type QueryAllDisputesArgs = {
  limit?: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryApplicationByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryApplicationsByErrandArgs = {
  errandId: Scalars['String']['input'];
};


export type QueryCategoryTreeArgs = {
  rootId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChatMessagesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Int']['input'];
  threadId: Scalars['String']['input'];
};


export type QueryChatThreadByErrandIdArgs = {
  errandId: Scalars['String']['input'];
};


export type QueryDisputeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryDisputesByErrandArgs = {
  errandId: Scalars['String']['input'];
};


export type QueryErrandByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryEscrowByIdArgs = {
  errandId: Scalars['String']['input'];
};


export type QueryLedgerHistoryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
};


export type QueryMarketTemplateArgs = {
  marketId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type QueryMarketTemplatesArgs = {
  marketId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMyErrandsArgs = {
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOpenErrandsArgs = {
  input: BrowseOpenErrandsInput;
};


export type QueryOrgFacingProviderProfileArgs = {
  partyId: Scalars['String']['input'];
  requestingOrganizationId: Scalars['String']['input'];
};


export type QueryPublicProviderProfileArgs = {
  partyId: Scalars['String']['input'];
};


export type QueryRatingsByErrandArgs = {
  errandId: Scalars['String']['input'];
};


export type QueryRatingsByProviderArgs = {
  limit?: Scalars['Int']['input'];
  providerPartyId: Scalars['String']['input'];
};


export type QuerySearchProvidersByServiceArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  service: Scalars['String']['input'];
};


export type QuerySearchServicesArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Int']['input'];
  marketId: Scalars['String']['input'];
};


export type QueryServiceByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryVerificationProfileByPartyIdArgs = {
  partyId: Scalars['String']['input'];
};

export type RatingReactionType = {
  __typename?: 'RatingReactionType';
  createdAt: Scalars['DateTime']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ratingId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type RatingReplyType = {
  __typename?: 'RatingReplyType';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ratingId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type RatingType = {
  __typename?: 'RatingType';
  comment?: Maybe<Scalars['String']['output']>;
  context: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  errandId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rateeId: Scalars['String']['output'];
  raterId: Scalars['String']['output'];
  reactions: Array<RatingReactionType>;
  replies: Array<RatingReplyType>;
  score: Scalars['Int']['output'];
};

export type ReactToRatingInput = {
  emoji: Scalars['String']['input'];
  ratingId: Scalars['String']['input'];
};

export type RemoveOrganizationMemberType = {
  __typename?: 'RemoveOrganizationMemberType';
  organizationPartyId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ReplyToRatingInput = {
  content: Scalars['String']['input'];
  ratingId: Scalars['String']['input'];
};

export type RequestApplicationAcceptanceInput = {
  applicationId: Scalars['String']['input'];
  clientPartyId: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
};

export type RequestTierUpgradeType = {
  __typename?: 'RequestTierUpgradeType';
  partyId: Scalars['String']['output'];
  tier: ProviderTier;
};

export type RequestWithdrawalInput = {
  amountMinorUnits: Scalars['Int']['input'];
  bankAccountId: Scalars['String']['input'];
  currency?: Scalars['String']['input'];
};

export type ResolveDisputeInput = {
  disputeId: Scalars['String']['input'];
  resolution: Scalars['String']['input'];
  /** RESOLVED | REJECTED */
  status: Scalars['String']['input'];
};

export type ReviewVerificationStepInput = {
  partyId: Scalars['String']['input'];
  rejectionReason?: InputMaybe<Scalars['String']['input']>;
  /** APPROVED | REJECTED */
  status: Scalars['String']['input'];
  stepType: Scalars['String']['input'];
};

export type SearchProvidersByServiceType = {
  __typename?: 'SearchProvidersByServiceType';
  providers: Array<ProviderSearchResultType>;
};

export type SendAdminBroadcastInput = {
  adminEmail: Scalars['String']['input'];
  adminId: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  targetUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  templateId: Scalars['String']['input'];
};

export type SendMessageInput = {
  content: Scalars['String']['input'];
  isProviderSender?: InputMaybe<Scalars['Boolean']['input']>;
  senderId: Scalars['String']['input'];
  threadId: Scalars['String']['input'];
};

export type SendMessageType = {
  __typename?: 'SendMessageType';
  messageId: Scalars['String']['output'];
  sentAt: Scalars['String']['output'];
};

export type ServiceGraphQlType = {
  __typename?: 'ServiceGraphQLType';
  categoryId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  listedById: Scalars['String']['output'];
  price: ServicePriceType;
  title: Scalars['String']['output'];
};

export type ServiceOperationResultType = {
  __typename?: 'ServiceOperationResultType';
  serviceId: Scalars['String']['output'];
};

export type ServicePriceInput = {
  amountMinorUnits: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
};

export type ServicePriceType = {
  __typename?: 'ServicePriceType';
  amountMinorUnits: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
};

export type SubmitApplicationInput = {
  applicantType?: ApplicationType;
  currency: Scalars['String']['input'];
  errandId: Scalars['String']['input'];
  proposal: Scalars['String']['input'];
  proposedAmountMinorUnits: Scalars['Int']['input'];
  providerPartyId: Scalars['String']['input'];
};

export type SubmitRatingInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  errandId: Scalars['String']['input'];
  rateePartyId: Scalars['String']['input'];
  /** Score between 1 and 5 */
  score: Scalars['Int']['input'];
};

export type SubmitVerificationStepInput = {
  documentUrls: Array<Scalars['String']['input']>;
  /** NIN_VERIFIED | LICENSE_VERIFIED | BUSINESS_REG_VERIFIED */
  stepType: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Real-time subscription for messages sent to a chat thread */
  messageSent: ChatMessageType;
};


export type SubscriptionMessageSentArgs = {
  threadId: Scalars['String']['input'];
};

export type TrustedCircleMemberType = {
  __typename?: 'TrustedCircleMemberType';
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  memberId: Scalars['String']['output'];
  sharedFromPartyId?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type TrustedCircleType = {
  __typename?: 'TrustedCircleType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  members: Array<TrustedCircleMemberType>;
  ownerPartyId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateMarketTemplateInput = {
  html: Scalars['String']['input'];
  marketId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type UpdateProviderRoleInput = {
  addToSkills?: InputMaybe<Scalars['Boolean']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
  tier?: InputMaybe<ProviderTier>;
};

export type UpdateProviderRoleType = {
  __typename?: 'UpdateProviderRoleType';
  bio?: Maybe<Scalars['String']['output']>;
  partyId: Scalars['String']['output'];
  skills: Array<Scalars['String']['output']>;
  tier: ProviderTier;
};

export type UpdateServicePriceInput = {
  price: ServicePriceInput;
  serviceId: Scalars['String']['input'];
};

export type VerificationProfileType = {
  __typename?: 'VerificationProfileType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  overallStatus: Scalars['String']['output'];
  partyId: Scalars['String']['output'];
  steps: Array<VerificationStepType>;
  updatedAt: Scalars['DateTime']['output'];
};

export type VerificationStepType = {
  __typename?: 'VerificationStepType';
  documentUrls: Array<Scalars['String']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  reviewedAt?: Maybe<Scalars['DateTime']['output']>;
  reviewerId?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  stepType: Scalars['String']['output'];
  submittedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WalletBalancesType = {
  __typename?: 'WalletBalancesType';
  activeMinorUnits: Scalars['Int']['output'];
  availableMinorUnits: Scalars['Int']['output'];
  currency: Scalars['String']['output'];
  pendingMinorUnits: Scalars['Int']['output'];
};

export type WithdrawalResultType = {
  __typename?: 'WithdrawalResultType';
  gatewayReference?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreateAddressMutationVariables = Exact<{
  input: CreateAddressInput;
}>;


export type CreateAddressMutation = { __typename?: 'Mutation', createAddress: { __typename?: 'AddressGraphQLType', id: string, userId: string, label: string, street: string, city: string, state: string, country: string, isDefault: boolean, coordinates?: { __typename?: 'AddressCoordinatesGraphQLType', latitude: number, longitude: number } | null } };

export type DeleteAddressMutationVariables = Exact<{
  addressId: Scalars['String']['input'];
}>;


export type DeleteAddressMutation = { __typename?: 'Mutation', deleteAddress: boolean };

export type SetDefaultAddressMutationVariables = Exact<{
  addressId: Scalars['String']['input'];
}>;


export type SetDefaultAddressMutation = { __typename?: 'Mutation', setDefaultAddress: boolean };

export type RejectApplicationMutationVariables = Exact<{
  applicationId: Scalars['String']['input'];
  errandId: Scalars['String']['input'];
}>;


export type RejectApplicationMutation = { __typename?: 'Mutation', rejectApplication: { __typename?: 'ApplicationOperationResultType', id: string, success: boolean } };

export type RequestApplicationAcceptanceMutationVariables = Exact<{
  input: RequestApplicationAcceptanceInput;
}>;


export type RequestApplicationAcceptanceMutation = { __typename?: 'Mutation', requestApplicationAcceptance: { __typename?: 'ApplicationOperationResultType', id: string, success: boolean } };

export type SubmitApplicationMutationVariables = Exact<{
  input: SubmitApplicationInput;
}>;


export type SubmitApplicationMutation = { __typename?: 'Mutation', submitApplication: { __typename?: 'ApplicationOperationResultType', id: string, success: boolean } };

export type SendMessageMutationVariables = Exact<{
  input: SendMessageInput;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'SendMessageType', messageId: string, sentAt: string } };

export type OpenDisputeMutationVariables = Exact<{
  input: OpenDisputeInput;
}>;


export type OpenDisputeMutation = { __typename?: 'Mutation', openDispute: string };

export type ResolveDisputeMutationVariables = Exact<{
  input: ResolveDisputeInput;
}>;


export type ResolveDisputeMutation = { __typename?: 'Mutation', resolveDispute: boolean };

export type CompleteErrandMutationVariables = Exact<{
  errandId: Scalars['String']['input'];
  completedBy?: Scalars['String']['input'];
}>;


export type CompleteErrandMutation = { __typename?: 'Mutation', completeErrand: { __typename?: 'ErrandOperationResultType', errandId: string, status: string } };

export type ConfirmAssignmentCompletionMutationVariables = Exact<{
  errandAssignmentId: Scalars['String']['input'];
  providerPartyId: Scalars['String']['input'];
  proofUrl?: InputMaybe<Scalars['String']['input']>;
}>;


export type ConfirmAssignmentCompletionMutation = { __typename?: 'Mutation', confirmAssignmentCompletion: { __typename?: 'ConfirmAssignmentCompletionType', errandAssignmentId: string, status: string, errandReadyForCompletion: boolean } };

export type CreateErrandMutationVariables = Exact<{
  input: CreateErrandInput;
}>;


export type CreateErrandMutation = { __typename?: 'Mutation', createErrand: { __typename?: 'ErrandOperationResultType', errandId: string, status: string } };

export type PublishErrandMutationVariables = Exact<{
  errandId: Scalars['String']['input'];
}>;


export type PublishErrandMutation = { __typename?: 'Mutation', publishErrand: { __typename?: 'ErrandOperationResultType', errandId: string, status: string } };

export type StartErrandMutationVariables = Exact<{
  errandId: Scalars['String']['input'];
  providerPartyId: Scalars['String']['input'];
}>;


export type StartErrandMutation = { __typename?: 'Mutation', startErrand: { __typename?: 'ErrandOperationResultType', errandId: string, status: string } };

export type AddProviderRoleMutationVariables = Exact<{
  partyId: Scalars['String']['input'];
}>;


export type AddProviderRoleMutation = { __typename?: 'Mutation', addProviderRole: { __typename?: 'AddProviderRoleType', partyId: string, tier: ProviderTier } };

export type UpdateProviderRoleMutationVariables = Exact<{
  partyId: Scalars['String']['input'];
  input: UpdateProviderRoleInput;
}>;


export type UpdateProviderRoleMutation = { __typename?: 'Mutation', updateProviderRole: { __typename?: 'UpdateProviderRoleType', partyId: string, tier: ProviderTier, skills: Array<string>, bio?: string | null } };

export type SubmitRatingMutationVariables = Exact<{
  input: SubmitRatingInput;
}>;


export type SubmitRatingMutation = { __typename?: 'Mutation', submitRating: string };

export type ReviewVerificationStepMutationVariables = Exact<{
  input: ReviewVerificationStepInput;
}>;


export type ReviewVerificationStepMutation = { __typename?: 'Mutation', reviewVerificationStep: boolean };

export type SubmitVerificationStepMutationVariables = Exact<{
  input: SubmitVerificationStepInput;
}>;


export type SubmitVerificationStepMutation = { __typename?: 'Mutation', submitVerificationStep: boolean };

export type AddBankAccountMutationVariables = Exact<{
  input: AddBankAccountInput;
}>;


export type AddBankAccountMutation = { __typename?: 'Mutation', addBankAccount: { __typename?: 'BankAccountType', id: string, bankCode: string, accountNumber: string, accountName?: string | null, isDefault: boolean, currency: string } };

export type DeleteBankAccountMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteBankAccountMutation = { __typename?: 'Mutation', deleteBankAccount: boolean };

export type RequestWithdrawalMutationVariables = Exact<{
  input: RequestWithdrawalInput;
}>;


export type RequestWithdrawalMutation = { __typename?: 'Mutation', requestWithdrawal: { __typename?: 'WithdrawalResultType', success: boolean, gatewayReference?: string | null, message?: string | null } };

export type SetDefaultBankAccountMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type SetDefaultBankAccountMutation = { __typename?: 'Mutation', setDefaultBankAccount: { __typename?: 'BankAccountType', id: string, isDefault: boolean } };

export type MyAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyAddressesQuery = { __typename?: 'Query', myAddresses: Array<{ __typename?: 'AddressGraphQLType', id: string, userId: string, label: string, street: string, city: string, state: string, country: string, isDefault: boolean, createdAt: any, updatedAt: any, coordinates?: { __typename?: 'AddressCoordinatesGraphQLType', latitude: number, longitude: number } | null }> };

export type ApplicationsByErrandQueryVariables = Exact<{
  errandId: Scalars['String']['input'];
}>;


export type ApplicationsByErrandQuery = { __typename?: 'Query', applicationsByErrand: Array<{ __typename?: 'ApplicationGraphQLType', id: string, errandId: string, providerPartyId: string, proposal: string, proposedAmountMinorUnits: number, currency: string, status: ApplicationStatus, type: ApplicationType, createdAt: any, acceptedAt?: any | null, rejectedAt?: any | null }> };

export type MyApplicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyApplicationsQuery = { __typename?: 'Query', myApplications: Array<{ __typename?: 'ApplicationGraphQLType', id: string, errandId: string, providerPartyId: string, proposal: string, proposedAmountMinorUnits: number, currency: string, status: ApplicationStatus, type: ApplicationType, createdAt: any, acceptedAt?: any | null, rejectedAt?: any | null }> };

export type CategoryTreeQueryVariables = Exact<{
  rootId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CategoryTreeQuery = { __typename?: 'Query', categoryTree: Array<{ __typename?: 'CategoryTreeNodeType', id: string, name: string, requiredTier?: ProviderTier | null, children: Array<{ __typename?: 'CategoryTreeNodeType', id: string, name: string, requiredTier?: ProviderTier | null }> }> };

export type ChatMessagesQueryVariables = Exact<{
  threadId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type ChatMessagesQuery = { __typename?: 'Query', chatMessages: { __typename?: 'ListMessagesType', nextCursor?: string | null, items: Array<{ __typename?: 'ChatMessageType', id: string, threadId: string, senderId: string, content: string, sentAt: string }> } };

export type MyChatThreadsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyChatThreadsQuery = { __typename?: 'Query', myChatThreads: Array<{ __typename?: 'ChatThreadType', id: string, errandId: string, participantIds: Array<string>, createdAt: string, closedAt?: string | null, firstResponseAt?: string | null }> };

export type AllDisputesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllDisputesQuery = { __typename?: 'Query', allDisputes: Array<{ __typename?: 'DisputeType', id: string, errandId: string, raisedById: string, reason: string, description: string, evidenceUrls: Array<string>, status: string, resolution?: string | null, resolvedAt?: any | null, createdAt: any }> };

export type MyDisputesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyDisputesQuery = { __typename?: 'Query', myDisputes: Array<{ __typename?: 'DisputeType', id: string, errandId: string, raisedById: string, reason: string, description: string, evidenceUrls: Array<string>, status: string, resolution?: string | null, resolvedAt?: any | null, createdAt: any }> };

export type ErrandByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ErrandByIdQuery = { __typename?: 'Query', errandById?: { __typename?: 'ErrandDetailType', id: string, title: string, description: string, categoryId: string, addressId: string, clientPartyId: string, marketId: string, requiredTier: string, sourceType: string, status: string, startedAt?: string | null, completedAt?: string | null, createdAt: string, budget: { __typename?: 'ErrandBudgetType', amountMinorUnits: number, currency: string } } | null };

export type MyErrandsQueryVariables = Exact<{
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type MyErrandsQuery = { __typename?: 'Query', myErrands: Array<{ __typename?: 'ErrandDetailType', id: string, title: string, description: string, categoryId: string, addressId: string, clientPartyId: string, marketId: string, requiredTier: string, sourceType: string, status: string, startedAt?: string | null, completedAt?: string | null, createdAt: string, budget: { __typename?: 'ErrandBudgetType', amountMinorUnits: number, currency: string } }> };

export type OpenErrandsQueryVariables = Exact<{
  input: BrowseOpenErrandsInput;
}>;


export type OpenErrandsQuery = { __typename?: 'Query', openErrands: { __typename?: 'BrowseOpenErrandsResponseType', items: Array<{ __typename?: 'ErrandSummaryType', id: string, title: string, categoryId: string, createdAt: string, distanceMeters: number, budget: { __typename?: 'ErrandBudgetType', amountMinorUnits: number, currency: string } }> } };

export type MyPartyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyPartyProfileQuery = { __typename?: 'Query', myPartyProfile?: { __typename?: 'MyPartyProfileType', partyId: string, userId: string, kind: string, marketId: string, hasClientRole: boolean, hasProviderRole: boolean, providerTier?: ProviderTier | null, skills?: Array<string> | null, bio?: string | null } | null };

export type PublicProviderProfileQueryVariables = Exact<{
  partyId: Scalars['String']['input'];
}>;


export type PublicProviderProfileQuery = { __typename?: 'Query', publicProviderProfile: { __typename?: 'PublicProviderProfileType', partyId: string, tier: ProviderTier, bio?: string | null, skills: Array<string>, completedErrandsCount: number, avgRatingCached?: number | null, trustedByCount: number } };

export type SearchServicesQueryVariables = Exact<{
  marketId: Scalars['String']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchServicesQuery = { __typename?: 'Query', searchServices: Array<{ __typename?: 'ServiceGraphQLType', id: string, title: string, description: string, categoryId: string, listedById: string, price: { __typename?: 'ServicePriceType', amountMinorUnits: number, currency: string } }> };

export type MyVerificationProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyVerificationProfileQuery = { __typename?: 'Query', myVerificationProfile?: { __typename?: 'VerificationProfileType', partyId: string, overallStatus: string, steps: Array<{ __typename?: 'VerificationStepType', stepType: string, status: string, documentUrls: Array<string>, rejectionReason?: string | null, reviewedAt?: any | null, submittedAt?: any | null }> } | null };

export type MyBankAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyBankAccountsQuery = { __typename?: 'Query', myBankAccounts: Array<{ __typename?: 'BankAccountType', id: string, bankCode: string, accountNumber: string, accountName?: string | null, isDefault: boolean, currency: string, isVerified: boolean, createdAt: any }> };

export type WalletBalancesQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletBalancesQuery = { __typename?: 'Query', walletBalances: { __typename?: 'WalletBalancesType', activeMinorUnits: number, pendingMinorUnits: number, availableMinorUnits: number, currency: string } };

export type MessageSentSubscriptionVariables = Exact<{
  threadId: Scalars['String']['input'];
}>;


export type MessageSentSubscription = { __typename?: 'Subscription', messageSent: { __typename?: 'ChatMessageType', id: string, threadId: string, senderId: string, content: string, sentAt: string } };


export const CreateAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAddressMutation, CreateAddressMutationVariables>;
export const DeleteAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addressId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addressId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addressId"}}}]}]}}]} as unknown as DocumentNode<DeleteAddressMutation, DeleteAddressMutationVariables>;
export const SetDefaultAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetDefaultAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addressId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setDefaultAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addressId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addressId"}}}]}]}}]} as unknown as DocumentNode<SetDefaultAddressMutation, SetDefaultAddressMutationVariables>;
export const RejectApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RejectApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"applicationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rejectApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"applicationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"applicationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"errandId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<RejectApplicationMutation, RejectApplicationMutationVariables>;
export const RequestApplicationAcceptanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestApplicationAcceptance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestApplicationAcceptanceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestApplicationAcceptance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<RequestApplicationAcceptanceMutation, RequestApplicationAcceptanceMutationVariables>;
export const SubmitApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubmitApplicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SubmitApplicationMutation, SubmitApplicationMutationVariables>;
export const SendMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageId"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}}]}}]}}]} as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const OpenDisputeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OpenDispute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OpenDisputeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"openDispute"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<OpenDisputeMutation, OpenDisputeMutationVariables>;
export const ResolveDisputeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResolveDispute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResolveDisputeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolveDispute"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ResolveDisputeMutation, ResolveDisputeMutationVariables>;
export const CompleteErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"completedBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":{"kind":"StringValue","value":"CLIENT","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"errandId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}}},{"kind":"Argument","name":{"kind":"Name","value":"completedBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"completedBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CompleteErrandMutation, CompleteErrandMutationVariables>;
export const ConfirmAssignmentCompletionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmAssignmentCompletion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandAssignmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerPartyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proofUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmAssignmentCompletion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"errandAssignmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandAssignmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerPartyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerPartyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"proofUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proofUrl"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandAssignmentId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"errandReadyForCompletion"}}]}}]}}]} as unknown as DocumentNode<ConfirmAssignmentCompletionMutation, ConfirmAssignmentCompletionMutationVariables>;
export const CreateErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateErrandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CreateErrandMutation, CreateErrandMutationVariables>;
export const PublishErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"errandId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<PublishErrandMutation, PublishErrandMutationVariables>;
export const StartErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerPartyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"errandId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerPartyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerPartyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<StartErrandMutation, StartErrandMutationVariables>;
export const AddProviderRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddProviderRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProviderRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partyId"}},{"kind":"Field","name":{"kind":"Name","value":"tier"}}]}}]}}]} as unknown as DocumentNode<AddProviderRoleMutation, AddProviderRoleMutationVariables>;
export const UpdateProviderRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProviderRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProviderRoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProviderRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partyId"}},{"kind":"Field","name":{"kind":"Name","value":"tier"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]} as unknown as DocumentNode<UpdateProviderRoleMutation, UpdateProviderRoleMutationVariables>;
export const SubmitRatingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitRating"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubmitRatingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitRating"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<SubmitRatingMutation, SubmitRatingMutationVariables>;
export const ReviewVerificationStepDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ReviewVerificationStep"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReviewVerificationStepInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviewVerificationStep"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ReviewVerificationStepMutation, ReviewVerificationStepMutationVariables>;
export const SubmitVerificationStepDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitVerificationStep"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubmitVerificationStepInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitVerificationStep"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<SubmitVerificationStepMutation, SubmitVerificationStepMutationVariables>;
export const AddBankAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddBankAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddBankAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addBankAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bankCode"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]} as unknown as DocumentNode<AddBankAccountMutation, AddBankAccountMutationVariables>;
export const DeleteBankAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBankAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBankAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>;
export const RequestWithdrawalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestWithdrawal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestWithdrawalInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestWithdrawal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"gatewayReference"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RequestWithdrawalMutation, RequestWithdrawalMutationVariables>;
export const SetDefaultBankAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetDefaultBankAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setDefaultBankAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}}]}}]}}]} as unknown as DocumentNode<SetDefaultBankAccountMutation, SetDefaultBankAccountMutationVariables>;
export const MyAddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyAddresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myAddresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<MyAddressesQuery, MyAddressesQueryVariables>;
export const ApplicationsByErrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApplicationsByErrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applicationsByErrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"errandId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"errandId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"providerPartyId"}},{"kind":"Field","name":{"kind":"Name","value":"proposal"}},{"kind":"Field","name":{"kind":"Name","value":"proposedAmountMinorUnits"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}}]}}]}}]} as unknown as DocumentNode<ApplicationsByErrandQuery, ApplicationsByErrandQueryVariables>;
export const MyApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"providerPartyId"}},{"kind":"Field","name":{"kind":"Name","value":"proposal"}},{"kind":"Field","name":{"kind":"Name","value":"proposedAmountMinorUnits"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}}]}}]}}]} as unknown as DocumentNode<MyApplicationsQuery, MyApplicationsQueryVariables>;
export const CategoryTreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CategoryTree"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rootId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryTree"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"rootId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rootId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"requiredTier"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"requiredTier"}}]}}]}}]}}]} as unknown as DocumentNode<CategoryTreeQuery, CategoryTreeQueryVariables>;
export const ChatMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChatMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}}]}}]}}]} as unknown as DocumentNode<ChatMessagesQuery, ChatMessagesQueryVariables>;
export const MyChatThreadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyChatThreads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myChatThreads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"participantIds"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"closedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstResponseAt"}}]}}]}}]} as unknown as DocumentNode<MyChatThreadsQuery, MyChatThreadsQueryVariables>;
export const AllDisputesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllDisputes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDisputes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"raisedById"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"evidenceUrls"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"}},{"kind":"Field","name":{"kind":"Name","value":"resolvedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<AllDisputesQuery, AllDisputesQueryVariables>;
export const MyDisputesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyDisputes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myDisputes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"errandId"}},{"kind":"Field","name":{"kind":"Name","value":"raisedById"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"evidenceUrls"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"}},{"kind":"Field","name":{"kind":"Name","value":"resolvedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<MyDisputesQuery, MyDisputesQueryVariables>;
export const ErrandByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ErrandById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errandById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"addressId"}},{"kind":"Field","name":{"kind":"Name","value":"clientPartyId"}},{"kind":"Field","name":{"kind":"Name","value":"marketId"}},{"kind":"Field","name":{"kind":"Name","value":"requiredTier"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"budget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amountMinorUnits"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}}]} as unknown as DocumentNode<ErrandByIdQuery, ErrandByIdQueryVariables>;
export const MyErrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyErrands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myErrands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"addressId"}},{"kind":"Field","name":{"kind":"Name","value":"clientPartyId"}},{"kind":"Field","name":{"kind":"Name","value":"marketId"}},{"kind":"Field","name":{"kind":"Name","value":"requiredTier"}},{"kind":"Field","name":{"kind":"Name","value":"sourceType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"budget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amountMinorUnits"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}}]} as unknown as DocumentNode<MyErrandsQuery, MyErrandsQueryVariables>;
export const OpenErrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OpenErrands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BrowseOpenErrandsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"openErrands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"distanceMeters"}},{"kind":"Field","name":{"kind":"Name","value":"budget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amountMinorUnits"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OpenErrandsQuery, OpenErrandsQueryVariables>;
export const MyPartyProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyPartyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myPartyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partyId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"marketId"}},{"kind":"Field","name":{"kind":"Name","value":"hasClientRole"}},{"kind":"Field","name":{"kind":"Name","value":"hasProviderRole"}},{"kind":"Field","name":{"kind":"Name","value":"providerTier"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]} as unknown as DocumentNode<MyPartyProfileQuery, MyPartyProfileQueryVariables>;
export const PublicProviderProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicProviderProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicProviderProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partyId"}},{"kind":"Field","name":{"kind":"Name","value":"tier"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"completedErrandsCount"}},{"kind":"Field","name":{"kind":"Name","value":"avgRatingCached"}},{"kind":"Field","name":{"kind":"Name","value":"trustedByCount"}}]}}]}}]} as unknown as DocumentNode<PublicProviderProfileQuery, PublicProviderProfileQueryVariables>;
export const SearchServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"marketId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"marketId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"marketId"}}},{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"listedById"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amountMinorUnits"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}}]} as unknown as DocumentNode<SearchServicesQuery, SearchServicesQueryVariables>;
export const MyVerificationProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyVerificationProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myVerificationProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partyId"}},{"kind":"Field","name":{"kind":"Name","value":"overallStatus"}},{"kind":"Field","name":{"kind":"Name","value":"steps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stepType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"documentUrls"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"reviewedAt"}},{"kind":"Field","name":{"kind":"Name","value":"submittedAt"}}]}}]}}]}}]} as unknown as DocumentNode<MyVerificationProfileQuery, MyVerificationProfileQueryVariables>;
export const MyBankAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyBankAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myBankAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bankCode"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<MyBankAccountsQuery, MyBankAccountsQueryVariables>;
export const WalletBalancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WalletBalances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletBalances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeMinorUnits"}},{"kind":"Field","name":{"kind":"Name","value":"pendingMinorUnits"}},{"kind":"Field","name":{"kind":"Name","value":"availableMinorUnits"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]} as unknown as DocumentNode<WalletBalancesQuery, WalletBalancesQueryVariables>;
export const MessageSentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MessageSent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageSent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}}]}}]}}]} as unknown as DocumentNode<MessageSentSubscription, MessageSentSubscriptionVariables>;