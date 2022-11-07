import React from "react";
import ExpensesObject from "./components/Expenses/ExpensesObject";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 297.12,
      date: new Date(2021, 6, 21),
    },
    {
      id: "e2",
      title: "TV repair",
      amount: 68.12,
      date: new Date(2021, 9, 3),
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 197.12,
      date: new Date(2021, 1, 11),
    },
    {
      id: "e4",
      title: "Toiltet paper",
      amount: 31.15,
      date: new Date(2021, 2, 28),
    },
  ];
  /*
  return
  React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Lets get started!"),
    React.createElement(ExpensesObject, { expenses: expenses })
  );
  */
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense />
        <ExpensesObject expenses={expenses} />
      </header>
    </div>
  );
};

export default App;
