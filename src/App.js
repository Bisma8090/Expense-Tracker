import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Car Insurance", amount: 294, date: new Date(2021, 7, 15) },
  { id: "e2", title: "Home Insurance", amount: 100, date: new Date(2022, 7, 19) },
  { id: "e3", title: "Personal Insurance", amount: 150, date: new Date(2023, 7, 25) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div>
      <NewExpense onNewExpenseData={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
