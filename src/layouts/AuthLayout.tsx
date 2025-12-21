import { AuthPlaceholder } from "@/assets";
import CustomLogo from "@/components/custom/Logo";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <CustomLogo size="xl" />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={AuthPlaceholder}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover object-top  "
        />
      </div>
    </div>
  );
};

export default AuthLayout;
