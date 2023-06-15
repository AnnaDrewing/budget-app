import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function FontFamily({ updateFont }) {
  const [fontFamily, setFontFamily] = useState("Arial");
  const handleChange = (evt) => {
    const newFont = evt.target.value;
    setFontFamily(newFont);
    updateFont(newFont);
  };
  return (
    <FormControl>
      <InputLabel id="font-label">Chose font</InputLabel>
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
