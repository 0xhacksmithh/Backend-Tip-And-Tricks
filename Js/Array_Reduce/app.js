import expenses from "./expenses.js";

// Total expenses
const totalexpenses = expenses.reduce((sum, expense) => {
  return sum + expense.amount;
}, 0);

console.log("Total Expenses ::", totalexpenses);

// Catagories wise Expenses
const categoryTotals = expenses.reduce((acc, expense) => {
  // if catagory not present
  if (!acc[expense.category]) {
    acc[expense.category] = 0;
  }

  acc[expense.category] += expense.amount;
  return acc;
}, {});

console.log("\nCatagory Totals :: ");
console.log(categoryTotals);

// Highest Expense
const highestExpense = expenses.reduce((max, expense) => {
  return expense.amount > max.amount ? expense : max;
});

console.log("\nHighest Expenses :: ");
console.log(highestExpense);

// Avarage Expense
const avarageExpense = totalexpenses / expenses.length;

console.log("\nAvarage Expense ::", avarageExpense);
