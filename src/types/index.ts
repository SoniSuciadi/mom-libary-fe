export interface Data<T> {
  page: number;
  perPage: number;
  totalItems: number;
  items: T[];
}

export interface InfiniteList<T> {
  perPage: number;
  next: string;
  items: T[];
}

export interface ErrorResponse {
  error: string;
  message: string;
}

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export interface QueryPagination<T = unknown, O = unknown> {
  count: number;
  page: number;
  rowsPerPage: number;
  items: T[];
  otherItem?: O;
}
export interface SuccessResponse<T> {
  message: string;
  data: T;
}

export interface UserInformation {
  id: string;
  name: string;
  email: string;
  sessionEnd: string;
}
