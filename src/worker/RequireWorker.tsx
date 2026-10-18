import { useUserStore } from "@/store/userStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireWorker = () => {
  const location = useLocation();
  const { user } = useUserStore();

  // Check if user has worker/provider role
  if (user?.activeRole === "PROVIDER" || user?.activeRole === "WORKER" || user?.hasProviderRole) {
    return <Outlet />;
  }

  // If user has client role only, redirect to onboarding role selection
  if (user?.activeRole === "CLIENT" && !user?.hasProviderRole) {
    return <Navigate to="/onboarding/role" state={{ from: location }} replace />;
  }

  // If no role is set, redirect to onboarding
  return <Navigate to="/onboarding/role" state={{ from: location }} replace />;
};

export { RequireWorker };
