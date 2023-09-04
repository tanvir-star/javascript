let array = [1, 2, 3, 4];
let array2 = array.filter((element) => {
  console.log('element-->', element)
  return element * 2;
});

console.log(array2);


const tasks = [
  { id: 1, title: "Task 1", completed: true },
  { id: 2, title: "Task 2", completed: false }
];

const incompleteTasks = tasks.filter(task => !task.completed);
console.log(incompleteTasks);
