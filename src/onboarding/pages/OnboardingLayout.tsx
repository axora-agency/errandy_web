import { useOnBoardingStore } from "@/store/onBoardingStore";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@apollo/client";
import { useUserStore } from "@/store/userStore";
import { toast } from "sonner";
import {
  type AddProviderRoleMutation,
  type AddProviderRoleMutationVariables,
  type UpdateProviderRoleMutation,
  type UpdateProviderRoleMutationVariables,
  type CreateAddressMutation,
  type CreateAddressMutationVariables,
} from "@/gql/graphql";
import CustomLogo from "@/components/custom/Logo";
import { auth } from "@/lib/auth";
import {
  ADD_PROVIDER_ROLE,
  UPDATE_PROVIDER_ROLE,
  CREATE_ADDRESS,
} from "@/graphql";

export default function OnboardingLayout() {
  const { user, updateUser } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedServicesArray, pendingRole, selectedAddress } = useOnBoardingStore();

  const [mutateAddProviderRole, { loading: roleSubmitting }] = useMutation<
    AddProviderRoleMutation,
    AddProviderRoleMutationVariables
  >(ADD_PROVIDER_ROLE, {
    onCompleted(data) {
      if (data?.addProviderRole) {
        updateUser({
          hasProviderRole: true,
          activeRole: "PROVIDER",
        });
      }
    },
    onError(err) {
      console.error("Add provider role error:", err);
      toast.error(err.message || "Failed to set provider role");
    },
  });

  const [mutateUpdateServices, { loading: servicesSubmitting }] = useMutation<
    UpdateProviderRoleMutation,
    UpdateProviderRoleMutationVariables
  >(UPDATE_PROVIDER_ROLE, {
    onCompleted(data) {
      if (data?.updateProviderRole) {
        updateUser({
          skills: data.updateProviderRole.skills,
        });
      }
    },
    onError(err) {
      console.error("Update services error:", err);
      toast.error(err.message || "Failed to save skills");
    },
  });

  const [mutateCreateAddress, { loading: addressSubmitting }] = useMutation<
    CreateAddressMutation,
    CreateAddressMutationVariables
  >(CREATE_ADDRESS, {
    onCompleted() {
      toast.success("Address saved");
    },
    onError(err) {
      console.error("Create address error:", err);
      toast.error(err.message || "Failed to save address");
    },
  });

  const role = user?.activeRole;

  const steps = useMemo(() => {
    if (role === "CLIENT" || pendingRole === "CLIENT") return ["/onboarding/role"];

    return [
      "/onboarding/role",
      "/onboarding/services",
      "/onboarding/address",
      "/onboarding/completed",
    ];
  }, [role, pendingRole]);

  const currentStep = (() => {
    const locIndex = steps.findIndex((s) => location.pathname.includes(s));
    if (locIndex >= 0) return locIndex;
    return 0;
  })();

  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  const goNext = async () => {
    if (currentStep < steps.length - 1) {
      const nextPath = steps[currentStep + 1];

      // Step 1: Role Selection
      if (steps[currentStep] === "/onboarding/role") {
        if (!pendingRole) {
          toast.error("Please select a role to continue");
          return;
        }

        if (pendingRole === "CLIENT") {
          updateUser({ activeRole: "CLIENT" });
          navigate("/client/dashboard");
          return;
        }

        // Provider/Worker selected
        if (!user?.hasProviderRole && user?.partyId) {
          try {
            await mutateAddProviderRole({
              variables: { partyId: user.partyId },
            });
          } catch {
            return;
          }
        }
        navigate(nextPath);
        return;
      }

      // Step 2: Services Selection
      if (steps[currentStep] === "/onboarding/services") {
        if (!selectedServicesArray || selectedServicesArray.length === 0) {
          toast.error("Please select at least one service to continue");
          return;
        }

        if (servicesSubmitting) return;

        if (user?.partyId) {
          try {
            await mutateUpdateServices({
              variables: {
                partyId: user.partyId,
                input: {
                  skills: selectedServicesArray,
                  addToSkills: true,
                },
              },
            });
          } catch {
            return;
          }
        }
        navigate(nextPath);
        return;
      }

      // Step 3: Address Selection
      if (steps[currentStep] === "/onboarding/address") {
        if (!selectedAddress) {
          toast.error("Please select an address to continue");
          return;
        }

        if (addressSubmitting) return;

        try {
          await mutateCreateAddress({
            variables: {
              input: {
                label: selectedAddress.label || "Primary",
                street: selectedAddress.address,
                city: "Lagos",
                state: "Lagos",
                country: "Nigeria",
                coordinates: {
                  latitude: selectedAddress.latitude || 6.5244,
                  longitude: selectedAddress.longitude || 3.3792,
                },
              },
            },
          });
        } catch {
          return;
        }

        navigate(nextPath);
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

  const handleLogout = () => {
    auth.signOut().finally(() => {
      navigate("/auth/login");
    });
  };

  const isSubmitting = roleSubmitting || servicesSubmitting || addressSubmitting;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="w-full fixed top-0 left-0 z-40 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
          <CustomLogo size="lg" />
          <div className="flex items-center gap-3">
            {user && (
              <span className="text-sm text-muted-foreground">
                Hi, {user.name}
              </span>
            )}
            <Button
              variant={"destructive"}
              onClick={handleLogout}
              className="cursor-pointer"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Scrollable main area */}
      <main className="flex-1 overflow-auto pt-20 pb-36">
        <div className="max-w-5xl mx-auto px-5">
          <Outlet />
        </div>
      </main>

      {/* Fixed Footer / Progress */}
      <footer className="w-full fixed bottom-0 left-0 z-40 bg-background/90 backdrop-blur border-t border-border">
        <div className="max-w-5xl mx-auto p-4">
          <div className="w-full h-1 bg-muted rounded mb-4">
            <div
              className="h-1 bg-primary rounded transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex justify-between">
            <Button
              onClick={goPrev}
              variant={"secondary"}
              disabled={currentStep === 0 || isSubmitting}
            >
              Prev
            </Button>
            <Button
              onClick={goNext}
              disabled={currentStep === steps.length - 1 || isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Next"}
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
