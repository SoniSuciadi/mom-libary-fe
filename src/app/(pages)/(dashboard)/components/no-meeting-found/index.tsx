import { fadeIn } from "@/app/(pages)/animate";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import {
  Description as FileTextIcon,
  Add as PlusIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useQueryState } from "nuqs";
const NoMeetingFound = () => {
  const [keyword] = useQueryState("search");

  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Card
          sx={{
            animation: `${fadeIn} 0.5s ease-out forwards`,
            textAlign: "center",
            p: 6,
          }}
        >
          <CardContent>
            <FileTextIcon
              sx={{ fontSize: 64, color: "text.disabled", mb: 2 }}
            />
            <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              No Meeting Minutes Found
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              {keyword
                ? "Try adjusting your search terms"
                : "Start by creating your first meeting minutes"}
            </Typography>
            <Link href="/mom">
              <Button
                variant="contained"
                startIcon={<PlusIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: "1rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 14px rgba(0, 118, 255, 0.4)",
                  background: "linear-gradient(135deg, #0066ff, #0051cc)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0051cc, #0040a3)",
                  },
                }}
              >
                Add Your First Meeting
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default NoMeetingFound;
