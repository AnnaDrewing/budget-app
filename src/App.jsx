import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import AddExpense from "./addExpense/AddExpense";
import CustomizationBar from "./customization/CustomizationBar";
import ExpenseReport from "./expenseReport/ExpenseReport";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CustomizationBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddExpense />} />
          <Route exact path="/report" element={<ExpenseReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
