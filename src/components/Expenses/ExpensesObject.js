import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesObject.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const ExpensesObject = (prop) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = prop.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeYear}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default ExpensesObject;
