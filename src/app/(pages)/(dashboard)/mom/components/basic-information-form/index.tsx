import colorsPalette from "@/constant/colors";
import {
  Autocomplete,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Controller, useFormContext } from "react-hook-form";
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
        <Typography variant="body2" color="text.secondary">
          Enter the essential details about your meeting
        </Typography>
      </Stack>

      <Stack gap={"1rem"}>
        <Controller
          name="title"
          control={form.control}
          render={({ field }) => (
            <Stack>
              <InputLabel required>Meeting Title</InputLabel>
              <TextField placeholder="Weekly Sales Review" {...field} />
            </Stack>
          )}
        />

        <Stack flex={1} direction={"row"} gap={"1rem"}>
          <Controller
            name="meetingDate"
            control={form.control}
            render={({ field }) => (
              <Stack flex={1}>
                <InputLabel required>Meeting Date</InputLabel>
                <TextField type="date" fullWidth {...field} />
              </Stack>
            )}
          />
          <Controller
            name="meetingTime"
            control={form.control}
            render={({ field }) => (
              <Stack flex={1}>
                <InputLabel required>Meeting Date</InputLabel>
                <TextField type="time" fullWidth {...field} />
              </Stack>
            )}
          />
        </Stack>
        <Stack flex={1} direction={"row"} gap={"1rem"}>
          <Controller
            name="location"
            control={form.control}
            render={({ field }) => (
              <Stack flex={1}>
                <InputLabel required>Location</InputLabel>
                <TextField placeholder="Room A / Building B" {...field} />
              </Stack>
            )}
          />

          <Controller
            name="departement"
            control={form.control}
            render={({ field }) => (
              <Stack flex={1}>
                <InputLabel required>Departement</InputLabel>
                <Autocomplete
                  disablePortal
                  options={["engineering", "sales", "finance", "product", "hr"]}
                  fullWidth
                  {...field}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            )}
          />
        </Stack>
        <Controller
          name="facilitator"
          control={form.control}
          render={({ field }) => (
            <Stack>
              <InputLabel required>Meeting Cacilitator</InputLabel>
              <TextField placeholder="Soni Suciadi" {...field} />
            </Stack>
          )}
        />
      </Stack>
    </Stack>
  );
};
export default BasicInformationForm;
