import { useUserStore } from "@/store/userStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireOnboarding = () => {
  const location = useLocation();
  const { user } = useUserStore();

  // if user has role, allow
  if (user?.activeRole) {
    return <Outlet />;
  }

  // if already on onboarding, allow
  if (location.pathname === "/onboarding") {
    return <Outlet />;
  }

  // otherwise, redirect
  return <Navigate to="/onboarding/role" state={{ from: location }} replace />;
};


export { RequireOnboarding };
