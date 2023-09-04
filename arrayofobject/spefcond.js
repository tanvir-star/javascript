const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 70 },
    { name: "Charlie", score: 95 }
  ];
  
  // Solution
  const topStudents = students.filter(student => student.score >= 90);
  console.log(topStudents); // Output: [ { name: 'Alice', score: 85 }, { name: 'Charlie', score: 95 } ]
  