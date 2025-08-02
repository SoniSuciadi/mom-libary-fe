'use client';
import React from "react";

import { ThemeProvider } from "@mui/material";
import momLibTheme from "@/constant/momLibTheme";

export const ThemeWrapping = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={momLibTheme}>{children}</ThemeProvider>;
};
