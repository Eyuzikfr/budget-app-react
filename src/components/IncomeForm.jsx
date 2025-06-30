export default function IncomeForm(props) {
  // handle add income click function
  const handleAddIncome = (e) => {
    e.preventDefault();
    props.onAddIncomeClick(100);
  };
  return (
    <form action="POST">
      <h1>Add Income</h1>
      <button className="add-income" onClick={handleAddIncome}>
        Add
      </button>
    </form>
  );
}
