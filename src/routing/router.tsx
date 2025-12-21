import { createBrowserRouter, Navigate } from "react-router-dom";
import { RequireAuth } from "@/auth/RequireAuth";
import { MainLayout } from "@/layouts/mainLayout";
import RootLayout from "@/layouts/RootLayout";
import { RequireOnboarding } from "@/onboarding/RequireOnboarding";
import { RequireClient } from "@/client";
import { RequireWorker } from "@/worker";
import MessagesPage from "@/pages/MessagesPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import { useUserStore } from "@/store/userStore";

// Auth pages
import LoginPage from "@/auth/pages/LoginPage";
import SignUpPage from "@/auth/pages/SignUpPage";
import LandingPage from "@/auth/pages/LandingPage";
import ForgotPasswordPage from "@/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/auth/pages/ResetPasswordPage";
import AuthLayout from "@/layouts/AuthLayout";

// Onboarding pages
import Onboarding from "@/onboarding/pages/roles";
import OnboardingLayout from "@/onboarding/pages/OnboardingLayout";
import Services from "@/onboarding/pages/serviceType";
import OnboardingAddressPage from "@/onboarding/pages/address";
import CompletedPage from "@/onboarding/pages/completed";

// Client pages
import {
  JobPostsPage,
  PostJobPage,
  FindWorkersPage,
  HiredWorkersPage,
  SavedWorkersPage,
  ErrandsPage,
  ReportsSummaryPage,
  TransactionsPage,
} from "@/client/pages";

// Worker pages
import {
  SavedErrandsPage,
  BidsPage,
  ShopsPage,
  InProgressErrandsPage,
  CompletedErrandsPage,
  FinancesOverviewPage,
  FinancesReportsPage,
  BillingEarningsPage,
  InvoicesPage,
  PayoutsPage,
  FindWorkPage,
} from "@/worker/pages";

// Error pages
import { ErrorsLayout } from "@/layouts/errors";
import { Error404Page } from "@/errors/Error404Page";
import { Error500Page } from "@/errors/Error500Page";
import ClientRequiredPage from "@/errors/ClientRequiredPage";
import WorkerRequiredPage from "@/errors/WorkerRequiredPage";

