import { useUserStore } from "@/store/userStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireClient = () => {
  const location = useLocation();
  const { user } = useUserStore();

  // Check if user has client role or activeRole is CLIENT
  if (user?.activeRole === "CLIENT" || user?.hasClientRole) {
    return <Outlet />;
  }

  if (user?.activeRole === "PROVIDER" || user?.activeRole === "WORKER") {
    return (
      <Navigate
        to="/error/client-required"
        state={{ from: location }}
        replace
      />
    );
  }

  return <Navigate to="/onboarding/role" state={{ from: location }} replace />;
};

export { RequireClient };
