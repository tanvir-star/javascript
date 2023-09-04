let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName); // Concatenates "John" and "Doe" with a space
console.log(fullName); // Outputs: "John Doe"


const array1 = [{ id: 1 }, { id: 2 }];
const array2 = [{ id: 3 }, { id: 4 }];

const combinedArrays = array1.concat(array2);
console.log('combinedArrays--->', combinedArrays)
// or
const combinedArray = [...array1, ...array2];
console.log('combinedArray--->', combinedArray)