/* eslint-disable react/prop-types */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { lightTheme, darkTheme } from "../home/Themes";

export default function Theme({ updateTheme, userTheme }) {
  const [theme, setTheme] = useState(userTheme);

  const handleChange = (evt) => {
    if (evt.target.value === "lightTheme") {
      updateTheme(lightTheme);
      setTheme(lightTheme);
    } else {
      updateTheme(darkTheme);
      setTheme(darkTheme);
    }
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
          <MenuItem
            value="lightTheme"
            sx={{ color: theme.palette.text.selectTextColor }}
          >
            Light
          </MenuItem>
          <MenuItem
            value="darkTheme"
            sx={{ color: theme.palette.text.selectTextColor }}
          >
            Dark
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
