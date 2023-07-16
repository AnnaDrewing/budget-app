/* eslint-disable react/prop-types */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function FontFamily({ updateFont, userFont }) {
  const [fontFamily, setFontFamily] = useState(userFont);
  const handleChange = (evt) => {
    const newFont = evt.target.value;
    setFontFamily(newFont);
    updateFont(newFont);
  };

  const theme = useTheme();
  return (
    <FormControl size="small" style={{ width: "200px" }}>
      <InputLabel id="font-label">Font</InputLabel>
      <Select
        labelId="font-label"
        id="font"
        value={fontFamily}
        name="font"
        label="Font"
        onChange={handleChange}
      >
        <MenuItem
          value="Arial"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          Arial
        </MenuItem>
        <MenuItem
          value="Verdana"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          Verdana
        </MenuItem>
        <MenuItem
          value="Times New Roman"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          Times New Roman
        </MenuItem>
        <MenuItem
          value="Georgia"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          Georgia
        </MenuItem>
      </Select>
    </FormControl>
  );
}
