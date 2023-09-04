const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];

  const student = students.find((item)=>{
    return item.id === 1
  })

  console.log('student-->', student)
  