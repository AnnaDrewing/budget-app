import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

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

  categories.sort();
  console.log(categories);

  const list = expenseReportArray.forEach(() => <li>Hi</li>);
  // return Object.keys(object).forEach((prop) => <li>{prop}</li>);

  return (
    <>
      <h3>Here is the report on your expenses</h3>
      {expenseReportArray.map((obj) => (
        <>
          <p>Here is the sum of your expenses in the category {obj.name}:</p>
          <ul>
            {obj["$"] && <li>{obj["$"]}$</li>}
            {obj["€"] && <li>{obj["€"]}€</li>}
            {obj["PLN"] && <li>{obj["PLN"]}PLN</li>}
            {obj["¥"] && <li>{obj["¥"]}¥</li>}
          </ul>
        </>
      ))}
      <Button onClick={() => navigate(-1)}>Back</Button>
    </>
  );
}
