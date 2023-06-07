import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExpenseReport() {
  const navigate = useNavigate();

  return (
    <>
      <h3>Here is the report on your expenses</h3>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
