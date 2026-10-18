export const CLIENT_TABS = [
  { key: "active", label: "Active", status: "IN_PROGRESS" },
  { key: "published", label: "Open / Published", status: "OPEN" },
  { key: "completed", label: "Completed", status: "COMPLETED" },
] as const;

export const PROVIDER_TABS = [
  { key: "active", label: "Active", status: "IN_PROGRESS" },
  { key: "assigned", label: "Assigned", status: "ASSIGNED" },
  { key: "completed", label: "Completed", status: "COMPLETED" },
] as const;

export type ClientTab = (typeof CLIENT_TABS)[number];
export type ProviderTab = (typeof PROVIDER_TABS)[number];
export type Tab = ClientTab | ProviderTab;
