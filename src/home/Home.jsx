import { useNavigate } from "react-router-dom";
import ExpensesSoFar from "./ExpensesSoFar";
import Button from "@mui/material/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is the home page</h1>
      <ExpensesSoFar />
      <Button onClick={() => navigate("/add")} variant="contained">
        Add Expense
      </Button>
      <Button onClick={() => navigate("/report")} variant="outlined">
        Get Report
      </Button>

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
