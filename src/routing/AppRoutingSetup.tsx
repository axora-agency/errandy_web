import { Navigate, Route, Routes } from "react-router";
import { RequireAuth } from "@/auth/RequireAuth";
import { ErrorsRouting } from "@/errors";
import { AuthPage } from "@/auth/AuthPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import { MainLayout } from "@/layouts/mainLayout";
import { OnboardingPage } from "@/onboarding/OnboardingPage";
import { RequireOnboarding } from "@/onboarding/RequireOnboarding";
import { useUserStore } from "@/store/userStore";

const AppRoutingSetup = () => {
  const { user } = useUserStore();
  const role = user?.activeRole;
  return (
    <Routes>
      {/* Protected routes */}
      <Route element={<RequireAuth />}>
        <Route>
          <Route element={<RequireOnboarding />}>
            <Route element={<MainLayout />}>
              <Route
                path="/"
                element={
                  <Navigate
                    to={
                      role === "CLIENT"
                        ? "/client/dashboard"
                        : "/workers/find-work"
                    }
                  />
                }
              />
              <Route path="/client/*">
                <Route path="dashboard" element={<DashboardPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="onboarding/*" element={<OnboardingPage />} />
        </Route>
      </Route>

      {/* Public routes */}
      <Route path="error/*" element={<ErrorsRouting />} />
      <Route path="/*" element={<AuthPage />} />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { AppRoutingSetup };
