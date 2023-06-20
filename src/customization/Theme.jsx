/* eslint-disable react/prop-types */
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { blue, yellow, red } from "@mui/material/colors";

export default function Theme({ updateTheme }) {
  const [userTheme, setUserTheme] = useState("light");
  //Theme
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const handleChange = (evt) => {
    const newTheme = evt.target.value;
    if (evt.target.value === "light") {
      updateTheme(lightTheme);
    } else {
      updateTheme(darkTheme);
    }
    setUserTheme(newTheme);
  };

  return (
    <>
      <FormControl size="small" style={{ width: "200px" }}>
        <InputLabel id="theme-label">Theme</InputLabel>
        <Select
          labelId="theme-label"
          id="theme"
          value={userTheme}
          name="font"
          label="Font"
          onChange={handleChange}
        >
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
