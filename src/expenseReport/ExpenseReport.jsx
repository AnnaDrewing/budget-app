import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./ExpenseReport.css";
import { v4 as uuid } from "uuid";
import { useTheme } from "@mui/material/styles";

export default function ExpenseReport({
  expenseList,
  userFont,
  userFontSize,
  userTheme,
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
              {obj["$"] && <li>{obj["$"]} $</li>}
              {obj["€"] && <li>{obj["€"]} €</li>}
              {obj["PLN"] && <li>{obj["PLN"]} PLN</li>}
              {obj["¥"] && <li>{obj["¥"]} ¥</li>}
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
