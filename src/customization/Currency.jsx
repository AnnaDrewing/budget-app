/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function Currency({ updateCurrency, userCurrency }) {
  const [currency, setCurency] = useState(userCurrency);
  const handleChange = (evt) => {
    const newCurrency = evt.target.value;
    setCurency(newCurrency);
    updateCurrency(newCurrency);
  };

  const theme = useTheme();
  return (
    <>
      <label
        htmlFor="currency"
        style={{
          textAlign: "left",
          margin: "0 10px",
          fontSize: "14px",
          fontFamily: "Helvetica",
          color: theme.palette.text.settingsLabel,
        }}
      >
        Currency:{" "}
      </label>
      <select
        id="currency"
        value={currency}
        name="currency"
        label="Currency"
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
        <option value="€">Euro</option>
        <option value="$">US Dollar</option>
        <option value="PLN">Polish Złoty</option>
        <option value="¥">Yen</option>
      </select>
    </>
  );
}
