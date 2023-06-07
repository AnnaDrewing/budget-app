import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddExpense() {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: "green" }}>Here you can add your expenses</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
