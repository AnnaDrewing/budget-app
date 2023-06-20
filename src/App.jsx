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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const [userFontSize, setUserFontSize] = useState("10px");
  const [userFont, setUserFont] = useState("Arial");
  const [userCurrency, setUserCurency] = useState("€");
  const [userTheme, setUserTheme] = useState(
    createTheme({
      palette: {
        mode: "light",
      },
    })
  );

  const addExpense = (date, cat, money) => {
    console.log(expenseList);
    console.log("Category is: " + cat);
    console.log("Price is: " + money);
    setExpenseList((oldExpenseList) => [
      ...oldExpenseList,
      { id: uuid(), date: date, category: cat, price: money },
    ]);
  };
  const updateCurrency = (currency) => {
    setUserCurency(currency);
  };
  const updateFontSize = (fontSize) => {
    setUserFontSize(fontSize);
  };
  const updateFont = (font) => {
    setUserFont(font);
  };
  const updateTheme = (theme) => {
    setUserTheme(theme);
  };

  return (
    <ThemeProvider theme={userTheme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CustomizationBar
          updateFontSize={updateFontSize}
          updateFont={updateFont}
          updateCurrency={updateCurrency}
          updateTheme={updateTheme}
        />
        <div
          className="App"
          style={{ fontSize: userFontSize, fontFamily: userFont }}
        >
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/add"
                element={
                  <AddExpense
                    userCurrency={userCurrency}
                    addExpense={addExpense}
                  />
                }
              />
              <Route exact path="/report" element={<ExpenseReport />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
