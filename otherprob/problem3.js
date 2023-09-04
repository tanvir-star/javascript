function findCommonValues(arr1, arr2) {
    const commonValues = arr1.filter((element) => arr2.includes(element));
    return commonValues;
}
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const commonValues = findCommonValues(array1, array2);
  console.log(commonValues); // Output: [3, 4, 5]
  