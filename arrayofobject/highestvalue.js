const expenses = [
    { category: "Food", amount: 50 },
    { category: "Transportation", amount: 30 },
    { category: "Entertainment", amount: 20 }
  ];
  
  // Solution
  const highestExpense = expenses.reduce((max, expense) => {
   console.log('max--->', max)
   return expense.amount > max ? expense.amount : max
  }, 0);
  console.log(highestExpense); // Output: 50
  

  const number = [1, 2, 3, 4, 5];

const sum = number.reduce((accumulator, currentValue) => {
  console.log('accumulator--->', accumulator)
  return accumulator + currentValue;
}, 0);

console.log(sum); // Outputs: 15