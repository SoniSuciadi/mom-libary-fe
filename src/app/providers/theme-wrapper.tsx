"use client";
import React from "react";

import { ThemeProvider } from "@mui/material";
import customTheme from "@/constant/customTheme";

export const ThemeWrapping = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};
