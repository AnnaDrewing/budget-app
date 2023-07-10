/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export default function FontSize({ updateFontSize, userFontSize, userFont }) {
  // changing font size from string to int
  let defaultFont = 0;
  defaultFont = parseInt(userFontSize.substring(0, userFontSize.length - 2));
  // font size as state here must be an integer
  const [fontSize, setFontSize] = useState(defaultFont);
  const handleChange = (evt, newValue) => {
    setFontSize(newValue);
    // font size as state in the app must be a string with 'px' at the end
    updateFontSize(newValue + "px");
  };
  const marks = [
    {
      value: 10,
      label: "10",
    },
    {
      value: 25,
      label: "25",
    },
  ];
  return (
    <>
      <Typography
        style={{ fontSize: "1em" }}
        id="font-size-slider"
        gutterBottom
        sx={{ fontFamily: userFont, fontSize: userFontSize }}
      >
        Font size:
      </Typography>
      <Slider
        sx={{ fontFamily: userFont, fontSize: userFontSize }}
        style={{ width: "200px" }}
        size="small"
        id="font-size-slider"
        aria-label="Custom marks"
        value={fontSize}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={10}
        max={25}
        onChange={handleChange}
      />
    </>
  );
}
