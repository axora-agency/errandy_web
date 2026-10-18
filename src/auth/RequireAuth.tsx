import { ScreenLoader } from "@/components";
import { MY_PARTY_PROFILE } from "@/graphql";
import type { MyPartyProfileQuery } from "@/gql/graphql";
import { auth } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";
import { useQuery } from "@apollo/client";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const RequireAuth = () => {
  const { data: session, isPending } = auth.useSession();
  const location = useLocation();
  const { setUser } = useUserStore();

  const { data, loading, error } = useQuery<MyPartyProfileQuery>(MY_PARTY_PROFILE, {
    skip: !Boolean(session?.session && session.user?.id),
  });

  useEffect(() => {
    if (error) {
      console.error("Failed to load party profile:", error);
    }
  }, [error]);

  useEffect(() => {
    if (session?.user) {
      const party = data?.myPartyProfile;
      setUser({
        id: session.user.id,
        partyId: party?.partyId,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        activeRole: party?.hasProviderRole ? "PROVIDER" : "CLIENT",
        hasClientRole: party?.hasClientRole ?? true,
        hasProviderRole: party?.hasProviderRole ?? false,
        providerTier: party?.providerTier,
        skills: party?.skills,
        bio: party?.bio,
        marketId: party?.marketId,
      });
    }
  }, [session?.user, data?.myPartyProfile, setUser]);

  if (isPending || loading) {
    return <ScreenLoader />;
  }

  return session?.session ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export { RequireAuth };
