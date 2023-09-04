// Example: Finding pairs of numbers that add up to a target value

// Naive approach with nested for loops
function findPairsNaive(arr, target) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }
  
  // Optimized approach using a Set
  function findPairsOptimized(arr, target) {
    const pairs = [];
    const numSet = new Set(arr);
    console.log('numSet--->', numSet)
    
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
      console.log('complement--->', complement);
      console.log('numSet.has(complement)--->', numSet.has(complement));
      if (numSet.has(complement)) {
        pairs.push([arr[i], complement]);
      }
    }
    
    return pairs;
  }
  
  // Usage
  const numbers = [2, 4, 6, 3, 1, 7, 5];
  const targetSum = 8;
  
  console.log(findPairsNaive(numbers, targetSum));       // Output: [[2, 6], [3, 5]]
  console.log(findPairsOptimized(numbers, targetSum));   // Output: [[2, 6], [3, 5]]
  