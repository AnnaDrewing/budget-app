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

export default function AddExpense({ addExpense }) {
  const navigate = useNavigate();

  const [category, setCategory] = useState("No category");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(dayjs("2023-01-01"));

  const updateCategory = (evt) => {
    setCategory(evt.target.value);
  };

  const updatePrice = (evt) => {
    setPrice(evt.target.value);
  };

  const updateDate = (newDate) => {
    console.log(newDate.$d);
    setDate(newDate);
  };

  const newExpense = () => {
    console.log(
      "Adding new expense of category + " + category + ", and of price " + price
    );
    addExpense(date, category, price);
    //TODO: clear the form fields
    //TODO: add feedback for user
  };

  return (
    <>
      <h3>Here you can add your expenses</h3>
      <DatePicker label="Pick the date" onChange={updateDate} value={date} />
      <TextField
        label="Price"
        id="price"
        name="price"
        value={price}
        onChange={updatePrice}
        InputProps={{
          endAdornment: <InputAdornment position="end">€</InputAdornment>,
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
        >
          <MenuItem value="No category">
            <em>No category</em>
          </MenuItem>
          <MenuItem value={"Rent"}>Rent</MenuItem>
          <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
          <MenuItem value={"Food"}>Food</MenuItem>
        </Select>
      </FormControl>
      <button onClick={newExpense}>Add Expense</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
