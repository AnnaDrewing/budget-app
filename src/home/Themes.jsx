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
      main: "#dcedc8", // color of the success icon
      background: "#689f38",
      text: "#ffffff",
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

export const simpleDark = createTheme({
  name: "simpleDark",
  mode: "dark",
  palette: {
    tab1: "#F1EBE9",
    tab2: "#D4CFCD",
    tab3: "#A19D9C",
    tab4: "#E0DBDA",
    primary: {
      main: "#FFFFFF", // borders and button colors
      contrastText: "#000000", // text on filled buttons,
      icon: "#000000",
    },
    background: {
      default: "#2D2E2E",
    },
    text: {
      primary: "#ffffff", // text that shows on the background color
      settingsLabel: "#000000",
    },
    action: {
      disabledBackground: "#424242",
      disabled: "#757575",
    },
    info: {
      main: "#ffffff", // color of the icon
      background: "#616161",
      text: "#ffffff",
    },
    success: {
      main: "#000000", // color of the icon
      background: "#ffffff",
      text: "#000000",
    },
  },
  // sharp edges on buttons
  shape: {
    borderRadius: 1,
  },
});

export const wine = createTheme({
  name: "wine",
  mode: "light",
  palette: {
    primary: {
      main: "#4D0B0B", //"#310707", // borders and button colors
      contrastText: "#ffffff", // text on filled buttons,
      icon: "#ffffff",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000", // text that appears directly on the background color
      settingsLabel: "#ffffff",
    },
    tab1: "#861313",
    tab2: "#6A0F0F",
    tab3: "#A31717",
    tab4: "#310707",
    info: {
      main: "#4D0B0B", // color of the info  icon
      background: "#F7E0E0",
      text: "#310707",
    },
    success: {
      main: "#ffffff", // color of the success icon
      background: "#4F4E20",
      text: "#ffffff",
    },
  },
  shape: {
    borderRadius: 1,
  },
});

export const honey = createTheme({
  name: "honey",
  mode: "light",
  palette: {
    primary: {
      main: "#F9A600", //"#310707", // borders and button colors
      contrastText: "#000000", // text on filled buttons,
      icon: "#000000",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000", // text that appears directly on the background color
      settingsLabel: "#000000",
    },
    tab1: "#FFC043",
    tab2: "#FF9D33",
    tab3: "#FFAF0F",
    tab4: "#FF9624",
    info: {
      main: "#F9A600", // color of the info  icon
      background: "#FFDA91",
      text: "#000000",
    },
    success: {
      main: "#000000", // color of the success icon
      background: "#BDBDC1",
      text: "#000000",
    },
  },
  shape: {
    borderRadius: 1,
  },
});

export const ocean = createTheme({
  name: "ocean",
  mode: "dark",
  palette: {
    tab1: "#468FAF",
    tab2: "#2A6F97",
    tab3: "#014F86",
    tab4: "#2C7DA0",
    primary: {
      main: "#A9D6E5", // borders and button colors
      contrastText: "#000000", // text on filled buttons,
      icon: "#ffffff",
    },
    background: {
      default: "#013A63",
    },
    text: {
      primary: "#A9D6E5", // text that shows on the background color
      settingsLabel: "#ffffff",
    },
    action: {
      disabledBackground: "#263238",
      disabled: "#546e7a",
    },
    info: {
      main: "#A9D6E5", // color of the icon
      background: "#01497C",
      text: "#A9D6E5",
    },
    success: {
      main: "#ffffff", // color of the icon
      background: "#016316",
      text: "#ffffff",
    },
  },
  // sharp edges on buttons
  shape: {
    borderRadius: 1,
  },
});

export const forest = createTheme({
  name: "forest",
  mode: "dark",
  palette: {
    tab1: "#506040",
    tab2: "#656D4A",
    tab3: "#4F583E",
    tab4: "#5E684A",
    primary: {
      main: "#B6AD90", // borders and button colors
      contrastText: "#000000", // text on filled buttons,
      icon: "#ffffff",
    },
    background: {
      default: "#333D29",
    },
    text: {
      primary: "#B6AD90", // text that shows on the background color
      settingsLabel: "#ffffff",
    },
    action: {
      disabledBackground: "#414833",
      disabled: "#333d29",
    },
    info: {
      main: "#000000", // color of the icon
      background: "#656d4a",
      text: "#000000",
    },
    success: {
      main: "#ffffff", // color of the icon
      background: "#49331d",
      text: "#ffffff",
    },
  },
  // sharp edges on buttons
  shape: {
    borderRadius: 1,
  },
});
