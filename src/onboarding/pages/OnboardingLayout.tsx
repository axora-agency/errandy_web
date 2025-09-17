// ...existing imports...
import { useOnBoardingStore } from "@/store/onBoardingStore";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@apollo/client";
import { CREATE_USER_ROLE } from "@/graphql/mutations/user/create-user-role";
import { ADD_WORKER_SERVICES } from "@/graphql/mutations/user/add-worker-services";
import { ADD_USER_ADDRESS } from "@/graphql/mutations/user/add-user-address";
import { useUserStore } from "@/store/userStore";
import { toast } from "sonner";
import type {
  SaveUserAddressInput,
  SaveUserAddressMutation,
  SaveUserAddressMutationVariables,
} from "@/gql/graphql";

export default function OnboardingLayout() {
  const { user } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedServicesArray } = useOnBoardingStore();
  const { pendingRole } = useOnBoardingStore();
  const { selectedAddress } = useOnBoardingStore();
  const setUser = useUserStore((s) => s.setUser);

  const [mutateCreateRole] = useMutation(CREATE_USER_ROLE, {
    onCompleted(data) {
      if (data?.createUserRole) setUser(data.createUserRole);
    },
    onError() {},
  });

  const [mutateAddServices, { loading: servicesSubmitting }] = useMutation(
    ADD_WORKER_SERVICES,
    {
      onCompleted(data) {
        if (data?.addWorkerServices) setUser(data.addWorkerServices);
      },
    }
  );

  const [mutateAddAddress, { loading: addressSubmitting }] = useMutation<
    SaveUserAddressMutation,
    SaveUserAddressMutationVariables
  >(ADD_USER_ADDRESS, {
    onCompleted(data) {
      if (data?.saveUserAddress) setUser(data.saveUserAddress);
    },
    onError(err) {
      console.error("add address error", err);
      toast.error("Failed to save address");
    },
  });

  const submitRole = (role: any) => mutateCreateRole({ variables: { role } });
  const submitServices = (dto: any) =>
    mutateAddServices({ variables: { dto } });

  // 👇 Define your dynamic steps based on role + onboarding progress
  const role = user?.activeRole;
  const progress = user?.onboardingProgress;

  const steps = useMemo(() => {
    if (role === "CLIENT") return ["/onboarding/role"];

    // Worker flow: always show full step sequence but we'll derive current index from progress
    return [
      "/onboarding/role",
      "/onboarding/services",
      "/onboarding/address",
      "/onboarding/completed",
    ];
  }, [role]);

  // Find current step index
  // Determine current step index either from location or from onboardingProgress
  const currentStep = (() => {
    // Prefer location if user is on an onboarding route
    const locIndex = steps.findIndex((s) => location.pathname.includes(s));
    if (locIndex >= 0) return locIndex;

    // Map onboardingProgress to step index
    if (role === "WORKER") {
      switch (progress) {
        case "NONE":
          return 0;
        case "ROLE_SELECTED":
          return 1; // treat role selected as landed on services step
        case "SERVICES_SELECTED":
        case "ADDRESS_ADDED":
          return 1; // services
        case "COMPLETED":
          return steps.length - 1;
        default:
          return 0;
      }
    }

    return 0;
  })();

  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      // If we're on the first step (role selection) and user is a worker flow,
      // submit the selected role before navigating.
      const nextPath = steps[currentStep + 1];
      if (steps[currentStep] === "/onboarding/role") {
        if (!pendingRole) {
          // nothing selected, don't navigate forward
          toast.error("Please select a role to continue");
          return;
        }
        submitRole(pendingRole)
          .then((data) => {
            if (data.data) {
              navigate(nextPath);
            }
          })
          .catch((err) => {
            // submitRole already shows a toast, but ensure we don't navigate
            console.error("submitRole error", err);
          });
        return;
      }

      // If we're on services step, submit selected services before navigating
      if (steps[currentStep] === "/onboarding/services") {
        if (!selectedServicesArray || selectedServicesArray.length === 0) {
          toast.error("Please select at least one service to continue");
          return;
        }

        // Prevent double submission
        if (servicesSubmitting) return;

        submitServices({ serviceIds: selectedServicesArray })
          .then((res) => {
            if (res.data) navigate(nextPath);
          })
          .catch((err) => {
            console.error("submitServices error", err);
          });
        return;
      }

      if (steps[currentStep] === "/onboarding/address") {
        if (!selectedAddress) {
          toast.error("Please select an address to continue");
          return;
        }

        if (addressSubmitting) return;

        const dto: SaveUserAddressInput = {
          label: selectedAddress.label || "",
          address: selectedAddress.address,
          latitude: selectedAddress.latitude as number,
          longitude: selectedAddress.longitude as number,
        };

        mutateAddAddress({ variables: { dto } })
          .then((res) => {
            if (res.data) navigate(nextPath);
          })
          .catch((err) => {
            console.error("mutateAddAddress error", err);
          });

        return;
      }
      navigate(nextPath);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      navigate(steps[currentStep - 1]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="w-full fixed top-0 left-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
          <div className="font-bold text-lg">MyApp</div>
          <div className="flex items-center gap-3">
            {user && (
              <span className="text-sm text-gray-600">Hi, {user.name}</span>
            )}
            <Button variant={"destructive"}>Logout</Button>
          </div>
        </div>
      </header>

      {/* Scrollable main area (leave space for header and footer) */}
      <main className="flex-1 overflow-auto pt-20 pb-36">
        <div className="max-w-5xl mx-auto px-5">
          <Outlet />
        </div>
      </main>

      {/* Fixed Footer / Progress */}
      <footer className="w-full fixed bottom-0 left-0 z-40 bg-white/90 border-t">
        <div className="max-w-5xl mx-auto p-4">
          <div className="w-full h-1 bg-gray-200 rounded mb-4">
            <div
              className="h-1 bg-primary rounded transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex justify-between">
            <Button
              onClick={goPrev}
              variant={"secondary"}
              disabled={currentStep === 0}
            >
              Prev
            </Button>
            <Button
              onClick={goNext}
              disabled={currentStep === steps.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
