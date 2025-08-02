import React from "react";
import {
  Button,
  Stack,
  TextField,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import colorsPalette from "@/constant/colors";
import { InferType } from "yup";
import { momSchema } from "../../page";

const AttendenceForm = () => {
  const { control } = useFormContext<InferType<typeof momSchema>>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "attendences",
  });
  console.log("👻 ~ AttendenceForm ~ fields:", fields);

  const handleAddAttendee = () => {
    append({
      name: "",
    });
  };

  const handleRemoveAttendee = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  return (
    <Stack
      px={"1.5rem"}
      py={"1.5rem"}
      bgcolor={"white"}
      borderRadius={"16px"}
      sx={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Stack mb={"1.5rem"}>
        <Stack direction={"row"} gap={"0.5rem"} alignItems="center" mb={1}>
          <PeopleAltOutlinedIcon
            sx={{ color: colorsPalette["midnight-blue"] }}
          />
          <Typography variant="h6" fontWeight={700} color="text.primary">
            Attendees
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          List all meeting participants (minimum 1 attendee required)
        </Typography>
      </Stack>

      <Stack spacing={2} mb={"1.5rem"}>
        {fields.map((field, index) => {
          return (
            <Controller
              key={field.id}
              name={`attendences.${index}.name`}
              control={control}
              render={({ field }) => (
                <Box sx={{ position: "relative" }}>
                  <TextField
                    fullWidth
                    {...field}
                    placeholder="Attendee name"
                    variant="outlined"
                    size="medium"
                    sx={{
                      "& .MuiInputBase-root": {
                        paddingRight: "48px",
                      },
                    }}
                  />

                  {fields.length > 1 && (
                    <IconButton
                      aria-label="delete attendee"
                      onClick={() => handleRemoveAttendee(index)}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "error.main",
                        backgroundColor: "rgba(244, 67, 54, 0.08)",
                        "&:hover": {
                          backgroundColor: "rgba(244, 67, 54, 0.12)",
                        },
                      }}
                    >
                      <DeleteOutlineOutlinedIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              )}
            />
          );
        })}
      </Stack>

      <Button
        variant="outlined"
        startIcon={<AddOutlinedIcon />}
        onClick={handleAddAttendee}
        sx={{
          width: "11rem",
          alignSelf: "flex-start",
          fontWeight: 500,
          borderStyle: "dashed",
          borderWidth: 1.5,
          "&:hover": {
            borderStyle: "dashed",
            borderWidth: 1.5,
            backgroundColor: "action.hover",
          },
        }}
      >
        Add Attendee
      </Button>
    </Stack>
  );
};

export default AttendenceForm;
