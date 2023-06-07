import { BsCurrencyExchange } from "react-icons/bs";
import { RxFontSize, RxFontFamily } from "react-icons/rx";
import { CgDarkMode } from "react-icons/cg";
import "./CustomizationBar.css";

export default function CustomizationBar() {
  return (
    <div className="CustomizationBar">
      <div className="navIcon" style={{ backgroundColor: "red" }}>
        <BsCurrencyExchange />
      </div>
      <div className="navIcon" style={{ backgroundColor: "violet" }}>
        <RxFontFamily />
      </div>
      <div className="navIcon" style={{ backgroundColor: "green" }}>
        <RxFontSize />
      </div>
      <div className="navIcon" style={{ backgroundColor: "yellow" }}>
        <CgDarkMode />
      </div>
    </div>
  );
}
