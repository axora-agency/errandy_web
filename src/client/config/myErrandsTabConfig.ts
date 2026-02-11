import { MyErrandsType } from "@/gql/graphql";

// Tab definitions based on user role
export const CLIENT_TABS = [
  { key: "active", label: "Active", type: MyErrandsType.ClientActive },
  { key: "published", label: "Published", type: MyErrandsType.ClientPublished },
  { key: "draft", label: "Draft", type: MyErrandsType.ClientDraft },
] as const;

export const PROVIDER_TABS = [
  { key: "active", label: "Active", type: MyErrandsType.ProviderActive },
  { key: "pending", label: "Pending", type: MyErrandsType.ProviderPending },
  { key: "rejected", label: "Rejected", type: MyErrandsType.ProviderRejected },
  { key: "completed", label: "Completed", type: MyErrandsType.ProviderCompleted },
] as const;

export type ClientTab = (typeof CLIENT_TABS)[number];
export type ProviderTab = (typeof PROVIDER_TABS)[number];
export type Tab = ClientTab | ProviderTab;
