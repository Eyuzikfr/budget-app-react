import { useState } from "react";
import Popup from "./Popup";

export default function Main() {
  const [incomePopup, setIncomePopup] = useState(false);
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

  const closePopup = () => {
    setIncomePopup(false);
    setExpenPopup(false);
  };

  return (
    <div className="add-income-expense">
      <button className="add-income-btn" onClick={() => togglePopup("income")}>
        Add Income
      </button>
      {incomePopup ? (
        <Popup type="income" onCloseBtnClick={closePopup} />
      ) : null}
      <button
        className="add-expenditure-btn"
        onClick={() => togglePopup("expenditure")}
      >
        Add Expenditure
      </button>
      {expenPopup ? (
        <Popup type="expenditure" onCloseBtnClick={closePopup} />
      ) : null}
    </div>
  );
}
