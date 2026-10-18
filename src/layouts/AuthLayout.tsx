import { AuthPlaceholder } from "@/assets";
import CustomLogo from "@/components/custom/Logo";
import { ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="grid h-svh overflow-hidden lg:grid-cols-2">
      <div className="auth-form-scroll min-h-0 overflow-y-auto">
        <div className="flex min-h-full flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link to="/" className="flex items-center gap-2 font-medium">
              <CustomLogo size="lg" />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-0 overflow-hidden bg-slate-900 p-10 lg:flex lg:flex-col lg:justify-end">
        <img
          src={AuthPlaceholder}
          alt="Errandy Marketplace"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

        <div className="relative z-10 max-w-lg space-y-4 rounded-2xl border border-white/15 bg-slate-900/65 p-6 text-white backdrop-blur-md shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 border border-teal-400/30 px-3 py-1 text-xs font-semibold text-teal-200">
            <Sparkles className="h-3.5 w-3.5" />
            Trusted Local Service Marketplace
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Get errands done faster with verified professionals you trust.
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Post tasks in seconds, build your personal Trusted Circle, and pay with confidence through dual-confirmation escrow protection.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>100% Escrow Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Tier-Verified Providers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
