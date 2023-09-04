// Converting a string to an array of characters:

const str = "Hello";
const charArray = Array.from(str);
console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']


// Converting a set to an array:

const mySet = new Set([1, 2, 3,3, 4, 5]);
console.log('mySet--->', mySet)
const setArray = Array.from(mySet);
console.log(setArray); // Output: [1, 2, 3, 4, 5]


// Using the mapFunction parameter to create a new array based on the existing one:

const numbers = [1, 2, 3, 4, 5];
const doubledArray = Array.from(numbers, (num) => num * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

