class Person {}
const person = new Person();

console.log(person instanceof Person); // Output: true
console.log(person instanceof Object); // Output: true (since all objects inherit from Object)
