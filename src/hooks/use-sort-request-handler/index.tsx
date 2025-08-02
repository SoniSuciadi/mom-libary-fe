"use client";

import { useState } from "react";

import { UseSortRequestHandlerProps } from "./types";
export interface useSortRequestHandlerType {
  order: "ASC" | "DESC";
  orderBy: string | number;
  handleRequestSort: (
    event: React.MouseEvent<unknown>,
    property: number | string
  ) => void;
}
const useSortRequestHandler = (
  props?: UseSortRequestHandlerProps
): useSortRequestHandlerType => {
  const [order, setOrder] = useState<"ASC" | "DESC">(
    props?.defaultValue?.order || "DESC"
  );
  const [orderBy, setOrderBy] = useState<string | number>(
    props?.defaultValue?.orderBy || ""
  );

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: number | string
  ) => {
    const isAsc = orderBy === property && order === "ASC";
    setOrder(isAsc ? "DESC" : "ASC");
    setOrderBy(property);
  };

  return { order, orderBy, handleRequestSort };
};

export default useSortRequestHandler;
