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
  userFontSize,
  updateFont,
  userFont,
  updateCurrency,
  userCurrency,
  updateTheme,
  userTheme,
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
          style={{
            backgroundColor: userTheme.palette.tab1,
            color: userTheme.palette.primary.icon,
          }}
          onClick={toggleCurrencySetting}
        >
          <BsCurrencyExchange />
        </div>
        <div
          className="navIcon"
          style={{
            backgroundColor: userTheme.palette.tab2,
            color: userTheme.palette.primary.icon,
          }}
          onClick={toggleFontFamilySetting}
        >
          <RxFontFamily />
        </div>
        <div
          className="navIcon"
          style={{
            backgroundColor: userTheme.palette.tab3,
            color: userTheme.palette.primary.icon,
          }}
          onClick={toggleFontSizeSetting}
        >
          <RxFontSize />
        </div>
        <div
          className="navIcon"
          style={{
            backgroundColor: userTheme.palette.tab4,
            color: userTheme.palette.primary.icon,
          }}
          onClick={toggleThemeSetting}
        >
          <CgDarkMode />
        </div>
      </div>
      {showingCurrency && (
        <div
          className="settingBlock"
          style={{ backgroundColor: userTheme.palette.tab1 }}
        >
          <Currency
            className="settingForm"
            updateCurrency={updateCurrency}
            userCurrency={userCurrency}
          />
        </div>
      )}
      {showingFontFamily && (
        <div
          className="settingBlock"
          style={{ backgroundColor: userTheme.palette.tab2 }}
        >
          <FontFamily
            className="settingForm"
            updateFont={updateFont}
            userFont={userFont}
          />
        </div>
      )}
      {showingFontSize && (
        <div
          className="settingBlock"
          style={{ backgroundColor: userTheme.palette.tab3 }}
        >
          <FontSize
            updateFontSize={updateFontSize}
            userFontSize={userFontSize}
            userFont={userFont}
          />
        </div>
      )}
      {showingTheme && (
        <div
          className="settingBlock"
          style={{ backgroundColor: userTheme.palette.tab4 }}
        >
          <Theme updateTheme={updateTheme} userTheme={userTheme} />
        </div>
      )}
    </div>
  );
}
