/* eslint-disable react/prop-types */
import { BsCurrencyExchange } from "react-icons/bs";
import { RxFontSize, RxFontFamily } from "react-icons/rx";
import { CgDarkMode } from "react-icons/cg";
import "./CustomizationBar.css";
import { useState } from "react";
import FontSize from "./FontSize";
import FontFamily from "./FontFamily";
import Currency from "./Currency";
import Theme from "./Theme";

export default function CustomizationBar({
  updateFontSize,
  updateFont,
  updateCurrency,
  updateTheme,
}) {
  const [showingCurrency, setShowingCurrency] = useState(false);
  const [showingFontFamily, setShowingFontFamily] = useState(false);
  const [showingFontSize, setShowingFontSize] = useState(false);
  const [showingTheme, setShowingTheme] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const toggleCurrencySetting = () => {
    if (isSettingOpen) {
      setShowingFontFamily(false);
      setShowingFontSize(false);
      setShowingTheme(false);
    }
    setShowingCurrency(!showingCurrency);
    setIsSettingOpen(!showingCurrency);
  };
  const toggleFontFamilySetting = () => {
    if (isSettingOpen) {
      setShowingCurrency(false);
      setShowingFontSize(false);
      setShowingTheme(false);
    }
    setShowingFontFamily(!showingFontFamily);
    setIsSettingOpen(!showingFontFamily);
  };
  const toggleFontSizeSetting = () => {
    if (isSettingOpen) {
      setShowingCurrency(false);
      setShowingFontFamily(false);
      setShowingTheme(false);
    }
    setShowingFontSize(!showingFontSize);
    setIsSettingOpen(!showingFontSize);
  };
  const toggleThemeSetting = () => {
    if (isSettingOpen) {
      setShowingCurrency(false);
      setShowingFontSize(false);
      setShowingFontFamily(false);
    }
    setShowingTheme(!showingTheme);
    setIsSettingOpen(!showingTheme);
  };
  return (
    <div className="CustomizationBar">
      <div className="CustomizationNav">
        <div
          className="navIcon"
          style={{ backgroundColor: "red" }}
          onClick={toggleCurrencySetting}
        >
          <BsCurrencyExchange />
        </div>
        <div
          className="navIcon"
          style={{ backgroundColor: "violet" }}
          onClick={toggleFontFamilySetting}
        >
          <RxFontFamily />
        </div>
        <div
          className="navIcon"
          style={{ backgroundColor: "green" }}
          onClick={toggleFontSizeSetting}
        >
          <RxFontSize />
        </div>
        <div
          className="navIcon"
          style={{ backgroundColor: "yellow" }}
          onClick={toggleThemeSetting}
        >
          <CgDarkMode />
        </div>
      </div>
      {showingCurrency && (
        <div className="settingBlock" style={{ backgroundColor: "red" }}>
          <Currency className="settingForm" updateCurrency={updateCurrency} />
        </div>
      )}
      {showingFontFamily && (
        <div className="settingBlock" style={{ backgroundColor: "violet" }}>
          <FontFamily className="settingForm" updateFont={updateFont} />
        </div>
      )}
      {showingFontSize && (
        <div className="settingBlock" style={{ backgroundColor: "green" }}>
          <FontSize updateFontSize={updateFontSize} />
        </div>
      )}
      {showingTheme && (
        <div className="settingBlock" style={{ backgroundColor: "yellow" }}>
          <Theme updateTheme={updateTheme} />
        </div>
      )}
    </div>
  );
}
