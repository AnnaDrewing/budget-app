import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import AddExpense from "./addExpense/AddExpense";
import ExpenseSummary from "./expenseSummary/ExpenseSummary";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddExpense />} />
          <Route exact path="/summary" element={<ExpenseSummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
