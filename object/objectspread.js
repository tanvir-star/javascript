// // 1. Spread Operator ( ... ):

// a) Array Spread:

const array1 = [1,2,3];
const array2 = [4,5,6];

const combinedarray = [...array1, ...array2]

console.log('const==>', combinedarray)

// b) Object Spread (shallow copy):

const person = { name: 'John', age: 30 };
const personCopy = { ...person };

console.log(personCopy); // Output: { name: 'John', age: 30 }


// c) Function Arguments:


function sum(a, b, c){
    return a+b+c
}
let number = [1, 2, 3]

const sums = sum(...number)
console.log('sums--->', sums)



