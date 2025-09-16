// removed

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
  // services mutation
  submitServices: (dto: any) => Promise<any>;
  servicesSubmitting: boolean;
}

export const useServiceSelection = (): UseServiceSelectionReturn => {
  const setUser = useUserStore((s) => s.setUser);
  const {
    selectedCategory,
    selectedServices,
    setSelectedCategory,
    toggleService,
    resetSelection,
    pendingRole,
    setPendingRole,
    selectedServicesArray,
    selectedServicesCount,
  } = useOnBoardingStore();

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

  const [mutateAddServices, { loading: servicesSubmitting }] = useMutation(
    ADD_WORKER_SERVICES,
    {
      onCompleted(data) {
        if (data?.addWorkerServices) {
          try {
            setUser(data.addWorkerServices);
          } catch (e) {
            // ignore
          }
        }
      },
      onError(err) {
        toast.error(err?.message || "Failed to add services");
      },
    }
  );

  const handleCategorySelect = useCallback((category: ServiceCategoryType) => {
    setSelectedCategory(category as any);
  }, [setSelectedCategory]);

  const handleServiceToggle = useCallback(
    (serviceName: string) => toggleService(serviceName),
    [toggleService]
  );

  // resetSelection comes from store

  const submitRole = useCallback(
    async (role?: UserRole) => {
      const roleToSubmit = role ?? pendingRole;
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
    [mutateCreateRole, pendingRole]
  );

  const submitServices = useCallback(
    async (dto: any) => {
      try {
        const resp = await mutateAddServices({ variables: { dto } });
        return resp;
      } catch (e: any) {
        toast.error(e?.message || "Failed to add services");
        throw e;
      }
    },
    [mutateAddServices]
  );

  const isServiceSelected = useCallback(
    (serviceName: string) => {
      return Boolean(selectedServices?.[serviceName]);
    },
    [selectedServices]
  );
  // selectedServicesArray and count come from store

  return {
    selectedCategory: selectedCategory as ServiceCategoryType | null,
    selectedServices,
    selectedServicesArray,
    setSelectedCategory: (c: ServiceCategoryType | null) =>
      setSelectedCategory(c as any),
    handleCategorySelect,
    handleServiceToggle,
    resetSelection,
    isServiceSelected,
    selectedServicesCount,
    // onboarding role helpers
    selectedRole: pendingRole,
    setSelectedRole: (r: UserRole | null) => setPendingRole(r),
    submitRole,
    submitting,
    // services
    submitServices,
    servicesSubmitting,
  };
};
