import { Components, createTheme, CssVarsTheme, Theme } from "@mui/material";
import colorsPalette from "./colors";

const componentTheme:
  | Components<Omit<Theme, "components" | "palette"> & CssVarsTheme>
  | undefined = {
  MuiTextField: {
    styleOverrides: {
      root: {
        borderRadius: "1rem",
        "& .MuiOutlinedInput-root": {
          borderRadius: "1rem",
          // padding: 0,
          "& .MuiOutlinedInput-input": {
            fontSize: "0.75rem",
          },
          "& fieldset": {
            borderColor: `${colorsPalette["richblack-200"]} !important`,
          },
        },
        "&.Mui-disabled": {
          backgroundColor: "#f5f5f5",
          "& .MuiTypography-root": {
            color: "#bdbdbd",
          },
        },
        backgroundColor: colorsPalette["pale-lavender-200"],
      },
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        "& .MuiInputLabel-asterisk": {
          color: colorsPalette["pomegranate-500"],
        },
        color: colorsPalette["pomegranate-500"],
        position: "absolute",
        bottom: "-1.7em",
        marginLeft: 0,
        fontWeight: "300 !important",
        fontSize: "0.688rem",
      },
    },
  },
  MuiInputLabel: {
    defaultProps: {
      sx: {
        fontSize: "0.75rem",
        marginBottom: "0.4rem",
        fontWeight: "400 !important",
        color: `${colorsPalette["richblack-400"]} !important`,
        "& .MuiFormLabel-asterisk": {
          marginLeft: "0.1rem",
          color: colorsPalette["pomegranate-500"],
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        color: colorsPalette.hyperlink,
      },
    },
  },

  MuiMenu: {
    styleOverrides: {
      list: {
        padding: 0,
        "&:hover": {
          borderRadius: "0.5rem",
        },
      },
      root: {
        "& .Mui-selected": {
          borderRadius: "0.5rem",
          backgroundColor: `${colorsPalette["richblack-100"]} !important`,
          color: colorsPalette["richblack-300"],
        },
        "& .MuiMenuItem-root:hover": {
          borderRadius: "0.5rem",
        },
        marginBottom: "2rem",
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 700,
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        paddingLeft: "1.5rem !important",
        paddingRight: "1.5rem !important",
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      listbox: {
        padding: 0,
        '& .MuiAutocomplete-option[aria-selected="true"]': {
          borderRadius: "0.5rem",
          backgroundColor: `${colorsPalette["richblack-100"]} !important`,
          color: colorsPalette["richblack-300"],
        },
      },
    },
  },

  MuiSelect: {
    defaultProps: {
      displayEmpty: true,
    },
    styleOverrides: {
      root: {
        fontSize: "0.688rem",
        borderRadius: "1rem",
        "& .MuiSelect-select": {
          padding: "0.8rem 1rem",
          fontSize: "0.7rem",
        },
        "&.Mui-disabled": {
          backgroundColor: "#f5f5f5",
          "& .MuiTypography-root": {
            color: "#bdbdbd",
          },
        },
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        fontFamily: "Poppins, sans-serif",
      },
    },
  },
};

const momLibTheme = createTheme({
  shape: {
    borderRadius: 5,
  },
  palette: {
    primary: {
      main: colorsPalette["midnight-blue-500"],
    },
    secondary: {
      main: colorsPalette["richblack-300"],
    },
    success: {
      main: colorsPalette.emerald,
    },
    error: {
      main: colorsPalette["pomegranate-500"],
    },
  },
  components: componentTheme,
});
export default momLibTheme;
