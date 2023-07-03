/* eslint-disable react/prop-types */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function FontFamily({ updateFont, userFont }) {
  const [fontFamily, setFontFamily] = useState(userFont);
  const handleChange = (evt) => {
    const newFont = evt.target.value;
    setFontFamily(newFont);
    updateFont(newFont);
  };
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
        <MenuItem value="Arial">Arial</MenuItem>
        <MenuItem value="Verdana">Verdana</MenuItem>
        <MenuItem value="Times New Roman">Times New Roman</MenuItem>
        <MenuItem value="Georgia">Georgia</MenuItem>
      </Select>
    </FormControl>
  );
}
