// Example Set and complement value
const numSet = new Set([10, 20, 30, 40, 50]);
console.log('numSet--->', numSet)
const complement = 30;

// Check if complement exists in the numSet
const exists = numSet.has(complement);

console.log(exists); // Output: true
