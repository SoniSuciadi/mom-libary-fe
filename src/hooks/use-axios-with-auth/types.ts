import { AxiosRequestConfig } from 'axios';

import { WithRequired } from '@/types';

export type AxiosFetchParams<D = unknown> = WithRequired<AxiosRequestConfig<D>, 'url'>;

export interface ResponsePayload {
  name: string;
  message: string;
  statusCode: number;
}
