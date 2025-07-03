import { useState } from "react";
import "./../css/Forms.css";

export default function IncomeForm(props) {
  const today = new Date().toISOString().split("T")[0];

  const [title_, setTitle] = useState("Untitled");
  const [type_, setType] = useState("");
  const [date_, setDate] = useState(today);
  const [amount_, setAmount] = useState("");

  // handle add income click function
  const submitForm = (e) => {
    e.preventDefault();

    if (type_ === "") {
      alert("Please select an expenditure type.");
      return;
    }
    props.setIncomeData(() => {
      return {
        title: title_,
        type: type_,
        amount: parseFloat(amount_),
      };
    });

    props.onCloseBtnClick();
  };

  return (
    <form className="form income-form" onSubmit={submitForm}>
      <h2>Add Income Record</h2>
      <div className="form-fields">
        <input
          className="field"
          type="text"
          name="income-title"
          placeholder="Enter Title"
          value={title_}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="field"
          value={type_}
          name="income-type"
          id="income-type"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="" defaultChecked disabled>
            Select Income Type
          </option>
          <option value="salary">Salary</option>
          <option value="gift">Gift</option>
          <option value="allowance">Allowance</option>
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
      <button className="submit-income-btn btn-green" type="submit">
        Add Record
      </button>
    </form>
  );
}
