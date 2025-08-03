"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { slideUp } from "../../../components/dashboard-header";
import BasicInformationForm from "../basic-information-form";
import AttendenceForm from "../attendence-form";
import MeetingContentForm from "../meeting-content-form";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";
import useMutationApiRequest from "@/hooks/useApiRequest/useMutationApiRequest";
import { SnackBarResultController } from "@/components/snackbar-custom";
import useQueryApiRequest from "@/hooks/useApiRequest/useQueryApiRequest";
import ExtractButton from "../extract-button";
export const momSchema = yup.object({
  title: yup.string().required(),
  meetingDate: yup.string().required(),
  meetingTime: yup.string().required(),
  location: yup.string().required(),
  departement: yup.string().required(),
  facilitator: yup.string().required(),
  attendences: yup
    .array(
      yup.object({
        name: yup.string().required(),
      })
    )
    .required(),
  agenda: yup.string().required(),
  discussionPoint: yup.string().required(),
  decisionsMade: yup.string().required(),
  actionItem: yup.string().required(),
});
const MomForm = () => {
  const { id } = useParams();
  const route = useRouter();
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
      attendences: [
        {
          name: "",
        },
      ],
      agenda: "",
      discussionPoint: "",
      decisionsMade: "",
      actionItem: "",
    },
  });
  const { data } = useQueryApiRequest<yup.InferType<typeof momSchema>>({
    key: "mom-detail",
    config: {
      params: {
        id: id?.toString() || "",
      },
    },
    options: {
      enabled: !!id,
    },
  });
  useEffect(() => {
    if (data) {
      form.reset(data);
    }
  }, [data, form]);
  const mutateAdd = useMutationApiRequest({
    key: "add-mom",
  });
  const mutateUpdate = useMutationApiRequest({
    key: "update-mom",
    config: {
      params: {
        id: id?.toString() || "",
      },
    },
  });
  const { mutateAsync } = useMemo(
    () => (id ? mutateUpdate : mutateAdd),
    [id, mutateUpdate, mutateAdd]
  );
  const submitForm = useCallback(async () => {
    try {
      await mutateAsync({
        ...form.getValues(),
        attendences: form.getValues("attendences").map((item) => item.name),
      });
      SnackBarResultController.open({
        content: "Meeting minutes created successfully",
        variant: "success",
      });
      route.push("/");
    } catch (error) {
      SnackBarResultController.open({
        content: "Meeting minutes creation failed",
        variant: "error",
      });
      console.log("👻 ~ omForm ~ error:", error);
    }
  }, [form, mutateAsync, route]);

  return (
    <Stack px={"2rem"} mt={"1rem"} gap={"1rem"}>
      <Box
        sx={{
          animation: `${slideUp} 0.6s ease-out forwards`,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            fontSize: "1.25rem",
          }}
        >
          {id ? "Update" : "Create"} Meeting Minutes
        </Typography>
      </Box>

      <FormProvider {...form}>
        <Stack display={"inline-block"}>
          <ExtractButton />
        </Stack>
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
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={submitForm}
        >
          Simpan
        </Button>
      </Stack>
    </Stack>
  );
};

export default MomForm;
