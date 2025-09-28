import { useUserStore } from "@/store/userStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireClient = () => {
  const location = useLocation();
  const { user } = useUserStore();

  // Check if user has client role
  if (user?.activeRole === "CLIENT") {
    return <Outlet />;
  }

  // If user has worker role, redirect to error page
  if (user?.activeRole === "WORKER") {
    return (
      <Navigate
        to="/error/client-required"
        state={{ from: location }}
        replace
      />
    );
  }

  // If no role is set, redirect to onboarding
  return <Navigate to="/onboarding/role" state={{ from: location }} replace />;
};

export { RequireClient };
