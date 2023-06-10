import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import AddExpense from "./addExpense/AddExpense";
import CustomizationBar from "./customization/CustomizationBar";
import ExpenseReport from "./expenseReport/ExpenseReport";
import { v4 as uuid } from "uuid";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const addExpense = (date, cat, money) => {
    console.log(expenseList);
    console.log("Category is: " + cat);
    console.log("Price is: " + money);
    setExpenseList((oldExpenseList) => [
      ...oldExpenseList,
      { id: uuid(), date: date, category: cat, price: money },
    ]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <CustomizationBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/add"
              element={<AddExpense addExpense={addExpense} />}
            />
            <Route exact path="/report" element={<ExpenseReport />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LocalizationProvider>
  );
}

export default App;
