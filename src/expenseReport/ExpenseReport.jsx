import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./ExpenseReport.css";

export default function ExpenseReport({ expenseList }) {
  const navigate = useNavigate();

  //Gather all different categories
  let categories = [];
  expenseList.forEach((element) => {
    let currentCategory = element.category;
    if (!categories.includes(currentCategory)) {
      categories.push(currentCategory);
    }
  });
  console.log("All categories: " + categories);

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
          object[currency] = 0;
        }
        // object of this category exists, but not with the current currency
        if (!object[currency]) {
          object[currency] = 0;
        }
        // now the object with this category and currency definitely exsits
        let currentPrice = parseFloat(expense.price);
        // add the new value
        object[currency] += currentPrice;
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

  return (
    <div className="ExpenseReport">
      {expenseReportArray.length == 0 && (
        <h3>I kindly report that you have added no expenses so far.</h3>
      )}
      {expenseReportArray.map((obj) => (
        <div className="expenseReportTable">
          <div className="category">{obj.name}:</div>
          <ul>
            {obj["$"] && <li>{obj["$"]}$</li>}
            {obj["€"] && <li>{obj["€"]}€</li>}
            {obj["PLN"] && <li>{obj["PLN"]}PLN</li>}
            {obj["¥"] && <li>{obj["¥"]}¥</li>}
          </ul>
        </div>
      ))}
      <Button onClick={() => navigate(-1)} variant="outlined">
        Back
      </Button>
    </div>
  );
}
