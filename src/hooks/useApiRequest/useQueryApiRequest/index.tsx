import { useEffect } from "react";

import {
  QueryKey,
  UseQueryOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import useAxiosWithAuth from "../../use-axios-with-auth";
import { AxiosErrorResponse } from "../types";
import { allQueries, AllQueriesKeys } from "@/data-service/queries";
import { constructUrl } from "@/utils/constructUrl";

export interface UseQueryApiRequestProps<T> {
  key: AllQueriesKeys;
  config?: {
    params?: { [key: string]: string };
    query?: { [key: string]: unknown };
  };
  options?: Omit<UseQueryOptions<T, AxiosErrorResponse>, "queryKey">;
}
function useQueryApiRequest<T = unknown>({
  key,
  options,
  config,
}: UseQueryApiRequestProps<T>) {
  const url = allQueries[key];
  const queryClient = useQueryClient();
  const replacedUrl = constructUrl(url, {
    ...config,
    params: { ...config?.params },
  });

  const axiosFetch = useAxiosWithAuth();
  const fetchData = async () => {
    const response = await axiosFetch({
      method: "GET",
      url: replacedUrl,
      params: { ...config?.query },
    });
    if (!response) {
      return;
    }
    if (response.data.message) {
      return response.data.data;
    }
    return response.data;
  };

  const queryOptions: Partial<
    Omit<
      UseQueryOptions<T, AxiosErrorResponse, T, QueryKey>,
      "queryKey" | "queryFn"
    >
  > = {
    retry: 1,
    ...options,
  };

  const queryFetch = useQuery<T, AxiosErrorResponse>({
    queryKey: [key, url, config],
    queryFn: fetchData,
    ...queryOptions,
  });
  useEffect(() => {
    if (queryFetch.isError && queryFetch.error.response?.status !== 403) {
      queryClient.clear();
    }
  }, [queryFetch, queryClient]);

  return queryFetch;
}

export default useQueryApiRequest;
