import React from "react";
import { useNavigate } from "react-router-dom";
import CustomizationBar from "../customization/CustomizationBar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <CustomizationBar />
      <h1>This is the main page</h1>
      <button onClick={() => navigate("/add")}>Add Expense</button>
      <button onClick={() => navigate("/summary")}>Get Summary</button>
      {/* Crediting the icons */}
      <p>
        <a
          href="https://www.flaticon.com/free-icons/currency"
          title="currency icons"
        >
          Currency icons created by Eucalyp - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/font" title="font icons">
          Font icons created by Smashicons - Flaticon
        </a>
      </p>
    </>
  );
}
