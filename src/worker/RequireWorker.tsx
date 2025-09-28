import { useUserStore } from "@/store/userStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireWorker = () => {
  const location = useLocation();
  const { user } = useUserStore();

  // Check if user has worker role
  if (user?.activeRole === "WORKER") {
    return <Outlet />;
  }

  // If user has client role, redirect to error page
  if (user?.activeRole === "CLIENT") {
    return <Navigate to="/error/worker-required" state={{ from: location }} replace />;
  }

  // If no role is set, redirect to onboarding
  return <Navigate to="/onboarding/role" state={{ from: location }} replace />;
};

export { RequireWorker };
