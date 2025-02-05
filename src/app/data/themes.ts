import { createTheme } from "@mui/material";
import "@fontsource/jetbrains-mono";

export const theme = createTheme({
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          borderColor: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "white",
          },
        },
        contained: {
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "white !important"
          }
        },
      },
    },
  },
});
