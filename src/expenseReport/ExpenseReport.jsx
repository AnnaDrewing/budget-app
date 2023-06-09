import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { v4 as uuid } from "uuid";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineInfoCircle } from "react-icons/ai";
//import "./ExpenseReport.css";

export default function ExpenseReport({
  expenseList,
  userFont,
  userFontSize,
  userCurrency,
}) {
  const navigate = useNavigate();

  //Gathering all different categories
  let categories = [];
  expenseList.forEach((element) => {
    let currentCategory = element.category;
    if (!categories.includes(currentCategory)) {
      categories.push(currentCategory);
    }
  });

  let expenseReportArray = [];
  categories.forEach((category) => {
    let object = {
      id: uuid(),
    };
    // Creating an object for each expense category
    expenseList.forEach((expense) => {
      let currency = expense.currency;
      if (expense.category == category) {
        if (!object.name) {
          object.name = category;
          object[currency] = 0.0;
        }
        if (!object[currency]) {
          object[currency] = 0.0;
        }
        let newValue = object[currency] + parseFloat(expense.price);
        object[currency] = Math.round(newValue * 100) / 100;
        object.id = uuid();
      }
    });
    expenseReportArray.push(object);
  });

  // Creating an object with sum of expenses regardless of category, grouped by currency
  let allExpensesObjectUuid = uuid();
  const allExpensesObject = {
    "€": 0.0,
    $: 0.0,
    PLN: 0.0,
    "¥": 0.0,
  };
  expenseReportArray.forEach((obj) => {
    if (!obj["€"]) {
      obj["€"] = 0.0;
    }
    let allEuroSpent = allExpensesObject["€"] + obj["€"];
    allExpensesObject["€"] = Math.round(allEuroSpent * 100) / 100;
    if (!obj["$"]) {
      obj["$"] = 0.0;
    }
    let allDollarsSpent = allExpensesObject["$"] + obj["$"];
    allExpensesObject["$"] = Math.round(allDollarsSpent * 100) / 100;
    if (!obj["PLN"]) {
      obj["PLN"] = 0.0;
    }
    let allZlotySpent = allExpensesObject["PLN"] + obj["PLN"];
    allExpensesObject["PLN"] = Math.round(allZlotySpent * 100) / 100;
    if (!obj["¥"]) {
      obj["¥"] = 0.0;
    }
    let allYenSpent = allExpensesObject["¥"] + obj["¥"];
    allExpensesObject["¥"] = Math.round(allYenSpent * 100) / 100;
  });

  // Calculating the total in different currencies
  let total = 0.0;
  if (userCurrency == "€") {
    let dollarToEuro = 0.91;
    let zlotyToEuro = 0.22;
    let yenToEuro = 0.0064;
    total =
      allExpensesObject["€"] +
      allExpensesObject["$"] * dollarToEuro +
      allExpensesObject["PLN"] * zlotyToEuro +
      allExpensesObject["¥"] * yenToEuro;
    total = Math.round(total * 100) / 100;
  }
  if (userCurrency == "$") {
    let euroToDollar = 1.1;
    let zlotyToDollar = 0.25;
    let yenToDollar = 0.0071;
    total =
      allExpensesObject["$"] +
      allExpensesObject["€"] * euroToDollar +
      allExpensesObject["PLN"] * zlotyToDollar +
      allExpensesObject["¥"] * yenToDollar;
    total = Math.round(total * 100) / 100;
  }
  if (userCurrency == "PLN") {
    let euroToZloty = 4.44;
    let dollarToZloty = 4.04;
    let yenToZloty = 0.03;
    total =
      allExpensesObject["PLN"] +
      allExpensesObject["€"] * euroToZloty +
      allExpensesObject["$"] * dollarToZloty +
      allExpensesObject["¥"] * yenToZloty;
    total = Math.round(total * 100) / 100;
  }
  if (userCurrency == "¥") {
    let euroToYen = 154.47;
    let dollarToYen = 140.54;
    let zlotyToYen = 34.76;
    total =
      allExpensesObject["¥"] +
      allExpensesObject["€"] * euroToYen +
      allExpensesObject["PLN"] * zlotyToYen +
      allExpensesObject["$"] * dollarToYen;
    total = Math.round(total * 100) / 100;
  }

  // sorting categories by names, alphabetically
  expenseReportArray.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  const theme = useTheme();

  return (
    <Box className="ExpenseReport">
      {expenseReportArray.length == 0 && (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{
              padding: "3px",
              margin: "15px",
              color: theme.palette.text.primary,
              letterSpacing: "3px",
              fontSize: userFontSize,
              fontFamily: userFont,
            }}
          >
            I kindly report that you have added no expenses so far.
          </Typography>
          <img
            src="https://raw.githubusercontent.com/AnnaDrewing/budget-app/main/public/5.png"
            width="90%"
          />
        </Box>
      )}
      <>
        {/* Sum of the expenses */}
        {expenseReportArray.length > 0 && (
          <>
            <Typography
              sx={{
                padding: "3px",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                letterSpacing: "3px",
                fontSize: userFontSize,
                fontFamily: userFont,
              }}
            >
              Summary:
            </Typography>
            <ul className="expenseReportTable">
              {allExpensesObject["$"] != 0.0 && (
                <li key={allExpensesObjectUuid + "$"}>
                  {allExpensesObject["$"]} $
                </li>
              )}
              {allExpensesObject["€"] != 0.0 && (
                <li key={allExpensesObjectUuid + "€"}>
                  {allExpensesObject["€"]} €
                </li>
              )}
              {allExpensesObject["PLN"] != 0.0 && (
                <li key={allExpensesObjectUuid + "PLN"}>
                  {allExpensesObject["PLN"]} PLN
                </li>
              )}
              {allExpensesObject["¥"] != 0.0 && (
                <li key={allExpensesObjectUuid + "¥"}>
                  {allExpensesObject["¥"]} ¥
                </li>
              )}
            </ul>
            <Divider
              variant="middle"
              sx={{ color: theme.palette.primary.main }}
            >
              Total in {userCurrency}: {total}
              <Tooltip title="You can change the currency displayed here by changing the settings in the main menu">
                <IconButton>
                  <AiOutlineInfoCircle
                    style={{ color: theme.palette.primary.main }}
                  />
                </IconButton>
              </Tooltip>
            </Divider>
          </>
        )}
        {/* Expenses by category */}
        {expenseReportArray.map((obj) => (
          <Box
            className="expenseReportTable"
            sx={{
              boxShadow: `0.1px 0.1px 2px ${theme.palette.primary.main}`,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography
              sx={{
                padding: "3px",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                letterSpacing: "3px",
                fontSize: userFontSize,
                fontFamily: userFont,
              }}
            >
              {obj.name}:
            </Typography>
            <ul>
              {obj["$"] != 0.0 && <li key={obj.id + "$"}>{obj["$"]} $</li>}
              {obj["€"] != 0.0 && <li key={obj.id + "€"}>{obj["€"]} €</li>}
              {obj["PLN"] != 0.0 && (
                <li key={obj.id + "PLN"}>{obj["PLN"]} PLN</li>
              )}
              {obj["¥"] != 0.0 && <li key={obj.id + "¥"}>{obj["¥"]} ¥</li>}
            </ul>
          </Box>
        ))}
        <Button
          sx={{
            fontFamily: userFont,
            fontSize: userFontSize,
            marginBottom: 3,
            marginLeft: 3,
            marginRight: 3,
          }}
          onClick={() => navigate(-1)}
          variant="outlined"
        >
          Back
        </Button>
      </>
    </Box>
  );
}
