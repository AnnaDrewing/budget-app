/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./AddExpense.css";
import { useTheme } from "@mui/material/styles";

export default function AddExpense({
  addExpense,
  userCurrency,
  userFont,
  userFontSize,
}) {
  const navigate = useNavigate();

  const [category, setCategory] = useState("Other");
  const [price, setPrice] = useState("0.00");
  const [priceIsValid, setPriceIsValid] = useState(false);
  const [date, setDate] = useState("2023-01-08");
  const [operationSuccessful, setOperationSuccessful] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [label, setLabel] = useState("");

  const updateCategory = (evt) => {
    setCategory(evt.target.value);
  };

  const updatePrice = (evt) => {
    const newPrice = evt.target.value;
    setPrice(newPrice);
    validatePrice(newPrice);
  };

  const updateLabel = (evt) => {
    setLabel(evt.target.value);
  };

  const setDefaultPrice = () => {
    setPrice("0.00");
    setActiveButton(false);
  };

  const clearThePriceField = () => {
    clearTheFeedback();
    setPrice("");
  };

  const setDefaultCategory = () => {
    setCategory("Other");
  };

  const setDefaultLabel = () => {
    setLabel("");
  };

  const validatePrice = (price) => {
    const regex = new RegExp("^\\d+(\\.\\d{1,2})$", "g");
    if (regex.test(price)) {
      setPriceIsValid(true);
      setActiveButton(true);
    } else {
      setPriceIsValid(false);
      setActiveButton(false);
    }
  };

  const updateDate = (evt) => {
    setDate(evt.target.value);
  };

  const newExpense = () => {
    addExpense(date, category, price, userCurrency, label);
    setDefaultPrice();
    setDefaultCategory();
    setDefaultLabel();
    setOperationSuccessful(true);
  };

  const clearTheFeedback = () => {
    setOperationSuccessful(false);
  };

  const theme = useTheme();

  return (
    <Box className="AddExpense">
      <label
        htmlFor="price"
        style={{
          textAlign: "left",
          margin: "0 10px",
          fontSize: "0.8em",
          fontFamily: userFont,
        }}
      >
        Date of purchase:
      </label>
      <input
        style={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          fontFamily: "Helvetica",
          fontSize: "16px",
          border: "1px solid lightgrey",
          boxSizing: "border-box",
          margin: "15px auto",
          marginTop: "5px",
          padding: "5px",
          width: "351.1px",
          height: "56px",
          WebkitBoxSizing: "content - box " /* Safari/Chrome, other WebKit */,
          MozBoxSing: "content - box" /* Firefox, other Gecko */,
          boxSizing: "content - box" /* Opera/IE 8+ */,
        }}
        onChange={updateDate}
        onClick={clearTheFeedback}
        type="date"
        value={date}
      ></input>
      <label
        htmlFor="price"
        style={{
          textAlign: "left",
          margin: "0 10px",
          fontSize: "0.8em",
          fontFamily: userFont,
        }}
      >
        Price in: {userCurrency}
      </label>
      <input
        type="text"
        label="price"
        id="price"
        value={price}
        onChange={updatePrice}
        onClick={clearThePriceField}
        style={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          fontFamily: "Helvetica",
          fontSize: "16px",
          border: "1px solid lightgrey",
          boxSizing: "border-box",
          margin: "15px auto",
          marginTop: "5px",
          padding: "5px",
          width: "351.1px",
          height: "56px",
          WebkitBoxSizing: "content - box " /* Safari/Chrome, other WebKit */,
          MozBoxSing: "content - box" /* Firefox, other Gecko */,
          boxSizing: "content - box" /* Opera/IE 8+ */,
        }}
      ></input>
      <label
        htmlFor="category-label"
        style={{
          textAlign: "left",
          margin: "0 10px",
          fontSize: "0.8em",
          fontFamily: userFont,
        }}
      >
        Category:
      </label>
      <select
        id="category"
        value={category}
        name="category"
        onChange={updateCategory}
        onClick={clearTheFeedback}
        style={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          fontFamily: "Helvetica",
          fontSize: "16px",
          border: "1px solid lightgrey",
          boxSizing: "border-box",
          margin: "15px auto",
          marginTop: "5px",
          padding: "5px",
          width: "351.1px",
          height: "56px",
          WebkitBoxSizing: "content - box " /* Safari/Chrome, other WebKit */,
          MozBoxSing: "content - box" /* Firefox, other Gecko */,
          boxSizing: "content - box" /* Opera/IE 8+ */,
        }}
      >
        <option value="Other">Other</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Rent">Rent</option>
      </select>
      <label
        htmlFor="label"
        style={{
          textAlign: "left",
          margin: "0 10px",
          fontSize: "0.8em",
          fontFamily: userFont,
        }}
      >
        (Optional) Label:{" "}
      </label>
      <input
        type="text"
        id="label"
        value={label}
        onChange={updateLabel}
        onClick={clearTheFeedback}
        style={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          fontFamily: "Helvetica",
          fontSize: "16px",
          border: "1px solid lightgrey",
          boxSizing: "border-box",
          margin: "15px auto",
          marginTop: "5px",
          padding: "5px",
          width: "351.1px",
          height: "56px",
          WebkitBoxSizing: "content - box " /* Safari/Chrome, other WebKit */,
          MozBoxSing: "content - box" /* Firefox, other Gecko */,
          boxSizing: "content - box" /* Opera/IE 8+ */,
        }}
      ></input>

      {!priceIsValid && (
        <Alert
          sx={{
            fontFamily: userFont,
            fontSize: userFontSize,
            backgroundColor: theme.palette.info.background,
            color: theme.palette.info.text,
            borderTop: "3px solid",
            borderBottom: "3px solid",
            borderColor: theme.palette.primary.main,
          }}
          severity="info"
        >
          Please make sure you use the valid price format, e.g. 9.99
        </Alert>
      )}
      {operationSuccessful && (
        <Alert
          sx={{
            fontFamily: userFont,
            fontSize: userFontSize,
            fontWeight: "700",
            backgroundColor: theme.palette.success.background,
            color: theme.palette.success.text,
          }}
          severity="success"
        >
          Your expense has been added
        </Alert>
      )}
      <Box sx={{ marginBottom: 3, marginTop: 2 }}>
        <Button
          disabled={!activeButton}
          onClick={newExpense}
          variant="contained"
          sx={{ fontFamily: userFont, fontSize: userFontSize }}
        >
          Add Expense
        </Button>
        <Button
          sx={{ fontFamily: userFont, fontSize: userFontSize }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}
