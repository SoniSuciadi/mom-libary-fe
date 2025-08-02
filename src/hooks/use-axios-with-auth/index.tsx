import { useCallback } from "react";

import { AxiosError, AxiosRequestConfig } from "axios";

import { ResponsePayload } from "./types";
import { axiosInstance } from "@/utils/axiosWithAuth";
import { SuccessResponse } from "@/types";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
function useAxiosWithAuth<T = any>() {
  const axiosFetch = useCallback(async (config: AxiosRequestConfig) => {
    if (!axiosInstance.defaults.baseURL) {
      throw { message: "base url required" };
    }

    if (!config.url) {
      return;
    }
    if (config.url.match(/undefined/g)) {
      return;
    }

    return await axiosInstance<SuccessResponse<T>>(config).catch(
      async (err: AxiosError<ResponsePayload>) => {
        if (![401].includes(err.response?.status || 0)) {
          throw err;
        }
      }
    );
  }, []);

  return axiosFetch;
}

export default useAxiosWithAuth;
