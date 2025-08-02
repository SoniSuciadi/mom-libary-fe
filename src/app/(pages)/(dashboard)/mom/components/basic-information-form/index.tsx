import colorsPalette from "@/constant/colors";
import {
  Autocomplete,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useFormContext } from "react-hook-form";
import { InferType } from "yup";
import { momSchema } from "../../page";

const BasicInformationForm = () => {
  const form = useFormContext<InferType<typeof momSchema>>();
  return (
    <Stack
      px={"1.5rem"}
      py={"1rem"}
      bgcolor={"white"}
      borderRadius={"16px"}
      mb={"1rem"}
    >
      <Stack mb={"1rem"}>
        <Stack direction={"row"} gap={"0.5rem"}>
          <CalendarTodayOutlinedIcon
            sx={{
              color: colorsPalette["midnight-blue"],
            }}
          />
          <Typography
            color="text.primary"
            fontWeight={700}
            fontSize={"1.25rem"}
          >
            Basic Information
          </Typography>
        </Stack>
        <Typography color="text.secondary">
          Enter the essential details about your meeting
        </Typography>
      </Stack>

      <Stack gap={"1rem"}>
        <Stack>
          <InputLabel required>Meeting Title</InputLabel>
          <TextField placeholder="Weekly Sales Review" />
        </Stack>
        <Stack flex={1} direction={"row"} gap={"1rem"}>
          <Stack flex={1}>
            <InputLabel required>Meeting Date</InputLabel>
            <TextField type="date" fullWidth />
          </Stack>
          <Stack flex={1}>
            <InputLabel required>Meeting Date</InputLabel>
            <TextField type="time" fullWidth />
          </Stack>
        </Stack>
        <Stack flex={1} direction={"row"} gap={"1rem"}>
          <Stack flex={1}>
            <InputLabel required>Location</InputLabel>
            <TextField placeholder="Room A / Building B" />
          </Stack>
          <Stack flex={1}>
            <InputLabel required>Departement</InputLabel>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["engineering", "sales", "finance", "product", "hr"]}
              fullWidth
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </Stack>
        <Stack>
          <InputLabel required>Meeting Cacilitator</InputLabel>
          <TextField placeholder="Soni Suciadi" />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default BasicInformationForm;
