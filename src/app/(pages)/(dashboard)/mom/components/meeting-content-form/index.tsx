import MdxEditorTextfield from "@/components/mdx-editor-textfield";
import colorsPalette from "@/constant/colors";
import { InputLabel, Stack, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { InferType } from "yup";
import { momSchema } from "../../page";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
const MeetingContentForm = () => {
  const form = useFormContext<InferType<typeof momSchema>>();

  return (
    <Stack px={"1.5rem"} py={"1rem"} bgcolor={"white"} borderRadius={"16px"}>
      <Stack mb={"1rem"}>
        <Stack direction={"row"} gap={"0.5rem"}>
          <TextSnippetIcon
            sx={{
              color: colorsPalette["midnight-blue"],
            }}
          />
          <Typography
            color="text.primary"
            fontWeight={700}
            fontSize={"1.25rem"}
          >
            Meeting Content
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Document the meeting proceedings in detail
        </Typography>
      </Stack>

      <Controller
        name="agenda"
        control={form.control}
        render={({ field }) => (
          <Stack mb={"1rem"}>
            <InputLabel required>Agenda</InputLabel>
            <MdxEditorTextfield {...field} />
          </Stack>
        )}
      />

      <Controller
        name="discussionPoint"
        control={form.control}
        render={({ field }) => (
          <Stack mb={"1rem"}>
            <InputLabel required>Discussion Point</InputLabel>
            <MdxEditorTextfield {...field} />
          </Stack>
        )}
      />

      <Controller
        name="decisionsMade"
        control={form.control}
        render={({ field }) => (
          <Stack mb={"1rem"}>
            <InputLabel required>Decisions made</InputLabel>
            <MdxEditorTextfield {...field} />
          </Stack>
        )}
      />

      <Controller
        name="actionItem"
        control={form.control}
        render={({ field }) => (
          <Stack mb={"1rem"}>
            <InputLabel required>Action Item</InputLabel>
            <MdxEditorTextfield {...field} />
          </Stack>
        )}
      />
    </Stack>
  );
};
export default MeetingContentForm;
