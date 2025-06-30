import { useState } from "react";
import Popup from "./Popup";

export default function Main() {
  const [incomePopup, setIncomePopup] = useState(true);
  const [expenPopup, setExpenPopup] = useState(false);

  const togglePopup = (type) => {
    if (type === "income") {
      setIncomePopup((prevState) => !prevState);
      setExpenPopup(false);
    } else if (type === "expenditure") {
      setExpenPopup((prevState) => !prevState);
      setIncomePopup(false);
    }
  };

  return (
    <div className="add-income-expense">
      <button className="add-income-btn" onClick={() => togglePopup("income")}>
        Add Income
      </button>
      {incomePopup ? <Popup type="income" /> : null}
      <button
        className="add-expenditure-btn"
        onClick={() => togglePopup("expenditure")}
      >
        Add Expenditure
      </button>
      {expenPopup ? <Popup type="expenditure" /> : null}
    </div>
  );
}
