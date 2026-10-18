import { useState } from "react";
import { User, Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import type { UserRole } from "@/store/userStore";
import { useOnBoardingStore } from "@/store/onBoardingStore";

export default function Roles() {
  const { pendingRole, setPendingRole } = useOnBoardingStore();
  const [selected, setSelected] = useState<UserRole | null>(pendingRole || "CLIENT");

  const handleSelect = (role: UserRole) => {
    setSelected(role);
    setPendingRole(role);
  };

  const baseClasses =
    "relative rounded-2xl border bg-white/50 backdrop-blur p-6 shadow-md overflow-hidden cursor-pointer transition-all";
  const selectedClasses = "ring-2 ring-offset-2 ring-blue-500 scale-[1.02]";

  return (
    <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Client Card */}
      <motion.article
        layout
        whileHover={{ scale: 1.02 }}
        onClick={() => handleSelect("CLIENT")}
        className={`${baseClasses} ${
          selected === "CLIENT" ? selectedClasses : ""
        }`}
        aria-label="Client account card"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center shadow-lg">
            <User className="w-7 h-7 text-white drop-shadow-sm" />
          </div>

          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              I want to hire (Client)
              {selected === "CLIENT" && (
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
              )}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Post jobs, manage applicants and hire the best workers for your
              projects. Ideal if you want to find service providers quickly and
              securely.
            </p>
          </div>
        </div>
      </motion.article>

      {/* Worker Card */}
      <motion.article
        layout
        whileHover={{ scale: 1.02 }}
        onClick={() => handleSelect("PROVIDER")}
        className={`${baseClasses} ${
          selected === "PROVIDER" ? selectedClasses : ""
        }`}
        aria-label="Worker account card"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-lg">
            <Briefcase className="w-7 h-7 text-white drop-shadow-sm" />
          </div>

          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              I want to work (Worker)
              {selected === "PROVIDER" && (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              )}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Create your worker profile, showcase your skills and apply to
              jobs. Best if you want to offer services and build a client base.
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
