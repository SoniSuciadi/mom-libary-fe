import { Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import colorsPalette from "@/constant/colors";

const AppLogo = () => {
  return (
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
            color: colorsPalette["midnight-blue"],
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
  );
};
export default AppLogo;
