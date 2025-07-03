import { useState } from "react";
import "./../css/Forms.css";

export default function ExpenditureForm(props) {
  const today = new Date().toISOString().split("T")[0];

  const [title_, setTitle] = useState("Untitled");
  const [type_, setType] = useState("");
  const [date_, setDate] = useState(today);
  const [amount_, setAmount] = useState("");

  // expenditure type options variable
  const expenditureTypes = [
    "Acitivity",
    "Food and Drinks",
    "Gifts",
    "Groceries",
    "Bills",
    "Vehicle",
    "Fuel",
    "Communication/PC",
    "Investments",
    "Transportation",
    "Loans/Interests",
  ];
  const expenditureTypesList = expenditureTypes.sort().map((type) => (
    <option key={type} value={type.toLowerCase()}>
      {type}
    </option>
  ));

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
          {expenditureTypesList}
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
