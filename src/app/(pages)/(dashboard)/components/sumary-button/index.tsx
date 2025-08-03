"use client";

import React, { useRef, useState } from "react";
import {
  Button,
  Popper,
  Paper,
  Typography,
  Grow,
  Box,
  CircularProgress,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import useMutationApiRequest from "@/hooks/useApiRequest/useMutationApiRequest";

const SumaryButton = (props: { id: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState<{ title: string; content: string }>({
    title: "",
    content: "",
  });
  const { mutateAsync, isPending } = useMutationApiRequest<{
    title: string;
    content: string;
  }>({
    key: "mom-summary",
    config: {
      params: {
        id: props.id,
      },
    },
  });
  const handleButtonClick = async () => {
    try {
      if (!open) {
        const { data } = await mutateAsync({});
        setData(data);
      }
      setOpen((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box ref={buttonRef}>
        {isPending ? (
          <CircularProgress size={24} />
        ) : (
          <Button
            variant="outlined"
            startIcon={<AutoAwesomeIcon />}
            onClick={handleButtonClick}
          >
            Summary
          </Button>
        )}
      </Box>

      <Popper
        open={open}
        anchorEl={buttonRef.current}
        placement="bottom"
        transition
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper sx={{ p: 2, mt: 1, maxWidth: 300, boxShadow: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="body2">{data.content}</Typography>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default SumaryButton;
