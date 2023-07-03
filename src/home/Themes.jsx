import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  name: "light-theme",
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  name: "dark-theme",
  palette: {
    mode: "dark",
  },
});
