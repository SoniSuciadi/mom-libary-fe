import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

import useAxiosWithAuth from "../../use-axios-with-auth";
import { AxiosErrorResponse } from "../types";
import { AllMutationKeys, allMutations } from "@/data-service/mutations";
import { constructUrl } from "@/utils/constructUrl";

export interface UseMuationApiRequestProps<T> {
  key: AllMutationKeys;
  data?: unknown;
  config?: {
    params?: { [key: string]: string };
    query?: { [key: string]: string };
  };
  options?: UseMutationOptions<
    { data: T; message: string },
    AxiosErrorResponse,
    unknown
  > & {
    query?: AxiosRequestConfig["params"];
  };
  dialogError?: boolean;
}

function useMutationApiRequest<T = unknown>({
  key,
  data = {},
  options = {},
  config,
  dialogError = true,
}: UseMuationApiRequestProps<T>) {
  const queryClient = useQueryClient();
  const { method, refetchQueries, url } =
    allMutations[key as keyof typeof allMutations];

  const replacedUrl = constructUrl(url, {
    ...config,
    params: { ...config?.params },
  });

  const axiosWithAuth = useAxiosWithAuth();

  const fetchData = async (
    inputData?: unknown
  ): Promise<{ data: T; message: string }> => {
    const requestData = inputData || data;

    const headers: Record<string, string> = {};
    if (requestData instanceof FormData) {
    } else {
      headers["Content-Type"] = "application/json";
    }

    const response = await axiosWithAuth({
      method,
      url: replacedUrl,
      data: requestData,
      params: options.query,
      headers,
    });
    if (response && response.data) {
      return response.data;
    }

    throw new Error("Response data is missing");
  };
  const invalidQueries = (refetchQueries: string[]) => {
    if (!refetchQueries || refetchQueries.length === 0) {
      return;
    }

    const regexPattern = refetchQueries
      .map((query) => `\\b${query}\\b`)
      .join("|");
    const regex = new RegExp(regexPattern, "i");

    queryClient.refetchQueries({
      predicate: (query) =>
        query.queryKey.some(
          (key) => typeof key === "string" && regex.test(key)
        ),
    });
  };

  const mutateOption: typeof options = {
    retry: 1,
    onError: (error: AxiosErrorResponse) => {
      if (dialogError) {
      }
    },
    onSuccess: () => {
      invalidQueries(refetchQueries || []);
    },
    ...options,
  };

  const mutate = useMutation({
    mutationFn: fetchData,
    ...mutateOption,
  });

  return mutate;
}

export default useMutationApiRequest;
