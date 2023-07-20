import { createTheme } from "@mui/material/styles";

export const lightBlue = createTheme({
  name: "lightBlue",
  mode: "light",
  palette: {
    primary: {
      main: "#1976d2", // borders and button colors
      contrastText: "#ffffff", // text on filled buttons,
      icon: "#000000",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000", // text that appears directly on the background color
      settingsLabel: "#000000",
    },
    tab1: "#42a5f5",
    tab2: "#bbdefb",
    tab3: "#90caf9",
    tab4: "#64b5f6",
    info: {
      main: "#0d47a1", // color of the info  icon
      background: "#bbdefb",
      text: "#000000",
    },
    success: {
      main: "#689f38", // color of the success icon
      background: "#c5e1a5",
      text: "#000000",
    },
  },
  shape: {
    borderRadius: 1,
  },
});

export const darkBlue = createTheme({
  name: "darkBlue",
  mode: "dark",
  palette: {
    tab1: "#1976d2",
    tab2: "#1565c0",
    tab3: "#0A377A",
    tab4: "#1e88e5",
    primary: {
      main: "#0d47a1", // borders and button colors
      contrastText: "#ffffff", // text on filled buttons,
      icon: "#ffffff",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#ffffff", // text that shows on the background color
      settingsLabel: "#ffffff",
    },
    action: {
      disabledBackground: "#263238",
      disabled: "#546e7a",
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

export const simpleLight = createTheme({
  name: "simpleLight",
  mode: "light",
  palette: {
    tab1: "#2D2E2E",
    tab2: "#5A5C5C",
    tab3: "#393B3B",
    tab4: "#787A7A",
    primary: {
      main: "#000000", // borders and button colors
      contrastText: "#ffffff", // text on filled buttons,
      icon: "#ffffff",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000", // text that shows on the background color
      settingsLabel: "#ffffff",
    },
    // action: {
    //   disabledBackground: "#263238",
    //   disabled: "#546e7a",
    // },
    info: {
      main: "#000000", // color of the icon
      background: "#ffffff",
      text: "#000000",
    },
    success: {
      main: "#ffffff", // color of the icon
      background: "#000000",
      text: "#ffffff",
    },
  },
  // sharp edges on buttons
  shape: {
    borderRadius: 1,
  },
});
