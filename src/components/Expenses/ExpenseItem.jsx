import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Cards from "../UI/Cards";

function ExpenseItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Cards className="expense-item">
      <div className="expense-item__left">
        <ExpenseDate date={props.date} />
        <h2 className="expense-item__title">{props.title}</h2>
      </div>

      <div className="expense-item__right">
        <div className="expense-item__price">${props.amount}</div>
        <button className="expense-item__delete" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </Cards>
  );
}

export default ExpenseItem;
