import { BsCurrencyExchange } from "react-icons/bs";
import { RxFontSize, RxFontFamily } from "react-icons/rx";
import { CgDarkMode } from "react-icons/cg";
import "./CustomizationBar.css";
import { useState } from "react";
import FontSize from "./FontSize";
import FontFamily from "./FontFamily";

export default function CustomizationBar({ updateFontSize, updateFont }) {
  const [showingCurrency, setShowingCurrency] = useState(false);
  const [showingFontFamily, setShowingFontFamily] = useState(false);
  const [showingFontSize, setShowingFontSize] = useState(false);
  const [showingTheme, setShowingTheme] = useState(false);

  const setCurrency = () => {
    setShowingCurrency(!showingCurrency);
  };
  const setFontFamily = () => {
    setShowingFontFamily(!showingFontFamily);
  };
  const setFontSize = () => {
    setShowingFontSize(!showingFontSize);
  };
  const setTheme = () => {
    setShowingTheme(!showingTheme);
  };
  return (
    <div className="CustomizationBar">
      <div className="CustomizationNav">
        <div
          className="navIcon"
          style={{ backgroundColor: "red" }}
          onClick={setCurrency}
        >
          <BsCurrencyExchange />
        </div>
        <div
          className="navIcon"
          style={{ backgroundColor: "violet" }}
          onClick={setFontFamily}
        >
          <RxFontFamily />
        </div>
        <div
          className="navIcon"
          style={{ backgroundColor: "green" }}
          onClick={setFontSize}
        >
          <RxFontSize />
        </div>
        <div
          className="navIcon"
          style={{ backgroundColor: "yellow" }}
          onClick={setTheme}
        >
          <CgDarkMode />
        </div>
      </div>
      {showingCurrency && (
        <div style={{ backgroundColor: "red" }}>
          <p>Customize the currency</p>
        </div>
      )}
      {showingFontFamily && (
        <div style={{ backgroundColor: "violet" }}>
          <FontFamily updateFont={updateFont} />
        </div>
      )}
      {showingFontSize && (
        <div style={{ backgroundColor: "green" }}>
          <FontSize updateFontSize={updateFontSize} />
        </div>
      )}
      {showingTheme && (
        <div style={{ backgroundColor: "yellow" }}>
          <p>Customize the theme</p>
        </div>
      )}
    </div>
  );
}
