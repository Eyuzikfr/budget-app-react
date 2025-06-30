import "./../css/Popup.css";

export default function Popup(props) {
  if (props.type === "income") {
    return (
      <div className="disable-background">
        <div className="income-popup popup-container">
          <button className="close-btn" onClick={props.onCloseBtnClick}>
            X
          </button>
          <h1>income form!</h1>
        </div>
      </div>
    );
  } else if (props.type === "expenditure") {
    return (
      <div className="disable-background">
        <div className="expenditure-popup popup-container">
          <button className="close-btn" onClick={props.onCloseBtnClick}>
            X
          </button>
          <h1>expenditure form!</h1>
        </div>
      </div>
    );
  }
}
