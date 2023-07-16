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

  // Calculating the total in different currencies
  const sumToEuro = (euro, dollar, zloty, yen) => {
    let dollarToEuro = 0.91;
    let zlotyToEuro = 0.22;
    let yenToEuro = 0.0064;
    return (
      Math.round(
        (euro + dollar * dollarToEuro + zloty * zlotyToEuro + yen * yenToEuro) *
          100
      ) / 100
    );
  };

  const sumToDollar = (euro, dollar, zloty, yen) => {
    let euroToDollar = 1.1;
    let zlotyToDollar = 0.25;
    let yenToDollar = 0.0071;
    return (
      Math.round(
        (dollar +
          euro * euroToDollar +
          zloty * zlotyToDollar +
          yen * yenToDollar) *
          100
      ) / 100
    );
  };

  const sumToZloty = (euro, dollar, zloty, yen) => {
    let euroToZloty = 4.44;
    let dollarToZloty = 4.04;
    let yenToZloty = 0.03;
    return (
      Math.round(
        (zloty +
          euro * euroToZloty +
          dollar * dollarToZloty +
          yen * yenToZloty) *
          100
      ) / 100
    );
  };

  const sumToYen = (euro, dollar, zloty, yen) => {
    let euroToYen = 154.47;
    let dollarToYen = 140.54;
    let zlotyToYen = 34.76;
    return (
      Math.round(
        (yen + euro * euroToYen + dollar * dollarToYen + zloty * zlotyToYen) *
          100
      ) / 100
    );
  };

  let expenseReportArray = [];
  categories.forEach((category) => {
    let categoryObj = {
      id: uuid(),
      total: 0.0,
      "€": 0.0,
      $: 0.0,
      PLN: 0.0,
      "¥": 0.0,
    };
    // Creating an object for each expense category
    expenseList.forEach((expense) => {
      let currency = expense.currency;
      if (expense.category == category) {
        if (!categoryObj.name) {
          categoryObj.name = category;
          // categoryObj[currency] = 0.0;
        }
        if (!categoryObj[currency]) {
          // categoryObj[currency] = 0.0;
        }
        let newValue = categoryObj[currency] + parseFloat(expense.price);
        categoryObj[currency] = Math.round(newValue * 100) / 100;
        categoryObj.id = uuid();
      }
    });
    // calculate the total for each category
    if (userCurrency == "€") {
      categoryObj.total = sumToEuro(
        categoryObj["€"],
        categoryObj["$"],
        categoryObj["PLN"],
        categoryObj["¥"]
      ).toFixed(2);
    }
    if (userCurrency == "$") {
      categoryObj.total = sumToDollar(
        categoryObj["€"],
        categoryObj["$"],
        categoryObj["PLN"],
        categoryObj["¥"]
      ).toFixed(2);
    }
    if (userCurrency == "PLN") {
      categoryObj.total = sumToZloty(
        categoryObj["€"],
        categoryObj["$"],
        categoryObj["PLN"],
        categoryObj["¥"]
      ).toFixed(2);
    }
    if (userCurrency == "¥") {
      categoryObj.total = sumToYen(
        categoryObj["€"],
        categoryObj["$"],
        categoryObj["PLN"],
        categoryObj["¥"]
      ).toFixed(2);
    }
    expenseReportArray.push(categoryObj);
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

  let total = 0.0;
  if (userCurrency == "€") {
    total = sumToEuro(
      allExpensesObject["€"],
      allExpensesObject["$"],
      allExpensesObject["PLN"],
      allExpensesObject["¥"]
    ).toFixed(2);
  }
  if (userCurrency == "$") {
    total = sumToDollar(
      allExpensesObject["€"],
      allExpensesObject["$"],
      allExpensesObject["PLN"],
      allExpensesObject["¥"]
    ).toFixed(2);
  }
  if (userCurrency == "PLN") {
    total = sumToZloty(
      allExpensesObject["€"],
      allExpensesObject["$"],
      allExpensesObject["PLN"],
      allExpensesObject["¥"]
    ).toFixed(2);
  }
  if (userCurrency == "¥") {
    total = sumToYen(
      allExpensesObject["€"],
      allExpensesObject["$"],
      allExpensesObject["PLN"],
      allExpensesObject["¥"]
    ).toFixed(2);
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
            src="https://raw.githubusercontent.com/AnnaDrewing/budget-app/main/public/32.png"
            width="90%"
          />
        </Box>
      )}
      <>
        {/* Sum of the expenses */}
        {expenseReportArray.length > 0 && (
          <Box sx={{ width: "300px", margin: "20px auto" }}>
            <Typography
              sx={{
                padding: "3px",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
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
              sx={{
                "&.MuiDivider-root": {
                  "&::before": {
                    borderTop: `thin solid ${theme.palette.primary.main}`,
                  },
                  "&::after": {
                    borderTop: `thin solid ${theme.palette.primary.main}`,
                  },
                },
                fontWeight: "700",
              }}
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
          </Box>
        )}
        {/* Expenses by category */}
        {expenseReportArray.map((obj) => (
          <Box
            className="expenseReportTable"
            sx={{
              border: `0.5px solid ${theme.palette.primary.main}`,
            }}
          >
            <Box
              sx={{
                padding: "3px",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              <Typography
                sx={{
                  letterSpacing: "2px",
                  fontSize: userFontSize,
                  fontFamily: userFont,
                }}
              >
                {obj.name}:
              </Typography>
              <Typography
                style={{
                  textAlign: "right",
                  margin: 0,
                  letterSpacing: "2px",
                  fontSize: userFontSize,
                  fontFamily: userFont,
                }}
              >
                {obj.total} {userCurrency}
              </Typography>
            </Box>
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
            marginTop: 3,
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
