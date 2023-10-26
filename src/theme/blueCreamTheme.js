import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueCreamTheme = createTheme({
  palette: {
    primary: {
      main: "#87CEFA",
    },
    secondary: {
      main: "#b2e2f2",
    },
    error: {
      main: red.A400,
    },
  },
});
