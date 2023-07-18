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
  const [date, setDate] = useState(dayjs("2023-08-07"));
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

  const updateDate = (newDate) => {
    setDate(newDate);
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
      <input
        style={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          border: "1px solid grey",
          boxSizing: "border-box",
          margin: "10px 20px",
          marginTop: "10px",
          webkitBoxSizing: "border - box " /* Safari/Chrome, other WebKit */,
          mozBoxSing: "border - box" /* Firefox, other Gecko */,
          boxSizing: "border - box" /* Opera/IE 8+ */,
          height: "50px",
        }}
        type="date"
      ></input>
      {/* <DatePicker
        label="Pick the date"
        onChange={updateDate}
        onClick={clearTheFeedback}
        value={date}
        className="datePicker"
        sx={{
          margin: 3,
        }}
      /> */}
      <TextField
        label="Price"
        id="price"
        name="price"
        value={price}
        onChange={updatePrice}
        onClick={clearThePriceField}
        sx={{ margin: 3, marginTop: 0 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{userCurrency}</InputAdornment>
          ),
        }}
      />
      <FormControl sx={{ margin: 3, marginTop: 0 }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={category}
          name="category"
          label="Category"
          onChange={updateCategory}
          onClick={clearTheFeedback}
        >
          <MenuItem
            value="Other"
            sx={{ color: theme.palette.text.selectTextColor }}
          >
            <em>Other</em>
          </MenuItem>
          <MenuItem
            value={"Rent"}
            sx={{ color: theme.palette.text.selectTextColor }}
          >
            Rent
          </MenuItem>
          <MenuItem
            value={"Entertainment"}
            sx={{ color: theme.palette.text.selectTextColor }}
          >
            Entertainment
          </MenuItem>
          <MenuItem
            value={"Food"}
            sx={{ color: theme.palette.text.selectTextColor }}
          >
            Food
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="label"
        label="Label"
        helperText="This field is optional"
        value={label}
        onChange={updateLabel}
        sx={{ margin: 3, marginTop: 0 }}
      />
      {!priceIsValid && (
        <Alert
          sx={{
            fontFamily: userFont,
            fontSize: userFontSize,
            backgroundColor: theme.palette.info.background,
            color: theme.palette.info.text,
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
