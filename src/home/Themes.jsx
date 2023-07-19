import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  name: "lightTheme",
  mode: "light",
  palette: {
    primary: {
      main: "#1976d2", // borders and button colors
      contrastText: "#000000", // text on filled buttons,
    },
    background: {
      default: "#e3f2fd",
    },
    text: {
      primary: "#000000", // text
      selectTextColor: "#000000",
    },
    tab1: "#42a5f5",
    tab2: "#bbdefb",
    tab3: "#90caf9",
    tab4: "#64b5f6",
    info: {
      main: "#0d47a1", // color of the icon
      background: "#bbdefb",
      text: "#000000",
    },
    success: {
      main: "#689f38", // color of the icon
      background: "#c5e1a5",
      text: "#000000",
    },
  },
  shape: {
    borderRadius: 1,
  },
});

export const darkTheme = createTheme({
  name: "darkTheme",
  mode: "dark",
  palette: {
    tab1: "#0d47a1",
    tab2: "#1565c0",
    tab3: "#1976d2",
    tab4: "#1e88e5",
    primary: {
      main: "#0d47a1", // borders and button colors
      contrastText: "#ffffff", // text on filled buttons,
    },
    background: {
      default: "#000000",
      light: "",
    },
    text: {
      primary: "#ffffff", // text within the form
      secondary: "#8f96a3", // form field labels
      //disabled: "#ff80ab", //pink
      //icon: "#ff9800", //organge
      formTextColor: "#ffffff",
    },
    action: {
      hover: "#eceff1", //// highlight color in the form select
      disabled: "#0d47a1", // text color when button is disabled
      selected: "#eceff1",
      active: "#8f96a3", // icon colors in the form
    },
    info: {
      main: "#90caf9", // color of the icon
      background: "#0d47a1",
      text: "#ffffff",
    },
    success: {
      main: "#f1f8e9", // color of the icon
      background: "#558b2f",
      text: "#ffffff",
    },
  },
  // sharp edges on buttons
  shape: {
    borderRadius: 1,
  },
});
