import "./../css/Popup.css";
import IncomeForm from "./IncomeForm";
import ExpenditureForm from "./ExpenditureForm.jsx";

export default function Popup(props) {
  // render the income form
  if (props.type === "income") {
    return (
      <div className="disable-background">
        <div className="income-popup popup-container">
          <button className="close-btn" onClick={props.onCloseBtnClick}>
            X
          </button>
          <IncomeForm onAddIncomeClick={() => props.onAddIncomeClick(100)} />
        </div>
      </div>
    );
  }
  // render the expenditure form
  else if (props.type === "expenditure") {
    return (
      <div className="disable-background">
        <div className="expenditure-popup popup-container">
          <button className="close-btn" onClick={props.onCloseBtnClick}>
            X
          </button>
          <ExpenditureForm />
        </div>
      </div>
    );
  }
}
