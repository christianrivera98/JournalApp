import { CssBaseline, ThemeProvider } from "@mui/material";
import { blueCreamTheme } from "./blueCreamTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={blueCreamTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
