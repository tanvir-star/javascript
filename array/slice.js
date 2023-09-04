// array.slice(startIndex, endIndex);
const arry = [1,2,3,4,5];

console.log('array', arry.slice(2,5))
console.log('array', arry.slice(2,4))
console.log('arry--<', arry.slice(1,2))

const removed = arry.slice(1,2);

console.log('removed---.', removed);
console.log('array-->aa' , arry);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log('22', animals.slice(1, 6));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log('11', animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
