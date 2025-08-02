import { AxiosError } from 'axios';

import { ErrorResponse } from '@/types';

export type AxiosErrorResponse = AxiosError<ErrorResponse>;