// Root redirect component
const RootRedirect = () => {
  const { user } = useUserStore();
  const role = user?.activeRole;

  return (
    <Navigate
      to={role === "CLIENT" ? "/client/dashboard" : "/workers/find-work"}
      replace
    />
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    handle: { title: "Errandy" },
    children: [
      {
        path: "/",
        element: <RequireAuth />,
        handle: { requiresAuth: true },
        children: [
          {
            path: "",
            element: <RequireOnboarding />,
            handle: { requiresOnboarding: true },
            children: [
              {
                path: "",
                element: <MainLayout />,
                children: [
                  {
                    index: true,
                    element: <RootRedirect />,
                    handle: { title: "Dashboard" },
                  },
                  {
                    path: "messages",
                    element: <MessagesPage />,
                    handle: { title: "Messages", breadcrumb: "Messages" },
                  },
                  {
                    path: "client",
                    element: <RequireClient />,
                    handle: { requiresRole: "CLIENT" },
                    children: [
                      {
                        index: true,
                        element: <Navigate to="dashboard" replace />,
                      },
                      {
                        path: "dashboard",
                        element: <DashboardPage />,
                        handle: { title: "Dashboard", breadcrumb: "Dashboard" },
                      },
                      {
                        path: "job-posts",
                        element: <JobPostsPage />,
                        handle: { title: "Job Posts", breadcrumb: "Job Posts" },
                      },
                      {
                        path: "post-job",
                        element: <PostJobPage />,
                        handle: { title: "Post a Job", breadcrumb: "Post Job" },
                      },
                      {
                        path: "find-workers",
                        element: <FindWorkersPage />,
                        handle: {
                          title: "Find Workers",
                          breadcrumb: "Find Workers",
                        },
                      },
                      {
                        path: "hired-workers",
                        element: <HiredWorkersPage />,
                        handle: {
                          title: "Hired Workers",
                          breadcrumb: "Hired Workers",
                        },
                      },
                      {
                        path: "saved-workers",
                        element: <SavedWorkersPage />,
                        handle: {
                          title: "Saved Workers",
                          breadcrumb: "Saved Workers",
                        },
                      },
                      {
                        path: "errands",
                        element: <ErrandsPage />,
                        handle: { title: "Errands", breadcrumb: "Errands" },
                      },
                      {
                        path: "reports/summary",
                        element: <ReportsSummaryPage />,
                        handle: {
                          title: "Reports Summary",
                          breadcrumb: "Summary",
                        },
                      },
                      {
                        path: "reports/transactions",
                        element: <TransactionsPage />,
                        handle: {
                          title: "Transactions",
                          breadcrumb: "Transactions",
                        },
                      },
                    ],
                  },
                  {
                    path: "workers",
                    element: <RequireWorker />,
                    handle: { requiresRole: "WORKER" },
                    children: [
                      {
                        index: true,
                        element: <Navigate to="find-work" replace />,
                      },
                      {
                        path: "find-work",
                        element: <FindWorkPage />,
                        handle: { title: "Find Work", breadcrumb: "Find Work" },
                      },
                      {
                        path: "saved-errands",
                        element: <SavedErrandsPage />,
                        handle: {
                          title: "Saved Errands",
                          breadcrumb: "Saved Errands",
                        },
                      },
                      {
                        path: "bids",
                        element: <BidsPage />,
                        handle: { title: "My Bids", breadcrumb: "Bids" },
                      },
                      {
                        path: "shops",
                        element: <ShopsPage />,
                        handle: { title: "Shops", breadcrumb: "Shops" },
                      },
                      {
                        path: "deliveries/in-progress",
                        element: <InProgressErrandsPage />,
                        handle: {
                          title: "In Progress",
                          breadcrumb: "In Progress",
                        },
                      },
                      {
                        path: "deliveries/completed",
                        element: <CompletedErrandsPage />,
                        handle: {
                          title: "Completed Deliveries",
                          breadcrumb: "Completed",
                        },
                      },
                      {
                        path: "finances/overview",
                        element: <FinancesOverviewPage />,
                        handle: {
                          title: "Finances Overview",
                          breadcrumb: "Overview",
                        },
                      },
                      {
                        path: "finances/reports",
                        element: <FinancesReportsPage />,
                        handle: {
                          title: "Financial Reports",
                          breadcrumb: "Reports",
                        },
                      },
                      {
                        path: "finances/billing",
                        element: <BillingEarningsPage />,
                        handle: {
                          title: "Billing & Earnings",
                          breadcrumb: "Billing",
                        },
                      },
                      {
                        path: "finances/invoices",
                        element: <InvoicesPage />,
                        handle: { title: "Invoices", breadcrumb: "Invoices" },
                      },
                      {
                        path: "finances/payouts",
                        element: <PayoutsPage />,
                        handle: { title: "Payouts", breadcrumb: "Payouts" },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: "onboarding",
            element: <OnboardingLayout />,
            handle: { title: "Onboarding" },
            children: [
              {
                index: true,
                element: <Onboarding />,
                handle: { title: "Choose Role", breadcrumb: "Role" },
              },
              {
                path: "role",
                element: <Onboarding />,
                handle: { title: "Choose Role", breadcrumb: "Role" },
              },
              {
                path: "services",
                element: <Services />,
                handle: { title: "Select Services", breadcrumb: "Services" },
              },
              {
                path: "address",
                element: <OnboardingAddressPage />,
                handle: { title: "Add Address", breadcrumb: "Address" },
              },
              {
                path: "completed",
                element: <CompletedPage />,
                handle: { title: "Setup Complete", breadcrumb: "Completed" },
              },
            ],
          },
        ],
      },
      {
        path: "/",
        handle: { public: true },
        children: [
          {
            index: true,
            element: <LandingPage />,
            handle: {
              title: "Welcome to Errandy",
              description: "Get errands done easily",
            },
          },
          {
            path: "auth",
            element: <AuthLayout />,
            handle: { title: "Authentication" },
            children: [
              {
                path: "login",
                element: <LoginPage />,
                handle: {
                  title: "Login",
                  description: "Sign in to your account",
                },
              },
              {
                path: "signup",
                element: <SignUpPage />,
                handle: {
                  title: "Sign Up",
                  description: "Create a new account",
                },
              },
              {
                path: "forgot-password",
                element: <ForgotPasswordPage />,
                handle: {
                  title: "Forgot Password",
                  description: "Reset your password",
                },
              },
              {
                path: "reset-password",
                element: <ResetPasswordPage />,
                handle: {
                  title: "Reset Password",
                  description: "Set a new password",
                },
              },
            ],
          },
        ],
      },
      {
        path: "error",
        element: <ErrorsLayout />,
        handle: { title: "Error" },
        children: [
          {
            index: true,
            element: <Error404Page />,
            handle: { title: "Page Not Found", statusCode: 404 },
          },
          {
            path: "404",
            element: <Error404Page />,
            handle: { title: "Page Not Found", statusCode: 404 },
          },
          {
            path: "500",
            element: <Error500Page />,
            handle: { title: "Server Error", statusCode: 500 },
          },
          {
            path: "client-required",
            element: <ClientRequiredPage />,
            handle: { title: "Client Access Required", requiresRole: "CLIENT" },
          },
          {
            path: "worker-required",
            element: <WorkerRequiredPage />,
            handle: { title: "Worker Access Required", requiresRole: "WORKER" },
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/error/404" replace />,
        handle: { title: "Not Found" },
      },
    ],
  },
]);
