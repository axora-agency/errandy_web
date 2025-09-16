import { create } from "zustand";
import type { User, UserRole } from "../gql/graphql";

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  // pending role during onboarding (worker/client selection)
  pendingRole: UserRole | null;
  setPendingRole: (role: UserRole | null) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) =>
    set({
      user,
    }),
  pendingRole: null,
  setPendingRole: (role) => set({ pendingRole: role }),
}));
