"use client";
import { AppBar, Toolbar, Button } from "@mui/material";

import AppLogo from "@/components/app-logo";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useRouter } from "next/navigation";
const HeaderMom = () => {
  const route = useRouter();
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        backdropFilter: "blur(16px)",
        zIndex: 40,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "64px",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        <Button
          variant="text"
          startIcon={<ArrowBackOutlinedIcon />}
          onClick={() => route.back()}
        >
          Back
        </Button>
        <AppLogo />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMom;
