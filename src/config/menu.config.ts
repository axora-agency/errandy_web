import type { MenuConfig } from "@/navigation/types";

const baseCommon: MenuConfig = [
  {
    id: "inbox",
    type: "link",
    label: "Messages",
    to: "/messages",
  },
];

export const clientHeaderNav: MenuConfig = [
  {
    id: "home",
    type: "link",
    label: "Dashboard",
    to: "/client/dashboard",
  },
  {
    id: "errands",
    type: "dropdown",
    label: "Errands",
    children: [
      {
        id: "post",
        type: "link",
        label: "Post Errand",
        to: "/client/errands/new",
      },
      {
        id: "browse",
        type: "link",
        label: "Browse Workers",
        to: "/client/browse",
      },
      {
        id: "my-errands",
        type: "link",
        label: "My Errands",
        to: "/client/errands",
      },
      { id: "divider-1", type: "divider" },
      {
        id: "settings",
        type: "link",
        label: "Settings",
        to: "/client/settings",
      },
    ],
  },
  ...baseCommon,
];

export const workerHeaderNav: MenuConfig = [
  {
    id: "home",
    type: "dropdown",
    label: "Find Errands",
    children: [
      {
        id: "browse",
        type: "link",
        label: "Browse Errands",
        to: "/workers/find-work",
      },
      {
        id: "saved",
        type: "link",
        label: "Saved Errands",
        to: "/workers/saved-errands",
      },
      { id: "my-bids", type: "link", label: "My Bids", to: "/workers/bids" },
      {
        id: "divider-2",
        type: "divider",
      },
      {
        id: "setupShop",
        type: "section",
        label: "Setup Your Shop",
      },
      {
        id: "shops",
        type: "link",
        label: "Your Shops",
        to: "/workers/shops",
      },
    ],
  },
  {
    id: "deliveries",
    type: "dropdown",
    label: "My Deliveries",
    children: [
      {
        id: "in-progress",
        type: "link",
        label: "In Progress Errands",
        to: "/workers/deliveries/in-progress",
      },
      {
        id: "completed",
        type: "link",
        label: "Completed Errands",
        to: "/workers/deliveries/completed",
      },
    ],
  },
  {
    id: "finances",
    type: "dropdown",
    label: "Finances",
    children: [
      {
        id: "overview",
        type: "link",
        label: "Overview",
        to: "/workers/finances/overview",
      },
      {
        id: "reports",
        type: "link",
        label: "Reports",
        to: "/workers/finances/reports",
      },
      {
        id: "billing",
        type: "link",
        label: "Billing & Earnings",
        to: "/workers/finances/billing",
      },
      {
        id: "invoices",
        type: "link",
        label: "Transaction & Invoices",
        to: "/workers/finances/invoices",
      },
      {
        id: "divider-1",
        type: "divider",
      },
      {
        id: "payments-section",
        type: "section",
        label: "Payments",
      },
      {
        id: "withdrawals",
        type: "link",
        label: "Withdraw earnings",
        to: "/workers/finances/payouts",
      },
    ],
  },
  ...baseCommon,
];
