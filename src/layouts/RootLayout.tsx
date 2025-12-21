import { useEffect } from "react";
import { Outlet, useMatches } from "react-router-dom";
import { PathnameProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";

interface RouteHandle {
  title?: string;
  breadcrumb?: string;
  description?: string;
  requiresAuth?: boolean;
  requiresOnboarding?: boolean;
  requiresRole?: "CLIENT" | "WORKER";
  public?: boolean;
  statusCode?: number;
}

const RootLayout = () => {
  const matches = useMatches();

  useEffect(() => {
    // Find the last route with a title in handle
    const currentRoute = [...matches]
      .reverse()
      .find((match) => (match.handle as RouteHandle)?.title);

    const handle = currentRoute?.handle as RouteHandle;
    if (handle?.title) {
      document.title = `${handle.title} - Errandy`;
    } else {
      document.title = "Errandy";
    }
  }, [matches]);

  return (
    <PathnameProvider>
      <Outlet />
      <Toaster />
    </PathnameProvider>
  );
};

export default RootLayout;
