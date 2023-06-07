import React from "react";
import { useNavigate } from "react-router-dom";
import CustomizationBar from "../customization/CustomizationBar";
import ExpenseSummary from "../expenseReport/ExpenseReport";
import ExpensesSoFar from "./ExpensesSoFar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is the home page</h1>
      <ExpensesSoFar />
      <button onClick={() => navigate("/add")}>Add Expense</button>
      <button onClick={() => navigate("/report")}>Get Report</button>

      {/* Crediting the icons */}
      <p>
        <a
          href="https://www.flaticon.com/free-icons/currency"
          title="currency icons"
        >
          Currency icons created by Eucalyp - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/font" title="font icons">
          Font icons created by Smashicons - Flaticon
        </a>
      </p>
    </>
  );
}
