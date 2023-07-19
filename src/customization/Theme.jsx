/* eslint-disable react/prop-types */
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
      <label
        htmlFor="theme"
        style={{
          textAlign: "left",
          margin: "0 10px",
          fontSize: "14px",
          fontFamily: "Helvetica",
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
          webkitBoxSizing: "content - box " /* Safari/Chrome, other WebKit */,
          mozBoxSing: "content - box" /* Firefox, other Gecko */,
          boxSizing: "content - box" /* Opera/IE 8+ */,
        }}
      >
        <option value="lightTheme">Light</option>
        <option value="darkTheme">Dark</option>
      </select>
    </>
  );
}
