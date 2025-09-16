import { Navigate, Route, Routes } from "react-router";
import Onboarding from "./pages/roles";
import OnboardingLayout from "./pages/OnboardingLayout";
import Services from "./pages/serviceType";

const OnboardingPage = () => (
  <Routes>
    <Route element={<OnboardingLayout />}>
      <Route index element={<Onboarding />} />
      <Route path="/role" element={<Onboarding />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>
);

export { OnboardingPage };
