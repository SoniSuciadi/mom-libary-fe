"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import colorsPalette from "@/constant/colors";

const Header = () => {
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #1d57b0, #1d57a0)",
              marginRight: "12px",
            }}
          >
            <DescriptionIcon sx={{ color: "white" }} />
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#1a3447",
                fontSize: "1.25rem",
              }}
            >
              MOM Library
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4a6572",
                fontSize: "0.875rem",
              }}
            >
              Meeting Minutes Manager
            </Typography>
          </Box>
        </Box>

        {/* Bagian Kanan (Desktop View) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Typography color={colorsPalette["richblack-300"]}>
            Jhon Doe
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
