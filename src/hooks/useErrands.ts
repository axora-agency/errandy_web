import {
  ErrandType,
  type ErrandQueryInput,
  type ErrandWithClient,
  type GetErrandsQuery,
  type GetErrandsQueryVariables,
} from "@/gql/graphql";
import { GET_ERRANDS } from "@/graphql";
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
    type = ErrandType.Feed,
    search,
    page = 1,
    limit = 10,
    maxDistanceKm = 20,
    enableSubscriptions = true,
  } = options;

  /**
   * Only query variables belong in local state
   * Apollo query results must NOT be copied into React state
   */
  const [queryInput, setQueryInput] = useState<ErrandQueryInput>({
    type,
    search,
    pagination: { page, limit },
    maxDistanceKm,
  });

  const { data, loading, error, refetch, fetchMore } = useQuery<
    GetErrandsQuery,
    GetErrandsQueryVariables
  >(GET_ERRANDS, {
    variables: { input: queryInput },
    notifyOnNetworkStatusChange: true,
  });

  /**
   * Reactive errands array
   * Updates instantly when cache changes
   */
  const errands: ErrandWithClient[] =
    (data?.getErrands?.data as ErrandWithClient[]) ?? [];

  /**
   * Pagination
   */
  const loadMore = async () => {
    if (!data?.getErrands?.hasNextPage) return;

    await fetchMore({
      variables: {
        input: {
          ...queryInput,
          pagination: {
            page: (queryInput.pagination?.page || 1) + 1,
            limit,
          },
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
  };

  /**
   * Actions
   */
  const refresh = () => refetch();

  const searchErrands = (keyword: string) => {
    setQueryInput({
      type: ErrandType.Search,
      search: keyword,
      pagination: { page: 1, limit },
      maxDistanceKm,
    });
  };

  const changeTab = (newType: ErrandQueryInput["type"]) => {
    setQueryInput({
      type: newType,
      search: newType === "SEARCH" ? queryInput.search : undefined,
      pagination: { page: 1, limit },
      maxDistanceKm,
    });
  };

  const goToPage = (pageNumber: number) => {
    setQueryInput({
      ...queryInput,
      pagination: { page: pageNumber, limit },
    });
  };

  return {
    // Data (fully reactive)
    errands,
    total: data?.getErrands?.total ?? 0,
    page: data?.getErrands?.page ?? 1,
    totalPages: data?.getErrands?.totalPages ?? 1,
    hasNextPage: data?.getErrands?.hasNextPage ?? false,
    hasPreviousPage: data?.getErrands?.hasPreviousPage ?? false,

    // State
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
