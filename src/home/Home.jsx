import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import LastFewExpenses from "./LastFewExpenses";
import Box from "@mui/material/Box";

export default function Home({ expenseList, userFont, userFontSize }) {
  const navigate = useNavigate();

  return (
    <>
      <LastFewExpenses
        expenseList={expenseList}
        userFont={userFont}
        userFontSize={userFontSize}
      />
      <Box sx={{ marginBottom: 3 }}>
        <Button
          sx={{ fontFamily: userFont, fontSize: userFontSize }}
          onClick={() => navigate("/add")}
          variant="contained"
        >
          Add Expense
        </Button>
        <Button
          sx={{ fontFamily: userFont, fontSize: userFontSize }}
          onClick={() => navigate("/report")}
          variant="outlined"
        >
          Get Report
        </Button>
      </Box>
    </>
  );
}
