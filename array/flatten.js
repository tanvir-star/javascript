function flattenArray(arr) {
    const flattened = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const nestedArray = flattenArray(arr[i]);
        flattened.push(...nestedArray);
      } else {
        flattened.push(arr[i]);
      }
    }
  
    return flattened;
  }
  
  const multiDimensionalArray = [1, [2, 3, [4, 5]], 6, [7, 8]];
  const flattenedArray = flattenArray(multiDimensionalArray);
  
  console.log(flattenedArray); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]
  