import { Navigate, Route, Routes } from "react-router";
import DashboardPage from "@/pages/dashboard/DashboardPage";

const WorkerPage = () => (
  <Routes>
    <Route index element={<Navigate to="find-work" />} />
    <Route path="find-work" element={<DashboardPage />} />
    <Route path="*" element={<Navigate to="/error/404" />} />
  </Routes>
);

export { WorkerPage };
