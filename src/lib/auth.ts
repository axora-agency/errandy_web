import { createAuthClient } from "better-auth/react";
import { usernameClient } from "better-auth/client/plugins";

const { VITE_API_URL } = import.meta.env;

export const auth = createAuthClient({
  baseURL: `${VITE_API_URL}/api/auth`,
  plugins: [usernameClient()],
});

export const {
  useSession,
  signIn,
  signOut,
  sendVerificationEmail,
  signUp,
  changePassword,
  forgetPassword,
  requestPasswordReset,
  isUsernameAvailable,
  verifyEmail,
  resetPassword,
  updateUser,
} = auth;
