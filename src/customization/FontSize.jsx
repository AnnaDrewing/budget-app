/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from '@mui/material/Typography';

export default function FontSize({ updateFontSize }) {
  const [fontSize, setFontSize] = useState(10);
  const handleChange = (evt, newValue) => {
    setFontSize(newValue);
    updateFontSize(newValue + "px");
  };
  const marks = [
    {
      value: 10,
      label: '10',
    },
    {
      value: 25,
      label: '25',
    }
  ];
  return (
    <>
    <Typography id="font-size-slider" gutterBottom>
        Font size:
      </Typography>
      <Slider style={{width: '200px'}}
        size="small"
        id="font-size-slider"
        aria-label="Custom marks"
        defaultValue={3}
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
