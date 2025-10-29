import { Navigate, Route, Routes } from "react-router";
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
} from "./pages";

const WorkerPage = () => (
  <Routes>
    <Route index element={<Navigate to="find-work" />} />
    <Route path="find-work" element={<FindWorkPage />} />

    {/* Find Errands */}
    <Route path="saved-errands" element={<SavedErrandsPage />} />
    <Route path="bids" element={<BidsPage />} />
    <Route path="shops" element={<ShopsPage />} />

    {/* Deliveries */}
    <Route path="deliveries/in-progress" element={<InProgressErrandsPage />} />
    <Route path="deliveries/completed" element={<CompletedErrandsPage />} />

    {/* Finances */}
    <Route path="finances/overview" element={<FinancesOverviewPage />} />
    <Route path="finances/reports" element={<FinancesReportsPage />} />
    <Route path="finances/billing" element={<BillingEarningsPage />} />
    <Route path="finances/invoices" element={<InvoicesPage />} />
    <Route path="finances/payouts" element={<PayoutsPage />} />

    <Route path="*" element={<Navigate to="/error/404" />} />
  </Routes>
);

export { WorkerPage };
