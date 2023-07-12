import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./ExpenseReport.css";
import { v4 as uuid } from "uuid";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { HiInformationCircle } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function ExpenseReport({
  expenseList,
  userFont,
  userFontSize,
  userCurrency,
}) {
  const navigate = useNavigate();

  //Gather all different categories
  let categories = [];
  expenseList.forEach((element) => {
    let currentCategory = element.category;
    if (!categories.includes(currentCategory)) {
      categories.push(currentCategory);
    }
  });

  //Add prices within the same category
  let expenseReportArray = [];
  categories.forEach((category) => {
    let object = {};
    // Create an object for each expense category
    expenseList.forEach((expense) => {
      let currency = expense.currency;
      if (expense.category == category) {
        // Check if object with this category/currency already exists
        if (!object.name) {
          // create a new object with this category/currency and value 0
          object.name = category;
          object[currency] = 0.0;
        }
        // object of this category exists, but not with the current currency
        if (!object[currency]) {
          object[currency] = 0.0;
        }
        // now the object with this category and currency definitely exsits
        let newValue = object[currency] + parseFloat(expense.price);
        // add the new value
        object[currency] = Math.round(newValue * 100) / 100;
        object.id = uuid();
      }
    });
    expenseReportArray.push(object);
  });

  // TODO - create an object with sum of expenses regardless of category, grouped by currency
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
  console.log(allExpensesObject);
  // TODO: the establish main currency - that has to change dynamically!
  // calculate one value summing up all the expenses in the main currency
  // display this value in the beginning of the table
  let total = 0.0;
  if (userCurrency == "€") {
    console.log("User currency is Euro now!");
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
    console.log("User currency is Dollar now!");
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
    console.log("User currency is Zloty now!");
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
    console.log("User currency is Yen now!");
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

    // names must be equal
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
                <li>{allExpensesObject["$"]} $</li>
              )}
              {allExpensesObject["€"] != 0.0 && (
                <li>{allExpensesObject["€"]} €</li>
              )}
              {allExpensesObject["PLN"] != 0.0 && (
                <li>{allExpensesObject["PLN"]} PLN</li>
              )}
              {allExpensesObject["¥"] != 0.0 && (
                <li>{allExpensesObject["¥"]} ¥</li>
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
              {obj["$"] != 0.0 && <li>{obj["$"]} $</li>}
              {obj["€"] != 0.0 && <li>{obj["€"]} €</li>}
              {obj["PLN"] != 0.0 && <li>{obj["PLN"]} PLN</li>}
              {obj["¥"] != 0.0 && <li>{obj["¥"]} ¥</li>}
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
