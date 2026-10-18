import { create } from "zustand";
import type { UserRole } from "@/store/userStore";

type SelectedServices = Record<string, boolean>;

interface OnboardingState {
  // service selection
  selectedCategory: string | null;
  selectedServices: SelectedServices;
  setSelectedCategory: (c: string | null) => void;
  setSelectedServices: (s: SelectedServices) => void;
  toggleService: (id: string) => void;
  resetSelection: () => void;

  // pending role during onboarding
  pendingRole: UserRole | null;
  setPendingRole: (r: UserRole | null) => void;

  // derived helpers
  selectedServicesArray: string[];
  selectedServicesCount: number;
  // address selection
  selectedAddress: {
    address: string;
    label?: string;
    latitude?: number | null;
    longitude?: number | null;
  } | null;
  setSelectedAddress: (a: { address: string; label?: string; latitude?: number | null; longitude?: number | null } | null) => void;
}

export const useOnBoardingStore = create<OnboardingState>()((set) => ({
  selectedCategory: null,
  selectedServices: {},
  setSelectedCategory: (c) => set({ selectedCategory: c, selectedServices: {} }),
  setSelectedServices: (s) => set({ selectedServices: s }),
  toggleService: (id) =>
    set((state) => {
      const next = { ...state.selectedServices, [id]: !state.selectedServices[id] };
      const arr = Object.keys(next).filter((k) => next[k]);
      return { selectedServices: next, selectedServicesArray: arr, selectedServicesCount: arr.length } as any;
    }),
  resetSelection: () => set({ selectedCategory: null, selectedServices: {}, selectedServicesArray: [], selectedServicesCount: 0 }),

  pendingRole: null,
  setPendingRole: (r) => set({ pendingRole: r }),

  // address
  selectedAddress: null,
  setSelectedAddress: (a) => set({ selectedAddress: a }),

  // derived
  selectedServicesArray: [],
  selectedServicesCount: 0,
}));
