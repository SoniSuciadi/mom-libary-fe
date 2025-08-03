"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import colorsPalette from "@/constant/colors";
import AppLogo from "@/components/app-logo";
import { UserInformation } from "@/types";
import useQueryApiRequest from "@/hooks/useApiRequest/useQueryApiRequest";

const Header = () => {
  const { data: user } = useQueryApiRequest<UserInformation>({
    key: "user-information",
  });
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
        <AppLogo />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Typography color={colorsPalette["richblack-300"]}>
            {user?.name}
          </Typography>
          <Button
            variant="text"
            sx={{
              color: "#4a6572",
              fontWeight: 500,
              "&:hover": { color: "#1d57b0" },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
