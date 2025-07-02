import "./../css/Popup.css";
import IncomeForm from "./IncomeForm";
import ExpenditureForm from "./ExpenditureForm.jsx";

export default function Popup(props) {
  // render the income form
  if (props.type === "income") {
    return (
      <div className="disable-background">
        <div className="income-popup popup-container">
          <button className="close-btn btn-red" onClick={props.onCloseBtnClick}>
            X
          </button>
          <IncomeForm
            incomeData={props.incomeData}
            setIncomeData={props.setIncomeData}
            onCloseBtnClick={props.onCloseBtnClick}
          />
        </div>
      </div>
    );
  }
  // render the expenditure form
  else if (props.type === "expenditure") {
    return (
      <div className="disable-background">
        <div className="expenditure-popup popup-container">
          <button className="close-btn btn-red" onClick={props.onCloseBtnClick}>
            X
          </button>
          <ExpenditureForm
            expenditureData={props.expenditureData}
            setExpenditureData={props.setExpenditureData}
            onCloseBtnClick={props.onCloseBtnClick}
          />
        </div>
      </div>
    );
  }
}
