import { ScreenLoader } from "@/components";
import type { UserQuery, UserQueryVariables, User } from "@/gql/graphql";
import { GET_USER } from "@/graphql";
import { auth } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";
import { extractGraphQLErrors } from "@/utils";
import { useQuery } from "@apollo/client";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";

const RequireAuth = () => {
  const { data: session, isPending } = auth.useSession();
  const location = useLocation();
  const { setUser } = useUserStore();

  const { data, loading } = useQuery<UserQuery, UserQueryVariables>(
    GET_USER,
    {
      skip: !Boolean(session?.session && session.user?.id),
      onError: (error) => {
        const errors = extractGraphQLErrors(error);
        console.log(errors);
        toast.error(errors[0]?.message);
      },
    }
  );

  useEffect(() => {
    if (!loading && data?.user) {
      setUser(data.user as User);
    }
  }, [loading, data?.user, setUser]);

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
