import { useUserStore } from "@/store/userStore";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function CompletedPage() {
  const user = useUserStore((s) => s.user);
  const navigate = useNavigate();
  const role = user?.activeRole;
  const handleHome = () => navigate("/");

  return (
    <div className="py-16 flex flex-col items-center justify-center">
      <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
      <h2 className="text-3xl font-bold mb-2">
        {role === "CLIENT" ? "All set, let's hire!" : "You're all set!"}
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
        {role === "CLIENT"
          ? "Your account is ready. Start posting jobs and find the best workers for your projects."
          : "Your profile is set up. Browse available jobs and apply to start working."}
      </p>
      <Button onClick={handleHome}>Go to Home</Button>
    </div>
  );
}
