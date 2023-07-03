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
import "./AddExpense.css";

export default function AddExpense({ addExpense, userCurrency }) {
  const navigate = useNavigate();

  const [category, setCategory] = useState("Other");
  const [price, setPrice] = useState("0,00");
  const [priceIsValid, setPriceIsValid] = useState(false);
  const [date, setDate] = useState(dayjs("2023-01-01"));
  const [operationSuccessful, setOperationSuccessful] = useState(false);

  const updateCategory = (evt) => {
    setCategory(evt.target.value);
  };

  const updatePrice = (evt) => {
    const newPrice = evt.target.value;
    setPrice(newPrice);
    validatePrice(newPrice);
  };

  const setDefaultPrice = () => {
    setPrice("0,00");
  };

  const clearThePriceField = () => {
    clearTheFeedback();
    setPrice("");
  };

  const setDefaultCategory = () => {
    setCategory("Other");
  };

  const validatePrice = (price) => {
    const regex = new RegExp("^\\d+(,\\d{1,2})$", "g");
    if (regex.test(price)) {
      setPriceIsValid(true);
      console.log("Price is valid");
    } else {
      setPriceIsValid(false);
      console.log("Price is invalid");
    }
  };

  const updateDate = (newDate) => {
    console.log(newDate.$d);
    setDate(newDate);
  };

  const newExpense = () => {
    console.log(
      "Adding new expense of category + " + category + ", and of price " + price
    );
    addExpense(date, category, price, userCurrency);
    setDefaultPrice();
    setDefaultCategory();
    setPriceIsValid(true);
    setOperationSuccessful(true);
  };

  const clearTheFeedback = () => {
    setOperationSuccessful(false);
  };

  return (
    <div className="AddExpense">
      <DatePicker
        label="Pick the date"
        onChange={updateDate}
        onClick={clearTheFeedback}
        value={date}
      />
      <TextField
        label="Price"
        id="price"
        name="price"
        value={price}
        onChange={updatePrice}
        onClick={clearThePriceField}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{userCurrency}</InputAdornment>
          ),
        }}
      />
      <FormControl>
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
          <MenuItem value="Other">
            <em>Other</em>
          </MenuItem>
          <MenuItem value={"Rent"}>Rent</MenuItem>
          <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
          <MenuItem value={"Food"}>Food</MenuItem>
        </Select>
      </FormControl>
      {!priceIsValid && (
        <Alert severity="info">
          Please make sure you use the valid price format, e.g. 9,99
        </Alert>
      )}
      {operationSuccessful && (
        <Alert severity="success">Your expense has been added</Alert>
      )}
      <div className="navigationButtons">
        <Button
          disabled={!priceIsValid}
          onClick={newExpense}
          variant="contained"
        >
          Add Expense
        </Button>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
}
