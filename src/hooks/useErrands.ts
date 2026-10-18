import { useQuery } from "@apollo/client";
import { OPEN_ERRANDS } from "@/graphql";
import type { OpenErrandsQuery, OpenErrandsQueryVariables } from "@/gql/graphql";
import { useUserStore } from "@/store/userStore";

export interface ErrandSummaryItem {
  id: string;
  title: string;
  categoryId: string;
  createdAt: string;
  distanceMeters: number;
  budget: {
    amountMinorUnits: number;
    currency: string;
  };
}

export interface UseErrandsOptions {
  search?: string;
  categoryId?: string;
  radiusMeters?: number;
  type?: string;
  enableSubscriptions?: boolean;
}

export function useErrands(options: UseErrandsOptions = {}) {
  const { user } = useUserStore();

  const { data, loading, error, refetch } = useQuery<
    OpenErrandsQuery,
    OpenErrandsQueryVariables
  >(OPEN_ERRANDS, {
    variables: {
      input: {
        requesterPartyId: user?.partyId || "anonymous",
        latitude: 6.5244,
        longitude: 3.3792,
        radiusMeters: options.radiusMeters || 50000,
        categoryId: options.categoryId,
        limit: 20,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const errands: ErrandSummaryItem[] = data?.openErrands?.items || [];

  return {
    errands,
    total: errands.length,
    page: 1,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    loading,
    error,
    refresh: () => refetch(),
    searchErrands: (_keyword?: string) => refetch(),
    changeTab: (_tab?: string) => refetch(),
    goToPage: (_page?: number) => {},
    loadMore: async () => {},
    refetch,
  };
}
