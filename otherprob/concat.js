const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


const combinedArray = array1.concat(array2);

console.log('combinedArray--->', combinedArray);
console.log('combinedArray.indexOf(element)--->', combinedArray.indexOf(1))
console.log('lastindexof--->', combinedArray.lastIndexOf(5))


const array3 = [1, 2, 3];
const array4 = [4, 5];
const array5 = [6, 7, 8];

const concatenatedArray = array3.concat(array4, array5);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
