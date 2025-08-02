import { AxiosErrorResponse } from "@/hooks/useApiRequest/types";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

let refreshing:
  | Promise<AxiosResponse<{ data: { accessToken: string } }>>
  | undefined = undefined;

const getNewAccessToken = () => {
  const refreshPayload: AxiosRequestConfig = {
    withCredentials: true,
    url: "/auth/refresh-token",
    baseURL: import.meta.env.VITE_API_URL,
  };
  return axios<{ data: { accessToken: string } }>(refreshPayload).catch(
    (error) => {
      return Promise.reject(error);
    }
  );
};

const refreshAccessToken = () => {
  if (!refreshing) {
    refreshing = getNewAccessToken();
  }
  return refreshing;
};
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_URL,
});
axiosInstance.interceptors.request.use(async (request) => {
  if (
    request.url.includes("auth/register") ||
    request.url.includes("auth/login")
  ) {
    return request;
  }
  const authorization = axiosInstance.defaults.headers.common["Authorization"];

  if (!authorization) {
    const { data } = await refreshAccessToken();
    refreshing = undefined;
    const accessToken = "Bearer " + data.data.accessToken;
    axiosInstance.defaults.headers.common["Authorization"] = accessToken;
    request.headers["Authorization"] = accessToken;
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosErrorResponse) => {
    const originalRequest: Partial<InternalAxiosRequestConfig> =
      error.config || {};
    if (error.response?.data?.message === "need_refresh") {
      try {
        const { data } = await refreshAccessToken();

        refreshing = undefined;
        const accessToken = "Bearer " + data.data.accessToken;
        axiosInstance.defaults.headers.common["Authorization"] = accessToken;
        if (originalRequest.headers) {
          originalRequest.headers["Authorization"] = accessToken;
        }
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
