import { useState, useEffect } from "react";
import Popup from "./Popup";

export default function Main() {
  const [incomePopup, setIncomePopup] = useState(false);
  const [expenPopup, setExpenPopup] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);
  const [incomeData, setIncomeData] = useState({
    amount: 0,
  });
  const [expenditureData, setExpenditureData] = useState({
    amount: 0,
  });
  const [currentAmount, setCurrentAmount] = useState(
    totalIncome - totalExpenditure
  );

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
  useEffect(() => {
    // console.log(incomeData.title, incomeData.type);
    setTotalIncome((prevIncome) => prevIncome + incomeData.amount);
  }, [incomeData]);

  // function to add expenditure
  useEffect(() => {
    // console.log(expenditureData.title, expenditureData.type);
    setTotalExpenditure((prevExpen) => prevExpen + expenditureData.amount);
  }, [expenditureData]);

  // update current when income or expenditure amount changes
  useEffect(() => {
    setCurrentAmount(totalIncome - totalExpenditure);
  }, [totalIncome, totalExpenditure]);

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
            incomeData={incomeData}
            setIncomeData={setIncomeData}
            onCloseBtnClick={closePopup}
          />
        ) : null}
        <button
          className="add-expenditure-btn"
          onClick={() => showPopup("expenditure")}
        >
          Add Expenditure
        </button>
        {expenPopup ? (
          <Popup
            type="expenditure"
            expenditureData={expenditureData}
            setExpenditureData={setExpenditureData}
            onCloseBtnClick={closePopup}
          />
        ) : null}
      </div>

      {/* Display Records */}
      <div className="income-expense-display">
        <h2 className="show-income">Income: {totalIncome}</h2>
        <h2 className="show-expenditure">Expenditure: {totalExpenditure}</h2>
        <h2 className="show-expenditure">Current: {currentAmount}</h2>
      </div>
    </>
  );
}
