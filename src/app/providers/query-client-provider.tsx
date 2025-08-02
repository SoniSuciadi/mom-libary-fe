"use client";
import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});
export default function QueryClientProviderWrapper({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
