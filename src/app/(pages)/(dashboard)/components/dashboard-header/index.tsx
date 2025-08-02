"use client";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { keyframes } from "@emotion/react";
import { fadeIn } from "../animated-card";

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DashboardHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "flex-start", lg: "center" },
        justifyContent: "space-between",
        gap: 1,
      }}
    >
      <Box
        sx={{
          animation: `${slideUp} 0.6s ease-out forwards`,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            fontSize: "1.75rem",
          }}
        >
          Meeting Minutes Dashboard
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
          }}
        >
          Manage and access your meeting documentation
        </Typography>
      </Box>

      <Box
        sx={{
          animation: `${fadeIn} 0.8s ease-out forwards`,
        }}
      >
        <Link href="/mom">
          <Button
            variant="contained"
            sx={{
              fontSize: "0.75rem",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            <AddIcon sx={{ fontSize: "1.4rem" }} />
            Add New Meeting
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
