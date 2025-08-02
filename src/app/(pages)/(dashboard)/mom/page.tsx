"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { slideUp } from "../components/dashboard-header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import BasicInformationForm from "./components/basic-information-form";
import AttendenceForm from "./components/attendence-form";
import MeetingContentForm from "./components/meeting-content-form";
export const momSchema = yup.object({
  title: yup.string().required(),
  meetingDate: yup.string().required(),
  meetingTime: yup.string().required(),
  location: yup.string().required(),
  departement: yup.string().required(),
  facilitator: yup.string().required(),
  attendences: yup.array().required(),
  agenda: yup.string().required(),
  discussionPoint: yup.string().required(),
  decisionsMade: yup.string().required(),
  actionItem: yup.string().required(),
});
export default function Page() {
  const form = useForm({
    resolver: yupResolver(momSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      meetingDate: "",
      meetingTime: "",
      location: "",
      departement: "",
      facilitator: "",
      attendences: [],
      agenda: "",
      discussionPoint: "",
      decisionsMade: "",
      actionItem: "",
    },
  });
  return (
    <Stack px={"2rem"} mt={"1rem"} gap={"1rem"}>
      <Box
        sx={{
          animation: `${slideUp} 0.6s ease-out forwards`,
          mb: "1rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            fontSize: "1.75rem",
          }}
        >
          Create Meeting Minutes
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "1rem",
          }}
        >
          Document your meeting proceedings and outcomes
        </Typography>
      </Box>
      <FormProvider {...form}>
        <BasicInformationForm />
        <AttendenceForm />
        <MeetingContentForm />
      </FormProvider>
      <Stack
        flexDirection={"row"}
        gap={"1rem"}
        px={"1.5rem"}
        justifyContent={"end"}
        py={"2rem"}
      >
        <Button variant="outlined">cancel</Button>
        <Button variant="contained" startIcon={<SaveIcon />}>
          Simpan
        </Button>
      </Stack>
    </Stack>
  );
}
