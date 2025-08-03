import {
  Box,
  Button,
  CardContent,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";
import AnimatedCard from "../animated-card";
import { Meeting } from "../../page";
import { useCallback } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTime from "@mui/icons-material/AccessTime";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Link from "next/link";
import { idDateFormated } from "@/utils/idDateFormated";
import { Departement } from "../meeting-list";
import SumaryButton from "../sumary-button";
const MeetingCard = (props: { meeting: Meeting; index: number }) => {
  const theme = useTheme();
  const { meeting, index } = props;
  const getDepartmentColor = useCallback(
    (department: Departement) => {
      const colorMap: Record<Departement, string> = {
        engineering: theme.palette.primary.main,
        sales: theme.palette.secondary.main,
        finance: theme.palette.error.main,
        product: theme.palette.warning.main,
        hr: theme.palette.success.main,
      };

      return colorMap[department];
    },
    [theme]
  );
  return (
    <AnimatedCard delay={index * 100}>
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { lg: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 1,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                    transition: "color 0.2s",
                  }}
                >
                  {meeting.title}
                </Typography>
                <Chip
                  label={meeting.departement}
                  size="small"
                  sx={{
                    mt: 1,
                    backgroundColor: getDepartmentColor(meeting.departement),
                    color: "white",
                    fontWeight: 500,
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2,
                color: theme.palette.text.secondary,
                fontSize: "0.875rem",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <CalendarMonthIcon fontSize="small" />
                <Typography>{idDateFormated(meeting.date)} </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTime fontSize="small" />
                <Typography>{meeting.time}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <PeopleAltOutlinedIcon fontSize="small" />
                <Typography>{meeting.attendees.length} attendees</Typography>
              </Box>
            </Box>
          </Box>

          {/* Tombol aksi */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: { xs: "row", sm: "row" },
              width: { xs: "100%", lg: "auto" },
              justifyContent: { xs: "flex-end", sm: "flex-start" },
            }}
          >
            <SumaryButton id={meeting.id} />
            <Link href={`/mom/${meeting.id}`} passHref>
              <Button
                variant="outlined"
                size="small"
                startIcon={<EditIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                Edit
              </Button>
            </Link>
            <Link href={`/mom/detail/${meeting.id}`} passHref>
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                View Details
              </Button>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </AnimatedCard>
  );
};
export default MeetingCard;
