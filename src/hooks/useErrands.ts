import type {
  ErrandQueryInput,
  ErrandSubscriptionPayload,
  ErrandWithClient,
  GetErrandsQuery,
  GetErrandsQueryVariables,
} from "@/gql/graphql";
import { ERRAND_CREATED_SUBSCRIPTION, GET_ERRANDS } from "@/graphql";
import { useQuery, useSubscription } from "@apollo/client";
import { useState } from "react";

export interface UseErrandsOptions {
  type?: ErrandQueryInput["type"];
  search?: string;
  page?: number;
  limit?: number;
  maxDistanceKm?: number;
  enableSubscriptions?: boolean;
}

export function useErrands(options: UseErrandsOptions = {}) {
  const {
    type = "feed",
    search,
    page = 1,
    limit = 20,
    maxDistanceKm = 20,
    enableSubscriptions = true,
  } = options;

  const [localErrands, setLocalErrands] = useState<ErrandWithClient[]>([]);

  const { data, loading, error, refetch, fetchMore } = useQuery<
    GetErrandsQuery,
    GetErrandsQueryVariables
  >(GET_ERRANDS, {
    variables: {
      input: {
        type,
        search,
        pagination: { page, limit },
        maxDistanceKm,
      },
    },
    onCompleted: (data) => {
      if (data?.getErrands?.data) {
        setLocalErrands(data.getErrands.data as ErrandWithClient[]);
      }
    },
  });

  // Subscribe to new errands if enabled
  useSubscription<{
    errandCreated: ErrandSubscriptionPayload;
  }>(ERRAND_CREATED_SUBSCRIPTION, {
    skip: !enableSubscriptions,
    onData: ({ data }) => {
      if (data?.data?.errandCreated) {
        const newErrand = data.data.errandCreated.errand;
        // setLocalErrands((prev) => [newErrand, ...prev]);
      }
    },
  });

  const loadMore = async () => {
    if (!data?.getErrands.hasNextPage) return;

    try {
      await fetchMore({
        variables: {
          input: {
            type,
            search,
            pagination: { page: page + 1, limit },
            maxDistanceKm,
          },
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            getErrands: {
              ...fetchMoreResult.getErrands,
              data: [
                ...prev.getErrands.data,
                ...fetchMoreResult.getErrands.data,
              ],
            },
          };
        },
      });
    } catch (error) {
      console.error("Error loading more errands:", error);
    }
  };

  const refresh = () => {
    refetch();
  };

  const searchErrands = (keyword: string) => {
    refetch({
      input: {
        type: "search",
        search: keyword,
        pagination: { page: 1, limit },
        maxDistanceKm,
      },
    });
  };

  const changeTab = (newType: ErrandQueryInput["type"]) => {
    refetch({
      input: {
        type: newType,
        search: newType === "search" ? search : undefined,
        pagination: { page: 1, limit },
        maxDistanceKm,
      },
    });
  };

  return {
    // Data
    errands: localErrands,
    total: data?.getErrands?.total || 0,
    page: data?.getErrands?.page || 1,
    totalPages: data?.getErrands?.totalPages || 1,
    hasNextPage: data?.getErrands?.hasNextPage || false,
    hasPreviousPage: data?.getErrands?.hasPreviousPage || false,

    // States
    loading,
    error,

    // Actions
    loadMore,
    refresh,
    searchErrands,
    changeTab,
    refetch,
  };
}
