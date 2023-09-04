function findUniqueElements(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  const uniqueElements = combinedArray.filter((element, index) => {
    console.log('11', combinedArray.indexOf(element), element)
    console.log('22', combinedArray.lastIndexOf(element), element)
    return combinedArray.indexOf(element) !== combinedArray.lastIndexOf(element);
  });
  return uniqueElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueElements = findUniqueElements(array1, array2);
console.log(uniqueElements); // Output: [1, 2, 6, 7]
