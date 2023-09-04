const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
  ];
  
  people.sort((a, b) => a.age - b.age);
  console.log(people);
  