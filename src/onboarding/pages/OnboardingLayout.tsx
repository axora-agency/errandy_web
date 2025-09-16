import { useUserStore } from "@/store/userStore";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useServiceSelection } from "@/hooks";

export default function OnboardingLayout() {
  const { user } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { submitRole } = useServiceSelection();

  // 👇 Define your dynamic steps
  const role = user?.activeRole;
  const steps = useMemo(() => {
    if (role === "CLIENT") {
      return ["/onboarding/role"];
    }
    return [
      "/onboarding/role",
      "/onboarding/services",
      "/onboarding/skills",
      "/onboarding/summary",
    ]; // 4 steps total
  }, [role]);

  // Find current step index
  const currentStep = steps.findIndex((s) => location.pathname.includes(s));
  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      // If we're on the first step (role selection) and user is a worker flow,
      // submit the selected role before navigating.
      const nextPath = steps[currentStep + 1];
      if (steps[currentStep] === "/onboarding/role") {
        // call submitRole; navigate after it resolves (ignore errors and still navigate)
        submitRole()
          ?.then(() => navigate(nextPath))
          .catch(() => navigate(nextPath));
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
    <div className="p-5 flex flex-col min-h-screen">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between border-b pb-3 mb-5">
        <div className="font-bold text-lg">MyApp</div>
        <div className="flex items-center gap-3">
          {user && (
            <span className="text-sm text-gray-600">Hi, {user.name}</span>
          )}
          <Button
            // onClick={logout}
            variant={"destructive"}
          >
            Logout
          </Button>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Bottom Progress + Navigation */}
      <div className="mt-6 pt-4">
        {/* Single line progress bar */}
        <div className="w-full h-1 bg-gray-200 rounded mb-4">
          <div
            className="h-1 bg-primary rounded transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Prev / Next buttons */}
        <div className="flex justify-between">
          <Button
            onClick={goPrev}
            variant={"secondary"}
            disabled={currentStep === 0}
          >
            Prev
          </Button>
          <Button onClick={goNext} disabled={currentStep === steps.length - 1}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
