import { Button, Stack, TextField, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import colorsPalette from "@/constant/colors";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useFormContext } from "react-hook-form";
import { InferType } from "yup";
import { momSchema } from "../../page";

const AttendenceForm = () => {
  const form = useFormContext<InferType<typeof momSchema>>();

  return (
    <Stack px={"1.5rem"} py={"1rem"} bgcolor={"white"} borderRadius={"16px"}>
      <Stack mb={"1rem"}>
        <Stack direction={"row"} gap={"0.5rem"}>
          <PeopleAltOutlinedIcon
            sx={{
              color: colorsPalette["midnight-blue"],
            }}
          />
          <Typography
            color="text.primary"
            fontWeight={700}
            fontSize={"1.25rem"}
          >
            Attendees
          </Typography>
        </Stack>
        <Typography color="text.secondary">
          List all meeting participants
        </Typography>
      </Stack>

      <Stack mb={"1rem"}>
        <TextField placeholder="Attendee name" />
      </Stack>
      <Button
        variant="text"
        startIcon={<AddOutlinedIcon />}
        sx={{ width: "11rem" }}
      >
        Add Attendence
      </Button>
    </Stack>
  );
};
export default AttendenceForm;
