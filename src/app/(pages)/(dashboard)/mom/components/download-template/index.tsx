"use client";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const DownloadTemplate = () => {
  const handleDownload = () => {
    const url =
      "https://docs.google.com/document/d/1zIu7E1gQ1u0bnYyFF-ifBxai8cd-kUaTlKN0oe4AZEc/export?format=docx";
    const a = document.createElement("a");
    a.href = url;
    a.download = "Minutes_of_Meeting.docx";
    a.click();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
      onClick={handleDownload}
      sx={{
        fontSize: "0.75rem",
        borderRadius: "12px",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      Download Template
    </Button>
  );
};

export default DownloadTemplate;
