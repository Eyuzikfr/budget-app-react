import { useState } from "react";
import Popup from "./Popup";

export default function Main() {
  const [incomePopup, setIncomePopup] = useState(false);
  const [expenPopup, setExpenPopup] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);

  // function to show popup
  const showPopup = (type) => {
    if (type === "income") {
      setIncomePopup(true);
      setExpenPopup(false);
    } else if (type === "expenditure") {
      setExpenPopup(true);
      setIncomePopup(false);
    }
  };

  // function to close popup
  const closePopup = () => {
    setIncomePopup(false);
    setExpenPopup(false);
  };

  // function to add income
  const addIncome = (newIncome) => {
    setTotalIncome((prevIncome) => prevIncome + newIncome);
  };

  return (
    <>
      {/* Add Records */}
      <div className="add-income-expense">
        <button className="add-income-btn" onClick={() => showPopup("income")}>
          Add Income
        </button>
        {incomePopup ? (
          <Popup
            type="income"
            onCloseBtnClick={closePopup}
            onAddIncomeClick={() => addIncome(100)}
          />
        ) : null}
        <button
          className="add-expenditure-btn"
          onClick={() => showPopup("expenditure")}
        >
          Add Expenditure
        </button>
        {expenPopup ? (
          <Popup type="expenditure" onCloseBtnClick={closePopup} />
        ) : null}
      </div>

      {/* Display Records */}
      <div className="income-expense-display">
        <h2 className="show-income">Income: {totalIncome}</h2>
        <h2 className="show-expenditure">Expenditure: {totalExpenditure}</h2>
      </div>
    </>
  );
}
