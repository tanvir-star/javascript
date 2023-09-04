// array.splice(startIndex, deleteCount, ...itemsToAdd);
const array = [1, 2, 3, 4, 5];

// Remove two elements starting from index 2
const removedElements = array.splice(2, 2);

console.log(array);          // Outputs: [1, 2, 5]
console.log(removedElements); // Outputs: [3, 4]

console.log('111', array); 


// const array1 = [1, 2, 3, 4, 5];

// // Replace two elements starting from index 1 with new values
// array1.splice(1, 2, 6, 7);

// console.log(array1); // Outputs: [1, 6, 7, 4, 5]
