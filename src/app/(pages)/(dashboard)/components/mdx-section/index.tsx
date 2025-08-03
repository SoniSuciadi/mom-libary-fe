"use client";

import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

const MdxSection = ({ title, content }: { title: string; content: string }) => (
  <Box mb={4}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Box
      sx={{
        p: 2,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  </Box>
);

export default MdxSection;
