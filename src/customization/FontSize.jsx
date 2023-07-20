/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function FontSize({ updateFontSize, userFontSize, userFont }) {
  // changing font size from string to int
  let defaultFont = 0;
  defaultFont = parseInt(userFontSize.substring(0, userFontSize.length - 2));
  // font size as state here must be an integer
  const [fontSize, setFontSize] = useState(defaultFont);
  const handleChange = (evt) => {
    let newValue = evt.target.value;
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
      value: 20,
      label: "20",
    },
  ];

  const theme = useTheme();

  return (
    <>
      <label
        htmlFor="font-size"
        style={{
          textAlign: "left",
          fontSize: "14px",
          fontFamily: "Helvetica",
          color: theme.palette.text.settingsLabel,
        }}
      >
        Font size: {fontSize} px
      </label>
      <input
        type="range"
        id="font-size"
        name="font-size"
        min="10"
        max="20"
        step="1"
        value={fontSize}
        onChange={handleChange}
        style={{
          WebkitAppearance: "none",
          background: theme.palette.primary.main,
          margin: "15px auto",
          height: "10px",
          border: "1px solid",
          borderColor: theme.palette.text.settingsLabel,
          borderRadius: "5px",
        }}
      ></input>
    </>
  );
}
