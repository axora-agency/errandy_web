import { create } from "zustand";
import type { ProviderTier } from "../gql/graphql";

export type UserRole = "CLIENT" | "PROVIDER" | "WORKER" | "ORGANIZATION";

export interface UserProfile {
  id: string;
  partyId?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  phoneNumber?: string | null;
  activeRole?: UserRole | null;
  hasClientRole?: boolean;
  hasProviderRole?: boolean;
  providerTier?: ProviderTier | null;
  skills?: string[] | null;
  bio?: string | null;
  marketId?: string | null;
  onboardingProgress?: {
    step?: number;
    isCompleted?: boolean;
  } | null;
}

interface UserState {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  updateUser: (partial: Partial<UserProfile>) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateUser: (partial) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...partial } : null,
    })),
}));
