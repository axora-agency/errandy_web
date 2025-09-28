import { Navigate, Route, Routes } from "react-router";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import {
  JobPostsPage,
  PostJobPage,
  FindWorkersPage,
  HiredWorkersPage,
  SavedWorkersPage,
  ErrandsPage,
  ReportsSummaryPage,
  TransactionsPage,
} from "./pages";

const ClientPage = () => (
  <Routes>
    <Route index element={<Navigate to="dashboard" />} />
    <Route path="dashboard" element={<DashboardPage />} />

    {/* Hire Workers */}
    <Route path="job-posts" element={<JobPostsPage />} />
    <Route path="post-job" element={<PostJobPage />} />
    <Route path="find-workers" element={<FindWorkersPage />} />
    <Route path="hired-workers" element={<HiredWorkersPage />} />
    <Route path="saved-workers" element={<SavedWorkersPage />} />

    {/* Manage Errands */}
    <Route path="errands" element={<ErrandsPage />} />

    {/* Reports */}
    <Route path="reports/summary" element={<ReportsSummaryPage />} />
    <Route path="reports/transactions" element={<TransactionsPage />} />

    <Route path="*" element={<Navigate to="/error/404" />} />
  </Routes>
);

export { ClientPage };
