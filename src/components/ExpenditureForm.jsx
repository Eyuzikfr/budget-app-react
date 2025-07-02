import { useState } from "react";
import "./../css/Forms.css";

export default function ExpenditureForm(props) {
  const today = new Date().toISOString().split("T")[0];

  const [title_, setTitle] = useState("Untitled");
  const [type_, setType] = useState("");
  const [date_, setDate] = useState(today);
  const [amount_, setAmount] = useState("");

  // handle add expenditure click function
  const submitForm = (e) => {
    e.preventDefault();

    if (type_ === "") {
      alert("Please select an expenditure type.");
      return;
    }
    props.setExpenditureData(() => {
      return {
        title: title_,
        type: type_,
        date: date_,
        amount: parseFloat(amount_),
      };
    });

    props.onCloseBtnClick();
  };
  return (
    <form className="form expenditure-form" onSubmit={submitForm}>
      <h2>Add Expenditure Record</h2>
      <div className="form-fields">
        <input
          className="field"
          type="text"
          name="expenditure-title"
          placeholder="Enter Title"
          value={title_}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="field"
          value={type_}
          name="expenditure-type"
          id="expenditure-type"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="" defaultChecked disabled>
            Select Expenditure Type
          </option>
          <option value="food">Food</option>
          <option value="bill">Bill</option>
          <option value="fuel">Fuel</option>
          <option value="hangout">Hangout</option>
          <option value="acitivity">Activity</option>
        </select>
        <input
          type="date"
          className="date-input"
          defaultValue={date_}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          className="field"
          value={amount_}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button className="submit-expenditure-btn btn-green" type="submit">
        Add Record
      </button>
    </form>
  );
}
