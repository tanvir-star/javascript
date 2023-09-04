//Object Destructuring

// Sample object
const person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
  };
  
  // Destructuring the object
  const { name, age, occupation } = person;
  
  console.log(name); // Output: 'John'
  console.log(age); // Output: 30
  console.log(occupation); // Output: 'Engineer'
  
const { name: personName, age: personAge, occupation: personOccupation } = person;

console.log('11', personName); // Output: 'John'
console.log(personAge); // Output: 30
console.log(personOccupation); // Output: 'Engineer'


  