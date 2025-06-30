import "./../css/Popup.css";

export default function Popup(props) {
  if (props.type === "income") {
    return (
      <div className="income-popup popup-container">
        <h1>income form!</h1>
      </div>
    );
  } else if (props.type === "expenditure") {
    return (
      <div className="income-popup popup-container">
        <h1>expenditure form!</h1>
      </div>
    );
  }
}
