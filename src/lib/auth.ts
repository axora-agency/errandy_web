import { createAuthClient } from "better-auth/react";
import { usernameClient } from "better-auth/client/plugins";

const API_URL = import.meta.env.VITE_API_URL || "https://api.errandy.name.ng";

export const auth = createAuthClient({
  baseURL: `${API_URL}/api/auth`,
  plugins: [usernameClient()],
  fetchOptions: {
    onError: (context) => {
      const { error, response } = context;
      console.error("[Auth Client Error]:", {
        status: response?.status,
        statusText: response?.statusText,
        error: error,
        url: response?.url,
      });

      if (response?.status === 0) {
        console.warn(
          "[Auth Client Warning]: A status of 0 often indicates a network failure, CORS issue, or unreachable backend. Check your EXPO_PUBLIC_API_URL and ensure the backend is running and accessible."
        );
      }
    },
  },
});

export const {
  useSession,
  signIn,
  signOut,
  sendVerificationEmail,
  signUp,
  changePassword,
  isUsernameAvailable,
  verifyEmail,
  resetPassword,
  updateUser,
} = auth;
