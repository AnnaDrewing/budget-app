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
import Box from "@mui/material/Box";
import { lightTheme } from "./home/Themes";

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const [userFontSize, setUserFontSize] = useState("15px");
  const [userFont, setUserFont] = useState("Arial");
  const [userCurrency, setUserCurency] = useState("€");
  const [userTheme, setUserTheme] = useState(lightTheme);

  const addExpense = (date, category, price, currency) => {
    setExpenseList((oldExpenseList) => [
      ...oldExpenseList,
      {
        id: uuid(),
        date: date,
        category: category,
        price: price,
        currency: currency,
      },
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
        <Box
          className="App"
          sx={{
            fontSize: userFontSize,
            fontFamily: userFont,
            borderColor: userTheme.palette.primary.main,
          }}
        >
          <CustomizationBar
            updateFontSize={updateFontSize}
            userFontSize={userFontSize}
            updateFont={updateFont}
            userFont={userFont}
            updateCurrency={updateCurrency}
            userCurrency={userCurrency}
            updateTheme={updateTheme}
            userTheme={userTheme}
          />
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    expenseList={expenseList}
                    userFont={userFont}
                    userFontSize={userFontSize}
                  />
                }
              />
              <Route
                exact
                path="/add"
                element={
                  <AddExpense
                    userCurrency={userCurrency}
                    addExpense={addExpense}
                    userFont={userFont}
                    userFontSize={userFontSize}
                  />
                }
              />
              <Route
                exact
                path="/report"
                element={
                  <ExpenseReport
                    expenseList={expenseList}
                    userFont={userFont}
                    userFontSize={userFontSize}
                    userTheme={userTheme}
                    userCurrency={userCurrency}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
