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
    "\n  mutation CreateAddress($input: CreateAddressInput!) {\n    createAddress(input: $input) {\n      id\n      userId\n      label\n      street\n      city\n      state\n      country\n      isDefault\n      coordinates {\n        latitude\n        longitude\n      }\n    }\n  }\n": typeof types.CreateAddressDocument,
    "\n  mutation DeleteAddress($addressId: String!) {\n    deleteAddress(addressId: $addressId)\n  }\n": typeof types.DeleteAddressDocument,
    "\n  mutation SetDefaultAddress($addressId: String!) {\n    setDefaultAddress(addressId: $addressId)\n  }\n": typeof types.SetDefaultAddressDocument,
    "\n  mutation RejectApplication($applicationId: String!, $errandId: String!) {\n    rejectApplication(applicationId: $applicationId, errandId: $errandId) {\n      id\n      success\n    }\n  }\n": typeof types.RejectApplicationDocument,
    "\n  mutation RequestApplicationAcceptance(\n    $input: RequestApplicationAcceptanceInput!\n  ) {\n    requestApplicationAcceptance(input: $input) {\n      id\n      success\n    }\n  }\n": typeof types.RequestApplicationAcceptanceDocument,
    "\n  mutation SubmitApplication($input: SubmitApplicationInput!) {\n    submitApplication(input: $input) {\n      id\n      success\n    }\n  }\n": typeof types.SubmitApplicationDocument,
    "\n  mutation SendMessage($input: SendMessageInput!) {\n    sendMessage(input: $input) {\n      messageId\n      sentAt\n    }\n  }\n": typeof types.SendMessageDocument,
    "\n  mutation OpenDispute($input: OpenDisputeInput!) {\n    openDispute(input: $input)\n  }\n": typeof types.OpenDisputeDocument,
    "\n  mutation ResolveDispute($input: ResolveDisputeInput!) {\n    resolveDispute(input: $input)\n  }\n": typeof types.ResolveDisputeDocument,
    "\n  mutation CompleteErrand(\n    $errandId: String!\n    $completedBy: String! = \"CLIENT\"\n  ) {\n    completeErrand(errandId: $errandId, completedBy: $completedBy) {\n      errandId\n      status\n    }\n  }\n": typeof types.CompleteErrandDocument,
    "\n  mutation ConfirmAssignmentCompletion(\n    $errandAssignmentId: String!\n    $providerPartyId: String!\n    $proofUrl: String\n  ) {\n    confirmAssignmentCompletion(\n      errandAssignmentId: $errandAssignmentId\n      providerPartyId: $providerPartyId\n      proofUrl: $proofUrl\n    ) {\n      errandAssignmentId\n      status\n      errandReadyForCompletion\n    }\n  }\n": typeof types.ConfirmAssignmentCompletionDocument,
    "\n  mutation CreateErrand($input: CreateErrandInput!) {\n    createErrand(input: $input) {\n      errandId\n      status\n    }\n  }\n": typeof types.CreateErrandDocument,
    "\n  mutation PublishErrand($errandId: String!) {\n    publishErrand(errandId: $errandId) {\n      errandId\n      status\n    }\n  }\n": typeof types.PublishErrandDocument,
    "\n  mutation StartErrand($errandId: String!, $providerPartyId: String!) {\n    startErrand(errandId: $errandId, providerPartyId: $providerPartyId) {\n      errandId\n      status\n    }\n  }\n": typeof types.StartErrandDocument,
    "\n  mutation AddProviderRole($partyId: String!) {\n    addProviderRole(partyId: $partyId) {\n      partyId\n      tier\n    }\n  }\n": typeof types.AddProviderRoleDocument,
    "\n  mutation UpdateProviderRole(\n    $partyId: String!\n    $input: UpdateProviderRoleInput!\n  ) {\n    updateProviderRole(partyId: $partyId, input: $input) {\n      partyId\n      tier\n      skills\n      bio\n    }\n  }\n": typeof types.UpdateProviderRoleDocument,
    "\n  mutation SubmitRating($input: SubmitRatingInput!) {\n    submitRating(input: $input)\n  }\n": typeof types.SubmitRatingDocument,
    "\n  mutation ReviewVerificationStep($input: ReviewVerificationStepInput!) {\n    reviewVerificationStep(input: $input)\n  }\n": typeof types.ReviewVerificationStepDocument,
    "\n  mutation SubmitVerificationStep($input: SubmitVerificationStepInput!) {\n    submitVerificationStep(input: $input)\n  }\n": typeof types.SubmitVerificationStepDocument,
    "\n  mutation AddBankAccount($input: AddBankAccountInput!) {\n    addBankAccount(input: $input) {\n      id\n      bankCode\n      accountNumber\n      accountName\n      isDefault\n      currency\n    }\n  }\n": typeof types.AddBankAccountDocument,
    "\n  mutation DeleteBankAccount($id: String!) {\n    deleteBankAccount(id: $id)\n  }\n": typeof types.DeleteBankAccountDocument,
    "\n  mutation RequestWithdrawal($input: RequestWithdrawalInput!) {\n    requestWithdrawal(input: $input) {\n      success\n      gatewayReference\n      message\n    }\n  }\n": typeof types.RequestWithdrawalDocument,
    "\n  mutation SetDefaultBankAccount($id: String!) {\n    setDefaultBankAccount(id: $id) {\n      id\n      isDefault\n    }\n  }\n": typeof types.SetDefaultBankAccountDocument,
    "\n  query MyAddresses {\n    myAddresses {\n      id\n      userId\n      label\n      street\n      city\n      state\n      country\n      isDefault\n      coordinates {\n        latitude\n        longitude\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.MyAddressesDocument,
    "\n  query ApplicationsByErrand($errandId: String!) {\n    applicationsByErrand(errandId: $errandId) {\n      id\n      errandId\n      providerPartyId\n      proposal\n      proposedAmountMinorUnits\n      currency\n      status\n      type\n      createdAt\n      acceptedAt\n      rejectedAt\n    }\n  }\n": typeof types.ApplicationsByErrandDocument,
    "\n  query MyApplications {\n    myApplications {\n      id\n      errandId\n      providerPartyId\n      proposal\n      proposedAmountMinorUnits\n      currency\n      status\n      type\n      createdAt\n      acceptedAt\n      rejectedAt\n    }\n  }\n": typeof types.MyApplicationsDocument,
    "\n  query CategoryTree($rootId: String) {\n    categoryTree(rootId: $rootId) {\n      id\n      name\n      requiredTier\n      children {\n        id\n        name\n        requiredTier\n      }\n    }\n  }\n": typeof types.CategoryTreeDocument,
    "\n  query ChatMessages($threadId: String!, $limit: Int, $cursor: String) {\n    chatMessages(threadId: $threadId, limit: $limit, cursor: $cursor) {\n      items {\n        id\n        threadId\n        senderId\n        content\n        sentAt\n      }\n      nextCursor\n    }\n  }\n": typeof types.ChatMessagesDocument,
    "\n  query MyChatThreads {\n    myChatThreads {\n      id\n      errandId\n      participantIds\n      createdAt\n      closedAt\n      firstResponseAt\n    }\n  }\n": typeof types.MyChatThreadsDocument,
    "\n  query AllDisputes($limit: Int, $status: String) {\n    allDisputes(limit: $limit, status: $status) {\n      id\n      errandId\n      raisedById\n      reason\n      description\n      evidenceUrls\n      status\n      resolution\n      resolvedAt\n      createdAt\n    }\n  }\n": typeof types.AllDisputesDocument,
    "\n  query MyDisputes {\n    myDisputes {\n      id\n      errandId\n      raisedById\n      reason\n      description\n      evidenceUrls\n      status\n      resolution\n      resolvedAt\n      createdAt\n    }\n  }\n": typeof types.MyDisputesDocument,
    "\n  query ErrandById($id: String!) {\n    errandById(id: $id) {\n      id\n      title\n      description\n      categoryId\n      addressId\n      clientPartyId\n      marketId\n      requiredTier\n      sourceType\n      status\n      startedAt\n      completedAt\n      createdAt\n      budget {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n": typeof types.ErrandByIdDocument,
    "\n  query MyErrands($role: String, $status: String) {\n    myErrands(role: $role, status: $status) {\n      id\n      title\n      description\n      categoryId\n      addressId\n      clientPartyId\n      marketId\n      requiredTier\n      sourceType\n      status\n      startedAt\n      completedAt\n      createdAt\n      budget {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n": typeof types.MyErrandsDocument,
    "\n  query OpenErrands($input: BrowseOpenErrandsInput!) {\n    openErrands(input: $input) {\n      items {\n        id\n        title\n        categoryId\n        createdAt\n        distanceMeters\n        budget {\n          amountMinorUnits\n          currency\n        }\n      }\n    }\n  }\n": typeof types.OpenErrandsDocument,
    "\n  query MyPartyProfile {\n    myPartyProfile {\n      partyId\n      userId\n      kind\n      marketId\n      hasClientRole\n      hasProviderRole\n      providerTier\n      skills\n      bio\n    }\n  }\n": typeof types.MyPartyProfileDocument,
    "\n  query PublicProviderProfile($partyId: String!) {\n    publicProviderProfile(partyId: $partyId) {\n      partyId\n      tier\n      bio\n      skills\n      completedErrandsCount\n      avgRatingCached\n      trustedByCount\n    }\n  }\n": typeof types.PublicProviderProfileDocument,
    "\n  query SearchServices(\n    $marketId: String!\n    $categoryId: String\n    $limit: Int\n    $cursor: String\n  ) {\n    searchServices(\n      marketId: $marketId\n      categoryId: $categoryId\n      limit: $limit\n      cursor: $cursor\n    ) {\n      id\n      title\n      description\n      categoryId\n      listedById\n      price {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n": typeof types.SearchServicesDocument,
    "\n  query MyVerificationProfile {\n    myVerificationProfile {\n      partyId\n      overallStatus\n      steps {\n        stepType\n        status\n        documentUrls\n        rejectionReason\n        reviewedAt\n        submittedAt\n      }\n    }\n  }\n": typeof types.MyVerificationProfileDocument,
    "\n  query MyBankAccounts {\n    myBankAccounts {\n      id\n      bankCode\n      accountNumber\n      accountName\n      isDefault\n      currency\n      isVerified\n      createdAt\n    }\n  }\n": typeof types.MyBankAccountsDocument,
    "\n  query WalletBalances {\n    walletBalances {\n      activeMinorUnits\n      pendingMinorUnits\n      availableMinorUnits\n      currency\n    }\n  }\n": typeof types.WalletBalancesDocument,
    "\n  subscription MessageSent($threadId: String!) {\n    messageSent(threadId: $threadId) {\n      id\n      threadId\n      senderId\n      content\n      sentAt\n    }\n  }\n": typeof types.MessageSentDocument,
};
const documents: Documents = {
    "\n  mutation CreateAddress($input: CreateAddressInput!) {\n    createAddress(input: $input) {\n      id\n      userId\n      label\n      street\n      city\n      state\n      country\n      isDefault\n      coordinates {\n        latitude\n        longitude\n      }\n    }\n  }\n": types.CreateAddressDocument,
    "\n  mutation DeleteAddress($addressId: String!) {\n    deleteAddress(addressId: $addressId)\n  }\n": types.DeleteAddressDocument,
    "\n  mutation SetDefaultAddress($addressId: String!) {\n    setDefaultAddress(addressId: $addressId)\n  }\n": types.SetDefaultAddressDocument,
    "\n  mutation RejectApplication($applicationId: String!, $errandId: String!) {\n    rejectApplication(applicationId: $applicationId, errandId: $errandId) {\n      id\n      success\n    }\n  }\n": types.RejectApplicationDocument,
    "\n  mutation RequestApplicationAcceptance(\n    $input: RequestApplicationAcceptanceInput!\n  ) {\n    requestApplicationAcceptance(input: $input) {\n      id\n      success\n    }\n  }\n": types.RequestApplicationAcceptanceDocument,
    "\n  mutation SubmitApplication($input: SubmitApplicationInput!) {\n    submitApplication(input: $input) {\n      id\n      success\n    }\n  }\n": types.SubmitApplicationDocument,
    "\n  mutation SendMessage($input: SendMessageInput!) {\n    sendMessage(input: $input) {\n      messageId\n      sentAt\n    }\n  }\n": types.SendMessageDocument,
    "\n  mutation OpenDispute($input: OpenDisputeInput!) {\n    openDispute(input: $input)\n  }\n": types.OpenDisputeDocument,
    "\n  mutation ResolveDispute($input: ResolveDisputeInput!) {\n    resolveDispute(input: $input)\n  }\n": types.ResolveDisputeDocument,
    "\n  mutation CompleteErrand(\n    $errandId: String!\n    $completedBy: String! = \"CLIENT\"\n  ) {\n    completeErrand(errandId: $errandId, completedBy: $completedBy) {\n      errandId\n      status\n    }\n  }\n": types.CompleteErrandDocument,
    "\n  mutation ConfirmAssignmentCompletion(\n    $errandAssignmentId: String!\n    $providerPartyId: String!\n    $proofUrl: String\n  ) {\n    confirmAssignmentCompletion(\n      errandAssignmentId: $errandAssignmentId\n      providerPartyId: $providerPartyId\n      proofUrl: $proofUrl\n    ) {\n      errandAssignmentId\n      status\n      errandReadyForCompletion\n    }\n  }\n": types.ConfirmAssignmentCompletionDocument,
    "\n  mutation CreateErrand($input: CreateErrandInput!) {\n    createErrand(input: $input) {\n      errandId\n      status\n    }\n  }\n": types.CreateErrandDocument,
    "\n  mutation PublishErrand($errandId: String!) {\n    publishErrand(errandId: $errandId) {\n      errandId\n      status\n    }\n  }\n": types.PublishErrandDocument,
    "\n  mutation StartErrand($errandId: String!, $providerPartyId: String!) {\n    startErrand(errandId: $errandId, providerPartyId: $providerPartyId) {\n      errandId\n      status\n    }\n  }\n": types.StartErrandDocument,
    "\n  mutation AddProviderRole($partyId: String!) {\n    addProviderRole(partyId: $partyId) {\n      partyId\n      tier\n    }\n  }\n": types.AddProviderRoleDocument,
    "\n  mutation UpdateProviderRole(\n    $partyId: String!\n    $input: UpdateProviderRoleInput!\n  ) {\n    updateProviderRole(partyId: $partyId, input: $input) {\n      partyId\n      tier\n      skills\n      bio\n    }\n  }\n": types.UpdateProviderRoleDocument,
    "\n  mutation SubmitRating($input: SubmitRatingInput!) {\n    submitRating(input: $input)\n  }\n": types.SubmitRatingDocument,
    "\n  mutation ReviewVerificationStep($input: ReviewVerificationStepInput!) {\n    reviewVerificationStep(input: $input)\n  }\n": types.ReviewVerificationStepDocument,
    "\n  mutation SubmitVerificationStep($input: SubmitVerificationStepInput!) {\n    submitVerificationStep(input: $input)\n  }\n": types.SubmitVerificationStepDocument,
    "\n  mutation AddBankAccount($input: AddBankAccountInput!) {\n    addBankAccount(input: $input) {\n      id\n      bankCode\n      accountNumber\n      accountName\n      isDefault\n      currency\n    }\n  }\n": types.AddBankAccountDocument,
    "\n  mutation DeleteBankAccount($id: String!) {\n    deleteBankAccount(id: $id)\n  }\n": types.DeleteBankAccountDocument,
    "\n  mutation RequestWithdrawal($input: RequestWithdrawalInput!) {\n    requestWithdrawal(input: $input) {\n      success\n      gatewayReference\n      message\n    }\n  }\n": types.RequestWithdrawalDocument,
    "\n  mutation SetDefaultBankAccount($id: String!) {\n    setDefaultBankAccount(id: $id) {\n      id\n      isDefault\n    }\n  }\n": types.SetDefaultBankAccountDocument,
    "\n  query MyAddresses {\n    myAddresses {\n      id\n      userId\n      label\n      street\n      city\n      state\n      country\n      isDefault\n      coordinates {\n        latitude\n        longitude\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.MyAddressesDocument,
    "\n  query ApplicationsByErrand($errandId: String!) {\n    applicationsByErrand(errandId: $errandId) {\n      id\n      errandId\n      providerPartyId\n      proposal\n      proposedAmountMinorUnits\n      currency\n      status\n      type\n      createdAt\n      acceptedAt\n      rejectedAt\n    }\n  }\n": types.ApplicationsByErrandDocument,
    "\n  query MyApplications {\n    myApplications {\n      id\n      errandId\n      providerPartyId\n      proposal\n      proposedAmountMinorUnits\n      currency\n      status\n      type\n      createdAt\n      acceptedAt\n      rejectedAt\n    }\n  }\n": types.MyApplicationsDocument,
    "\n  query CategoryTree($rootId: String) {\n    categoryTree(rootId: $rootId) {\n      id\n      name\n      requiredTier\n      children {\n        id\n        name\n        requiredTier\n      }\n    }\n  }\n": types.CategoryTreeDocument,
    "\n  query ChatMessages($threadId: String!, $limit: Int, $cursor: String) {\n    chatMessages(threadId: $threadId, limit: $limit, cursor: $cursor) {\n      items {\n        id\n        threadId\n        senderId\n        content\n        sentAt\n      }\n      nextCursor\n    }\n  }\n": types.ChatMessagesDocument,
    "\n  query MyChatThreads {\n    myChatThreads {\n      id\n      errandId\n      participantIds\n      createdAt\n      closedAt\n      firstResponseAt\n    }\n  }\n": types.MyChatThreadsDocument,
    "\n  query AllDisputes($limit: Int, $status: String) {\n    allDisputes(limit: $limit, status: $status) {\n      id\n      errandId\n      raisedById\n      reason\n      description\n      evidenceUrls\n      status\n      resolution\n      resolvedAt\n      createdAt\n    }\n  }\n": types.AllDisputesDocument,
    "\n  query MyDisputes {\n    myDisputes {\n      id\n      errandId\n      raisedById\n      reason\n      description\n      evidenceUrls\n      status\n      resolution\n      resolvedAt\n      createdAt\n    }\n  }\n": types.MyDisputesDocument,
    "\n  query ErrandById($id: String!) {\n    errandById(id: $id) {\n      id\n      title\n      description\n      categoryId\n      addressId\n      clientPartyId\n      marketId\n      requiredTier\n      sourceType\n      status\n      startedAt\n      completedAt\n      createdAt\n      budget {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n": types.ErrandByIdDocument,
    "\n  query MyErrands($role: String, $status: String) {\n    myErrands(role: $role, status: $status) {\n      id\n      title\n      description\n      categoryId\n      addressId\n      clientPartyId\n      marketId\n      requiredTier\n      sourceType\n      status\n      startedAt\n      completedAt\n      createdAt\n      budget {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n": types.MyErrandsDocument,
    "\n  query OpenErrands($input: BrowseOpenErrandsInput!) {\n    openErrands(input: $input) {\n      items {\n        id\n        title\n        categoryId\n        createdAt\n        distanceMeters\n        budget {\n          amountMinorUnits\n          currency\n        }\n      }\n    }\n  }\n": types.OpenErrandsDocument,
    "\n  query MyPartyProfile {\n    myPartyProfile {\n      partyId\n      userId\n      kind\n      marketId\n      hasClientRole\n      hasProviderRole\n      providerTier\n      skills\n      bio\n    }\n  }\n": types.MyPartyProfileDocument,
    "\n  query PublicProviderProfile($partyId: String!) {\n    publicProviderProfile(partyId: $partyId) {\n      partyId\n      tier\n      bio\n      skills\n      completedErrandsCount\n      avgRatingCached\n      trustedByCount\n    }\n  }\n": types.PublicProviderProfileDocument,
    "\n  query SearchServices(\n    $marketId: String!\n    $categoryId: String\n    $limit: Int\n    $cursor: String\n  ) {\n    searchServices(\n      marketId: $marketId\n      categoryId: $categoryId\n      limit: $limit\n      cursor: $cursor\n    ) {\n      id\n      title\n      description\n      categoryId\n      listedById\n      price {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n": types.SearchServicesDocument,
    "\n  query MyVerificationProfile {\n    myVerificationProfile {\n      partyId\n      overallStatus\n      steps {\n        stepType\n        status\n        documentUrls\n        rejectionReason\n        reviewedAt\n        submittedAt\n      }\n    }\n  }\n": types.MyVerificationProfileDocument,
    "\n  query MyBankAccounts {\n    myBankAccounts {\n      id\n      bankCode\n      accountNumber\n      accountName\n      isDefault\n      currency\n      isVerified\n      createdAt\n    }\n  }\n": types.MyBankAccountsDocument,
    "\n  query WalletBalances {\n    walletBalances {\n      activeMinorUnits\n      pendingMinorUnits\n      availableMinorUnits\n      currency\n    }\n  }\n": types.WalletBalancesDocument,
    "\n  subscription MessageSent($threadId: String!) {\n    messageSent(threadId: $threadId) {\n      id\n      threadId\n      senderId\n      content\n      sentAt\n    }\n  }\n": types.MessageSentDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateAddress($input: CreateAddressInput!) {\n    createAddress(input: $input) {\n      id\n      userId\n      label\n      street\n      city\n      state\n      country\n      isDefault\n      coordinates {\n        latitude\n        longitude\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAddress($input: CreateAddressInput!) {\n    createAddress(input: $input) {\n      id\n      userId\n      label\n      street\n      city\n      state\n      country\n      isDefault\n      coordinates {\n        latitude\n        longitude\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteAddress($addressId: String!) {\n    deleteAddress(addressId: $addressId)\n  }\n"): (typeof documents)["\n  mutation DeleteAddress($addressId: String!) {\n    deleteAddress(addressId: $addressId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetDefaultAddress($addressId: String!) {\n    setDefaultAddress(addressId: $addressId)\n  }\n"): (typeof documents)["\n  mutation SetDefaultAddress($addressId: String!) {\n    setDefaultAddress(addressId: $addressId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RejectApplication($applicationId: String!, $errandId: String!) {\n    rejectApplication(applicationId: $applicationId, errandId: $errandId) {\n      id\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation RejectApplication($applicationId: String!, $errandId: String!) {\n    rejectApplication(applicationId: $applicationId, errandId: $errandId) {\n      id\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RequestApplicationAcceptance(\n    $input: RequestApplicationAcceptanceInput!\n  ) {\n    requestApplicationAcceptance(input: $input) {\n      id\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation RequestApplicationAcceptance(\n    $input: RequestApplicationAcceptanceInput!\n  ) {\n    requestApplicationAcceptance(input: $input) {\n      id\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SubmitApplication($input: SubmitApplicationInput!) {\n    submitApplication(input: $input) {\n      id\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation SubmitApplication($input: SubmitApplicationInput!) {\n    submitApplication(input: $input) {\n      id\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendMessage($input: SendMessageInput!) {\n    sendMessage(input: $input) {\n      messageId\n      sentAt\n    }\n  }\n"): (typeof documents)["\n  mutation SendMessage($input: SendMessageInput!) {\n    sendMessage(input: $input) {\n      messageId\n      sentAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation OpenDispute($input: OpenDisputeInput!) {\n    openDispute(input: $input)\n  }\n"): (typeof documents)["\n  mutation OpenDispute($input: OpenDisputeInput!) {\n    openDispute(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResolveDispute($input: ResolveDisputeInput!) {\n    resolveDispute(input: $input)\n  }\n"): (typeof documents)["\n  mutation ResolveDispute($input: ResolveDisputeInput!) {\n    resolveDispute(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CompleteErrand(\n    $errandId: String!\n    $completedBy: String! = \"CLIENT\"\n  ) {\n    completeErrand(errandId: $errandId, completedBy: $completedBy) {\n      errandId\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation CompleteErrand(\n    $errandId: String!\n    $completedBy: String! = \"CLIENT\"\n  ) {\n    completeErrand(errandId: $errandId, completedBy: $completedBy) {\n      errandId\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ConfirmAssignmentCompletion(\n    $errandAssignmentId: String!\n    $providerPartyId: String!\n    $proofUrl: String\n  ) {\n    confirmAssignmentCompletion(\n      errandAssignmentId: $errandAssignmentId\n      providerPartyId: $providerPartyId\n      proofUrl: $proofUrl\n    ) {\n      errandAssignmentId\n      status\n      errandReadyForCompletion\n    }\n  }\n"): (typeof documents)["\n  mutation ConfirmAssignmentCompletion(\n    $errandAssignmentId: String!\n    $providerPartyId: String!\n    $proofUrl: String\n  ) {\n    confirmAssignmentCompletion(\n      errandAssignmentId: $errandAssignmentId\n      providerPartyId: $providerPartyId\n      proofUrl: $proofUrl\n    ) {\n      errandAssignmentId\n      status\n      errandReadyForCompletion\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateErrand($input: CreateErrandInput!) {\n    createErrand(input: $input) {\n      errandId\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation CreateErrand($input: CreateErrandInput!) {\n    createErrand(input: $input) {\n      errandId\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation PublishErrand($errandId: String!) {\n    publishErrand(errandId: $errandId) {\n      errandId\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation PublishErrand($errandId: String!) {\n    publishErrand(errandId: $errandId) {\n      errandId\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation StartErrand($errandId: String!, $providerPartyId: String!) {\n    startErrand(errandId: $errandId, providerPartyId: $providerPartyId) {\n      errandId\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation StartErrand($errandId: String!, $providerPartyId: String!) {\n    startErrand(errandId: $errandId, providerPartyId: $providerPartyId) {\n      errandId\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddProviderRole($partyId: String!) {\n    addProviderRole(partyId: $partyId) {\n      partyId\n      tier\n    }\n  }\n"): (typeof documents)["\n  mutation AddProviderRole($partyId: String!) {\n    addProviderRole(partyId: $partyId) {\n      partyId\n      tier\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProviderRole(\n    $partyId: String!\n    $input: UpdateProviderRoleInput!\n  ) {\n    updateProviderRole(partyId: $partyId, input: $input) {\n      partyId\n      tier\n      skills\n      bio\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProviderRole(\n    $partyId: String!\n    $input: UpdateProviderRoleInput!\n  ) {\n    updateProviderRole(partyId: $partyId, input: $input) {\n      partyId\n      tier\n      skills\n      bio\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SubmitRating($input: SubmitRatingInput!) {\n    submitRating(input: $input)\n  }\n"): (typeof documents)["\n  mutation SubmitRating($input: SubmitRatingInput!) {\n    submitRating(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ReviewVerificationStep($input: ReviewVerificationStepInput!) {\n    reviewVerificationStep(input: $input)\n  }\n"): (typeof documents)["\n  mutation ReviewVerificationStep($input: ReviewVerificationStepInput!) {\n    reviewVerificationStep(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SubmitVerificationStep($input: SubmitVerificationStepInput!) {\n    submitVerificationStep(input: $input)\n  }\n"): (typeof documents)["\n  mutation SubmitVerificationStep($input: SubmitVerificationStepInput!) {\n    submitVerificationStep(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddBankAccount($input: AddBankAccountInput!) {\n    addBankAccount(input: $input) {\n      id\n      bankCode\n      accountNumber\n      accountName\n      isDefault\n      currency\n    }\n  }\n"): (typeof documents)["\n  mutation AddBankAccount($input: AddBankAccountInput!) {\n    addBankAccount(input: $input) {\n      id\n      bankCode\n      accountNumber\n      accountName\n      isDefault\n      currency\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteBankAccount($id: String!) {\n    deleteBankAccount(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteBankAccount($id: String!) {\n    deleteBankAccount(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RequestWithdrawal($input: RequestWithdrawalInput!) {\n    requestWithdrawal(input: $input) {\n      success\n      gatewayReference\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation RequestWithdrawal($input: RequestWithdrawalInput!) {\n    requestWithdrawal(input: $input) {\n      success\n      gatewayReference\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetDefaultBankAccount($id: String!) {\n    setDefaultBankAccount(id: $id) {\n      id\n      isDefault\n    }\n  }\n"): (typeof documents)["\n  mutation SetDefaultBankAccount($id: String!) {\n    setDefaultBankAccount(id: $id) {\n      id\n      isDefault\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyAddresses {\n    myAddresses {\n      id\n      userId\n      label\n      street\n      city\n      state\n      country\n      isDefault\n      coordinates {\n        latitude\n        longitude\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query MyAddresses {\n    myAddresses {\n      id\n      userId\n      label\n      street\n      city\n      state\n      country\n      isDefault\n      coordinates {\n        latitude\n        longitude\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ApplicationsByErrand($errandId: String!) {\n    applicationsByErrand(errandId: $errandId) {\n      id\n      errandId\n      providerPartyId\n      proposal\n      proposedAmountMinorUnits\n      currency\n      status\n      type\n      createdAt\n      acceptedAt\n      rejectedAt\n    }\n  }\n"): (typeof documents)["\n  query ApplicationsByErrand($errandId: String!) {\n    applicationsByErrand(errandId: $errandId) {\n      id\n      errandId\n      providerPartyId\n      proposal\n      proposedAmountMinorUnits\n      currency\n      status\n      type\n      createdAt\n      acceptedAt\n      rejectedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyApplications {\n    myApplications {\n      id\n      errandId\n      providerPartyId\n      proposal\n      proposedAmountMinorUnits\n      currency\n      status\n      type\n      createdAt\n      acceptedAt\n      rejectedAt\n    }\n  }\n"): (typeof documents)["\n  query MyApplications {\n    myApplications {\n      id\n      errandId\n      providerPartyId\n      proposal\n      proposedAmountMinorUnits\n      currency\n      status\n      type\n      createdAt\n      acceptedAt\n      rejectedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CategoryTree($rootId: String) {\n    categoryTree(rootId: $rootId) {\n      id\n      name\n      requiredTier\n      children {\n        id\n        name\n        requiredTier\n      }\n    }\n  }\n"): (typeof documents)["\n  query CategoryTree($rootId: String) {\n    categoryTree(rootId: $rootId) {\n      id\n      name\n      requiredTier\n      children {\n        id\n        name\n        requiredTier\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ChatMessages($threadId: String!, $limit: Int, $cursor: String) {\n    chatMessages(threadId: $threadId, limit: $limit, cursor: $cursor) {\n      items {\n        id\n        threadId\n        senderId\n        content\n        sentAt\n      }\n      nextCursor\n    }\n  }\n"): (typeof documents)["\n  query ChatMessages($threadId: String!, $limit: Int, $cursor: String) {\n    chatMessages(threadId: $threadId, limit: $limit, cursor: $cursor) {\n      items {\n        id\n        threadId\n        senderId\n        content\n        sentAt\n      }\n      nextCursor\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyChatThreads {\n    myChatThreads {\n      id\n      errandId\n      participantIds\n      createdAt\n      closedAt\n      firstResponseAt\n    }\n  }\n"): (typeof documents)["\n  query MyChatThreads {\n    myChatThreads {\n      id\n      errandId\n      participantIds\n      createdAt\n      closedAt\n      firstResponseAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllDisputes($limit: Int, $status: String) {\n    allDisputes(limit: $limit, status: $status) {\n      id\n      errandId\n      raisedById\n      reason\n      description\n      evidenceUrls\n      status\n      resolution\n      resolvedAt\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query AllDisputes($limit: Int, $status: String) {\n    allDisputes(limit: $limit, status: $status) {\n      id\n      errandId\n      raisedById\n      reason\n      description\n      evidenceUrls\n      status\n      resolution\n      resolvedAt\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyDisputes {\n    myDisputes {\n      id\n      errandId\n      raisedById\n      reason\n      description\n      evidenceUrls\n      status\n      resolution\n      resolvedAt\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query MyDisputes {\n    myDisputes {\n      id\n      errandId\n      raisedById\n      reason\n      description\n      evidenceUrls\n      status\n      resolution\n      resolvedAt\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ErrandById($id: String!) {\n    errandById(id: $id) {\n      id\n      title\n      description\n      categoryId\n      addressId\n      clientPartyId\n      marketId\n      requiredTier\n      sourceType\n      status\n      startedAt\n      completedAt\n      createdAt\n      budget {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n"): (typeof documents)["\n  query ErrandById($id: String!) {\n    errandById(id: $id) {\n      id\n      title\n      description\n      categoryId\n      addressId\n      clientPartyId\n      marketId\n      requiredTier\n      sourceType\n      status\n      startedAt\n      completedAt\n      createdAt\n      budget {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyErrands($role: String, $status: String) {\n    myErrands(role: $role, status: $status) {\n      id\n      title\n      description\n      categoryId\n      addressId\n      clientPartyId\n      marketId\n      requiredTier\n      sourceType\n      status\n      startedAt\n      completedAt\n      createdAt\n      budget {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyErrands($role: String, $status: String) {\n    myErrands(role: $role, status: $status) {\n      id\n      title\n      description\n      categoryId\n      addressId\n      clientPartyId\n      marketId\n      requiredTier\n      sourceType\n      status\n      startedAt\n      completedAt\n      createdAt\n      budget {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query OpenErrands($input: BrowseOpenErrandsInput!) {\n    openErrands(input: $input) {\n      items {\n        id\n        title\n        categoryId\n        createdAt\n        distanceMeters\n        budget {\n          amountMinorUnits\n          currency\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query OpenErrands($input: BrowseOpenErrandsInput!) {\n    openErrands(input: $input) {\n      items {\n        id\n        title\n        categoryId\n        createdAt\n        distanceMeters\n        budget {\n          amountMinorUnits\n          currency\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyPartyProfile {\n    myPartyProfile {\n      partyId\n      userId\n      kind\n      marketId\n      hasClientRole\n      hasProviderRole\n      providerTier\n      skills\n      bio\n    }\n  }\n"): (typeof documents)["\n  query MyPartyProfile {\n    myPartyProfile {\n      partyId\n      userId\n      kind\n      marketId\n      hasClientRole\n      hasProviderRole\n      providerTier\n      skills\n      bio\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PublicProviderProfile($partyId: String!) {\n    publicProviderProfile(partyId: $partyId) {\n      partyId\n      tier\n      bio\n      skills\n      completedErrandsCount\n      avgRatingCached\n      trustedByCount\n    }\n  }\n"): (typeof documents)["\n  query PublicProviderProfile($partyId: String!) {\n    publicProviderProfile(partyId: $partyId) {\n      partyId\n      tier\n      bio\n      skills\n      completedErrandsCount\n      avgRatingCached\n      trustedByCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchServices(\n    $marketId: String!\n    $categoryId: String\n    $limit: Int\n    $cursor: String\n  ) {\n    searchServices(\n      marketId: $marketId\n      categoryId: $categoryId\n      limit: $limit\n      cursor: $cursor\n    ) {\n      id\n      title\n      description\n      categoryId\n      listedById\n      price {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchServices(\n    $marketId: String!\n    $categoryId: String\n    $limit: Int\n    $cursor: String\n  ) {\n    searchServices(\n      marketId: $marketId\n      categoryId: $categoryId\n      limit: $limit\n      cursor: $cursor\n    ) {\n      id\n      title\n      description\n      categoryId\n      listedById\n      price {\n        amountMinorUnits\n        currency\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyVerificationProfile {\n    myVerificationProfile {\n      partyId\n      overallStatus\n      steps {\n        stepType\n        status\n        documentUrls\n        rejectionReason\n        reviewedAt\n        submittedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyVerificationProfile {\n    myVerificationProfile {\n      partyId\n      overallStatus\n      steps {\n        stepType\n        status\n        documentUrls\n        rejectionReason\n        reviewedAt\n        submittedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyBankAccounts {\n    myBankAccounts {\n      id\n      bankCode\n      accountNumber\n      accountName\n      isDefault\n      currency\n      isVerified\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query MyBankAccounts {\n    myBankAccounts {\n      id\n      bankCode\n      accountNumber\n      accountName\n      isDefault\n      currency\n      isVerified\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query WalletBalances {\n    walletBalances {\n      activeMinorUnits\n      pendingMinorUnits\n      availableMinorUnits\n      currency\n    }\n  }\n"): (typeof documents)["\n  query WalletBalances {\n    walletBalances {\n      activeMinorUnits\n      pendingMinorUnits\n      availableMinorUnits\n      currency\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription MessageSent($threadId: String!) {\n    messageSent(threadId: $threadId) {\n      id\n      threadId\n      senderId\n      content\n      sentAt\n    }\n  }\n"): (typeof documents)["\n  subscription MessageSent($threadId: String!) {\n    messageSent(threadId: $threadId) {\n      id\n      threadId\n      senderId\n      content\n      sentAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;