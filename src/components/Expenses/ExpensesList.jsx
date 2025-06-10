import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (!props.items || props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }


  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={props.onDeleteExpense}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
