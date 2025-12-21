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
    type: initialType = "FEED",
    search: initialSearch,
    page: initialPage = 1,
    limit = 10,
    maxDistanceKm = 20,
    enableSubscriptions = true,
  } = options;

  // Internal state to manage current query parameters
  const [queryInput, setQueryInput] = useState<ErrandQueryInput>(() => {
    const input: ErrandQueryInput = {
      pagination: { page: initialPage, limit },
      maxDistanceKm,
    };

    if (initialType) {
      input.type = initialType;
    }

    if (initialSearch) {
      input.search = initialSearch;
    }

    return input;
  });

  const [localErrands, setLocalErrands] = useState<ErrandWithClient[]>([]);

  const { data, loading, error, refetch, fetchMore } = useQuery<
    GetErrandsQuery,
    GetErrandsQueryVariables
  >(GET_ERRANDS, {
    variables: {
      input: queryInput,
    },
    notifyOnNetworkStatusChange: true,
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
            ...queryInput,
            pagination: { page: (queryInput.pagination?.page || 1) + 1, limit },
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

  const searchErrands = async (keyword: string) => {
    const newInput: ErrandQueryInput = {
      type: "SEARCH",
      search: keyword,
      pagination: { page: 1, limit },
      maxDistanceKm,
    };

    setQueryInput(newInput);
  };

  const changeTab = async (newType: ErrandQueryInput["type"]) => {
    const newInput: ErrandQueryInput = {
      pagination: { page: 1, limit },
      maxDistanceKm,
    };

    if (newType) {
      newInput.type = newType;
    }

    if (newType === "SEARCH" && queryInput.search) {
      newInput.search = queryInput.search;
    }

    setQueryInput(newInput);
  };

  const goToPage = async (pageNumber: number) => {
    const newInput: ErrandQueryInput = {
      ...queryInput,
      pagination: { page: pageNumber, limit },
    };

    setQueryInput(newInput);
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
    goToPage,
    refetch,
  };
}
