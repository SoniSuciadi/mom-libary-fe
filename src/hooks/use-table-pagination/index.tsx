"use client";

import { useEffect, useState } from "react";

type Props = {
  defaultValues?: {
    rowsPerPage?: number;
    page?: number;
    count?: number;
  };
};
export interface useTablePaginationType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  handlePageChange: (e: React.ChangeEvent<unknown>, page: number) => void;
  handleRowsPerPageChange: (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => void;
}
const useTablePagination = (props?: Props): useTablePaginationType => {
  const [count, setCount] = useState<number>(props?.defaultValues?.count || 0);
  const [page, setPage] = useState<number>(props?.defaultValues?.page || 1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    props?.defaultValues?.rowsPerPage || 10
  );

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  const handleRowsPerPageChange = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(1);
    setRowsPerPage(value);
  };

  useEffect(() => {
    PageController.setSetState(setPage);
  }, [setPage]);

  return {
    count,
    setCount,
    page,
    setPage,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
  };
};

export class PageController {
  static setState: React.Dispatch<React.SetStateAction<number>>;
  static setSetState(s: React.Dispatch<React.SetStateAction<number>>) {
    this.setState = s;
  }
  static setPage(v: number) {
    this.setState?.(v);
  }
}

export default useTablePagination;
