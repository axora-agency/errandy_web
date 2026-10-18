import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "@/layouts/AuthLayout";

const AuthPage = () => (
  <Routes>
    <Route index element={<LandingPage />} />
    <Route element={<AuthLayout />}>
      <Route path="auth/login" element={<LoginPage />} />
      <Route path="auth/signup" element={<SignUpPage />} />
      <Route path="auth/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="auth/reset-password" element={<ResetPasswordPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/error/404" />} />
  </Routes>
);

export { AuthPage };
