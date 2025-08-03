import { Button, CircularProgress, Stack } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { InferType } from "yup";
import useMutationApiRequest from "@/hooks/useApiRequest/useMutationApiRequest";
import { SnackBarResultController } from "@/components/snackbar-custom";
import { momSchema } from "../mom-form/config";

const ExtractButton = () => {
  const form = useFormContext<InferType<typeof momSchema>>();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync, isPending } = useMutationApiRequest<
    InferType<typeof momSchema>
  >({
    key: "extract-mom",
  });
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event.target.files?.[0];
      if (file) {
        const fd = new FormData();
        fd.append("file", file);
        const { data } = await mutateAsync(fd);
        form.reset(data, {
          keepDirty: false,
          keepIsValidating: false,
        });
        form.trigger();
      }
    } catch (error) {
      console.log("👻 ~ handleFileChange ~ error:", error);
      SnackBarResultController.open({
        variant: "error",
        content: "Extract gagal silahkan coba lagi",
      });
    }
  };

  return (
    <Stack flexDirection={"row"} gap={"1rem"}>
      <Button
        variant="outlined"
        startIcon={<AutoAwesomeIcon />}
        onClick={handleButtonClick}
        disabled={isPending}
      >
        Extract
      </Button>
      {isPending && <CircularProgress size="30px" />}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".pdf"
      />
    </Stack>
  );
};

export default ExtractButton;
