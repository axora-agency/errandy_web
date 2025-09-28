import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkerRequiredPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <AlertTriangle className="w-16 h-16 text-orange-500 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Worker Account Required</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        You need a worker account to access this area. Please create a worker account or switch to your worker profile.
      </p>
      <div className="flex gap-3">
        <Button onClick={() => navigate("/onboarding/role")}>
          Create Worker Account
        </Button>
        <Button variant="outline" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default WorkerRequiredPage;
