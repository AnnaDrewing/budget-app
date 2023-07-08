import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import LastFewExpenses from "./LastFewExpenses";

export default function Home({ expenseList }) {
  const navigate = useNavigate();

  return (
    <>
      <LastFewExpenses expenseList={expenseList} />
      <div className="navigationButtons">
        <Button onClick={() => navigate("/add")} variant="contained">
          Add Expense
        </Button>
        <Button onClick={() => navigate("/report")} variant="outlined">
          Get Report
        </Button>
      </div>
    </>
  );
}
