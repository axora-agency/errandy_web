import { useUserStore } from "@/store/userStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireOnboarding = () => {
  const location = useLocation();
  const { user } = useUserStore();

  // If user is a client, they are considered onboarded once role is set
  if (user?.activeRole === "CLIENT") {
    return <Outlet />;
  }

  // If user is a worker, check onboardingProgress and redirect to the correct step
  if (user?.activeRole === "WORKER") {
    const progress = user.onboardingProgress;
    // If completed, allow into app
    if (progress === "COMPLETED") return <Outlet />;

    // Map progress to route
    const routeForProgress = () => {
      if (!progress || progress === "NONE") return "/onboarding/role";
      if (progress === "ROLE_SELECTED") {
        // role already selected — send worker to services selection next
        return "/onboarding/services";
      }
      if (progress === "SERVICES_SELECTED") return "/onboarding/address";
      if (progress === "ADDRESS_ADDED") return "/onboarding/completed";
      return "/onboarding/role";
    };

    const target = routeForProgress();
    if (location.pathname.startsWith("/onboarding")) return <Outlet />;
    return <Navigate to={target} state={{ from: location }} replace />;
  }

  // if no role / unknown, redirect to role selection
  if (location.pathname.startsWith("/onboarding")) return <Outlet />;
  return <Navigate to="/onboarding/role" state={{ from: location }} replace />;
};

export { RequireOnboarding };
