import { Navigate, Route, Routes } from "react-router";
import DashboardPage from "@/pages/dashboard/DashboardPage";

const ClientPage = () => (
  <Routes>
    <Route index element={<Navigate to="dashboard" />} />
    <Route path="dashboard" element={<DashboardPage />} />
    <Route path="*" element={<Navigate to="/error/404" />} />
  </Routes>
);

export { ClientPage };
