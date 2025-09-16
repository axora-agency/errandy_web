import { useState, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { CREATE_USER_ROLE } from "@/graphql/mutations/user/create-user-role";
import { useUserStore } from "@/store/userStore";
import type {
  CreateUserRoleMutation,
  CreateUserRoleMutationVariables,
  UserRole,
} from "@/gql/graphql";

export const ServiceCategoryType = {
  CASUAL: "CASUAL",
  PROFESSIONAL: "PROFESSIONAL",
} as const;

export type ServiceCategoryType =
  (typeof ServiceCategoryType)[keyof typeof ServiceCategoryType];

interface SelectedServices {
  [key: string]: boolean;
}

export interface UseServiceSelectionReturn {
  selectedCategory: ServiceCategoryType | null;
  selectedServices: SelectedServices;
  selectedServicesArray: string[];
  setSelectedCategory: (category: ServiceCategoryType | null) => void;
  handleCategorySelect: (category: ServiceCategoryType) => void;
  handleServiceToggle: (serviceName: string) => void;
  resetSelection: () => void;
  isServiceSelected: (serviceName: string) => boolean;
  selectedServicesCount: number;
  // onboarding role helpers
  selectedRole: UserRole | null;
  setSelectedRole: (role: UserRole | null) => void;
  submitRole: (role?: UserRole) => Promise<any>;
  submitting: boolean;
}

export const useServiceSelection = (): UseServiceSelectionReturn => {
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategoryType | null>(null);
  const [selectedServices, setSelectedServices] = useState<SelectedServices>(
    {}
  );
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const setUser = useUserStore((s) => s.setUser);

  const [mutateCreateRole, { loading: submitting }] = useMutation<
    CreateUserRoleMutation,
    CreateUserRoleMutationVariables
  >(CREATE_USER_ROLE, {
    onCompleted(data) {
      if (data?.createUserRole) {
        try {
          setUser(data.createUserRole);
        } catch (e) {
          // ignore store errors
        }
      }
    },
    onError(error) {
      toast.error(error?.message || "Failed to create role");
    },
  });

  const handleCategorySelect = useCallback((category: ServiceCategoryType) => {
    setSelectedCategory(category);
    setSelectedServices({}); // Reset selected services when category changes
  }, []);

  const handleServiceToggle = useCallback((serviceName: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
  }, []);

  const resetSelection = useCallback(() => {
    setSelectedCategory(null);
    setSelectedServices({});
  }, []);

  const submitRole = useCallback(
    async (role?: UserRole) => {
      const roleToSubmit = role ?? selectedRole;
      if (!roleToSubmit) return Promise.reject(new Error("No role selected"));
      try {
        const resp = await mutateCreateRole({
          variables: { role: roleToSubmit },
        });
        return resp;
      } catch (e: any) {
        toast.error(e?.message || "Failed to create role");
        throw e;
      }
    },
    [mutateCreateRole, selectedRole]
  );

  const isServiceSelected = useCallback(
    (serviceName: string) => {
      return Boolean(selectedServices[serviceName]);
    },
    [selectedServices]
  );

  const selectedServicesArray = Object.keys(selectedServices).filter(
    (service) => selectedServices[service]
  );
  const selectedServicesCount = selectedServicesArray.length;

  return {
    selectedCategory,
    selectedServices,
    selectedServicesArray,
    setSelectedCategory,
    handleCategorySelect,
    handleServiceToggle,
    resetSelection,
    isServiceSelected,
    selectedServicesCount,
    // onboarding role helpers
    selectedRole,
    setSelectedRole,
    submitRole,
    submitting,
  };
};
