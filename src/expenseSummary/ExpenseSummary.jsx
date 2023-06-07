import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExpenseSummary() {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: "red" }}>Here is the summary of your expenses</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
