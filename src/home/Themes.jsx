import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  name: "lightTheme",
  palette: {
    mode: "light",
    tab1: "#e3f2fd",
    tab2: "#bbdefb",
    tab3: "#90caf9",
    tab4: "#64b5f6",
  },
  shape: {
    borderRadius: 1,
  },
});

export const darkTheme = createTheme({
  name: "darkTheme",
  palette: {
    mode: "dark",
    tab1: "#0d47a1",
    tab2: "#1565c0",
    tab3: "#1976d2",
    tab4: "#1e88e5",
  },
  shape: {
    borderRadius: 1,
  },
});
