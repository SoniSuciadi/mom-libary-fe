import { useCallback, useEffect } from "react";

import {
  DefinedInitialDataInfiniteOptions,
  InfiniteData,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

import { AxiosErrorResponse } from "../types";

import { InfiniteList } from "./types";
import { allQueries, AllQueriesKeys } from "@/data-service/queries";
import useAxiosWithAuth from "@/hooks/use-axios-with-auth";
import { constructUrl } from "@/utils/constructUrl";
import { Data } from "@/types";

export interface useInfiniteApiRequest<T> {
  key: AllQueriesKeys;
  config?: {
    params?: { [key: string]: string };
    query?: { [key: string]: unknown };
  };
  options?: Partial<UseInfiniteQueryOptions<T, AxiosErrorResponse>> &
    Pick<AxiosRequestConfig, "params">;
}

export function useInfiniteApiRequest<T>({
  key,
  options,
  config,
}: useInfiniteApiRequest<T>) {
  const url = allQueries[key as keyof typeof allQueries];

  const queryClient = useQueryClient();
  const replacedUrl = constructUrl(url, config);

  const axiosWithAuth = useAxiosWithAuth();

  const fetchData: QueryFunction<
    InfiniteData<Data<T>>,
    QueryKey,
    unknown
  > = useCallback(
    async ({ pageParam = 1 }: { pageParam: unknown }) => {
      const page =
        typeof pageParam === "object" &&
        pageParam !== null &&
        "page" in pageParam
          ? (pageParam as { page: number }).page
          : (pageParam as number);

      const response = await axiosWithAuth({
        method: "GET",
        url: replacedUrl,
        params: {
          ...config?.query,
          page,
        },
      });

      if (!response) {
        return;
      }
      if (response.data.message) {
        return response.data.data;
      }
      return response.data;
    },
    [replacedUrl, axiosWithAuth, config?.query]
  );

  const queryOptions = {
    // initialData: {
    //   pages: [],
    //   pageParams: [1],
    // },
    initialPageParam: 1,
    queryKey: [key, url, config],
    queryFn: fetchData,
    retry: 1,
    getNextPageParam: (lastPage: Data<T> & InfiniteList<T>) => {
      const _lastpage = lastPage;
      if (_lastpage) {
        if (_lastpage.next) {
          return { next: _lastpage.next };
        } else if (_lastpage.page * _lastpage.perPage < _lastpage.totalItems) {
          return { page: _lastpage.page + 1 };
        } else {
          return undefined;
        }
      }
    },
    ...options,
  };
  const appendToFirstPage = useCallback(
    (newItems: InfiniteData<Data<T>>) => {
      queryClient.setQueryData<InfiniteData<Data<T>>>(
        [key, url, config],
        (oldData) => {
          if (!oldData || oldData.pages.length === 0) {
            return {
              pages: newItems.pages,
              pageParams: newItems.pageParams,
            };
          }

          const newPages = [...oldData.pages];

          const firstPage = { ...newPages[0] };
          if (
            firstPage.items && // No need for ?. here
            newItems.pages[0]?.items && // Optional chaining here is okay because newItems.pages[0] might be undefined
            firstPage.totalItems !== undefined &&
            newItems.pages[0].items.length
          ) {
            firstPage.items = [...newItems.pages[0].items, ...firstPage.items];

            if (firstPage.totalItems !== undefined) {
              firstPage.totalItems += newItems.pages[0].items.length;
            }
          }

          newPages[0] = firstPage;

          return {
            ...oldData,
            pages: newPages,
            pageParams: newItems.pageParams,
          };
        }
      );
    },
    [queryClient, key, url, config]
  );

  const queryFetch = useInfiniteQuery<Data<T>, AxiosErrorResponse>(
    queryOptions as DefinedInitialDataInfiniteOptions<
      Data<T>,
      AxiosErrorResponse,
      InfiniteData<Data<T>>,
      QueryKey,
      unknown
    >
  );

  useEffect(() => {
    if (queryFetch.isError && queryFetch.error) {
      // SnackBarResultController.open({
      //   content: queryFetch.error.message,
      //   variant: "error",
      // });
    }
  }, [queryFetch.isError, queryFetch.error, queryClient]);

  return { ...queryFetch, appendToFirstPage };
}

export default useInfiniteApiRequest;
