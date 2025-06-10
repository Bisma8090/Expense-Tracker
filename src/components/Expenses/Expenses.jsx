import React, { useState } from "react";
import "./Expenses.css";
import Cards from "../UI/Cards";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Cards className="expenses">
<ExpensesFilter
  selected={filteredYear}
  onChangeFilter={filterChangeHandler}
  expenses={props.items}
/>
      <ExpensesChart expenses={filteredExpenses} />
<ExpensesList items={filteredExpenses} onDeleteExpense={props.onDeleteExpense} />
    </Cards>
  );
}

export default Expenses;
