const persons = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];
  
  // Solution
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  console.log(totalAge); // Output: 77
  