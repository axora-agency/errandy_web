import { useUserStore } from "@/store/userStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ScreenLoader } from "@/components";

const RequireOnboarding = () => {
  const location = useLocation();
  const { user } = useUserStore();

  // If user is null, show loading (RequireAuth should handle user loading)
  if (user === null) {
    return <ScreenLoader />;
  }

  // If user is a client, they are considered onboarded once role is set
  if (user?.activeRole === "CLIENT" || (!user?.hasProviderRole && user?.hasClientRole)) {
    return <Outlet />;
  }

  // If user is a worker/provider, check if they have provider role
  if (user?.activeRole === "WORKER" || user?.activeRole === "PROVIDER") {
    // If user is accessing worker routes, allow them through
    if (location.pathname.startsWith("/workers")) {
      return <Outlet />;
    }

    // If provider role is active and created, allow into app
    if (user.hasProviderRole) {
      return <Outlet />;
    }

    if (location.pathname.startsWith("/onboarding")) return <Outlet />;
    return <Navigate to="/onboarding/services" state={{ from: location }} replace />;
  }

  // if no role / unknown, redirect to role selection
  if (location.pathname.startsWith("/onboarding")) return <Outlet />;
  return <Navigate to="/onboarding/role" state={{ from: location }} replace />;
};

export { RequireOnboarding };
