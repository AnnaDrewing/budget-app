import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function FontSize({ updateFontSize }) {
  const [fontSize, setFontSize] = useState(10);
  const handleChange = (evt, newValue) => {
    setFontSize(newValue);
    updateFontSize(newValue + "px");
  };
  return (
    <>
      <h3>Chosing font size</h3>
      <Slider
        aria-label="Font Size"
        defaultValue={3}
        value={fontSize}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={10}
        max={25}
        onChange={handleChange}
      />
    </>
  );
}
