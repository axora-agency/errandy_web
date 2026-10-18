import { Navigate, Route, Routes } from "react-router-dom";
import Onboarding from "./pages/roles";
import OnboardingLayout from "./pages/OnboardingLayout";
import Services from "./pages/serviceType";
import OnboardingAddressPage from "./pages/address";
import CompletedPage from "./pages/completed";

const OnboardingPage = () => (
  <Routes>
    <Route element={<OnboardingLayout />}>
      <Route index element={<Onboarding />} />
      <Route path="/role" element={<Onboarding />} />
      <Route path="/services" element={<Services />} />
      <Route path="/address" element={<OnboardingAddressPage />} />
      <Route path="/completed" element={<CompletedPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>
);

export { OnboardingPage };
