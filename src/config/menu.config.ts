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
    id: "errands",
    type: "dropdown",
    label: "Hire Workers",
    children: [
      {
        id: "errandPostsSection",
        type: "section",
        label: "Manage Errands",
      },
      {
        id: "ErrandPosts",
        type: "link",
        label: "Errand Posts",
        to: "/clients/job-posts",
      },
      {
        id: "divider-1",
        type: "divider",
      },
      {
        id: "workers",
        type: "section",
        label: "Find Workers",
      },
      {
        id: "postJob",
        type: "link",
        label: "Post an Errand",
        to: "/clients/post-job",
      },
      {
        id: "browseWorkers",
        type: "link",
        label: "Browse Workers",
        to: "/clients/find-workers",
      },
      {
        id: "hiredWorkers",
        type: "link",
        label: "Hired Workers",
        to: "/clients/hired-workers",
      },
      {
        id: "savedWorkers",
        type: "link",
        label: "Saved Workers",
        to: "/clients/saved-workers",
      },
    ],
  },
  {
    id: "works",
    type: "dropdown",
    label: "Manage Errands",
    children: [
      {
        id: "activeErrands",
        type: "section",
        label: "Active & Past Errands",
      },
      {
        id: "myErrands",
        type: "link",
        label: "My Errands",
        to: "/clients/errands",
      },
    ],
  },
  {
    id: "report",
    type: "dropdown",
    label: "Reports",
    children: [
      {
        id: "reportsSection",
        type: "section",
        label: "Reports",
      },
      {
        id: "summary",
        type: "link",
        label: "Summary",
        to: "/clients/reports/summary",
      },
      {
        id: "transactions",
        type: "link",
        label: "Transactions History",
        to: "/clients/reports/transactions",
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
