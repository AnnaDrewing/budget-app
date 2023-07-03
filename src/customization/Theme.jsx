/* eslint-disable react/prop-types */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { lightTheme, darkTheme } from "../home/Themes";

export default function Theme({ updateTheme, userTheme }) {
  const [theme, setTheme] = useState(userTheme);
  console.log("Current theme is: " + userTheme);
  console.log(userTheme);

  const handleChange = (evt) => {
    const newTheme = evt.target.value;
    if (evt.target.value === "light-theme") {
      updateTheme(lightTheme);
    } else {
      updateTheme(darkTheme);
    }
    setTheme(newTheme);
  };

  return (
    <>
      <FormControl size="small" style={{ width: "200px" }}>
        <InputLabel id="theme-label">Theme</InputLabel>
        <Select
          labelId="theme-label"
          id="theme"
          value={theme.name}
          name="theme"
          label="Theme"
          onChange={handleChange}
        >
          <MenuItem value="light-theme">Light</MenuItem>
          <MenuItem value="dark-theme">Dark</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
