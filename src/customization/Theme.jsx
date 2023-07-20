/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  lightBlue,
  darkBlue,
  simpleLight,
  simpleDark,
  wine,
  honey,
  ocean,
  forest,
} from "../home/Themes";

export default function Theme({ updateTheme, userTheme }) {
  const [theme, setTheme] = useState(userTheme);

  const handleChange = (evt) => {
    switch (evt.target.value) {
      case "lightBlue":
        updateTheme(lightBlue);
        setTheme(lightBlue);
        break;
      case "darkBlue":
        updateTheme(darkBlue);
        setTheme(darkBlue);
        break;
      case "simpleLight":
        updateTheme(simpleLight);
        setTheme(simpleLight);
        break;
      case "simpleDark":
        updateTheme(simpleDark);
        setTheme(simpleDark);
        break;
      case "wine":
        updateTheme(wine);
        setTheme(wine);
        break;
      case "honey":
        updateTheme(honey);
        setTheme(honey);
        break;
      case "ocean":
        updateTheme(ocean);
        setTheme(ocean);
        break;
      case "forest":
        updateTheme(forest);
        setTheme(forest);
        break;
    }
  };

  return (
    <>
      <label
        htmlFor="theme"
        style={{
          textAlign: "left",
          margin: "0 10px",
          fontSize: "14px",
          fontFamily: "Helvetica",
          color: theme.palette.text.settingsLabel,
        }}
      >
        Theme:{" "}
      </label>
      <select
        id="theme"
        value={theme.name}
        name="theme"
        label="Theme"
        onChange={handleChange}
        style={{
          width: "200px",
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          fontFamily: "Helvetica",
          fontSize: "16px",
          border: "1px solid lightgrey",
          boxSizing: "border-box",
          margin: "15px auto",
          marginTop: "5px",
          padding: "5px",
          height: "40px",
          WebkitBoxSizing: "content - box " /* Safari/Chrome, other WebKit */,
          MozBoxSing: "content - box" /* Firefox, other Gecko */,
          boxSizing: "content - box" /* Opera/IE 8+ */,
        }}
      >
        <option value="lightBlue">Light Blue</option>
        <option value="darkBlue">Dark Blue</option>
        <option value="simpleLight">Simple Light</option>
        <option value="simpleDark">Simple Dark</option>
        <option value="wine">Wine (light)</option>
        <option value="honey">Honey (light)</option>
        <option value="ocean">Ocean (dark)</option>
        <option value="forest">Forest (dark)</option>
      </select>
    </>
  );
}
