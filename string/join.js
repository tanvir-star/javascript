const colors = ["red", "green", "blue"];
const result = colors.join(" ");
console.log(result); // Outputs: "red green blue"


const numbers = [10, 20, 30, 40];
const csvString = numbers.join(",");
console.log(csvString); // Outputs: "10,20,30,40"

const pathSegments = ["home", "user", "documents", "file.txt"];
const fullPath = pathSegments.join("/");
console.log(fullPath); // Outputs: "home/user/documents/file.txt"  

const people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" }
];
  
  const fullNames = people.map(person => {
    return `${person.firstName} ${person.lastName}`
  });
  console.log(fullNames); // Outputs: ["John Doe", "Jane Smith"]
  
  const items = ["apples", "bananas", "oranges"];
  const itemList = `I bought ${items.join(", ")} today.`;
  console.log(itemList); // Outputs: "I bought apples, bananas, oranges today."
  