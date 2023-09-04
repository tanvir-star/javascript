// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one

function compareObjects(obj1, obj2) {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Check if all keys in obj1 have the same values in obj2
    for (const key of keys1) {
      // Check if the key exists in both objects
      if (!keys2.includes(key)) {
        return false;
      }
  
      // Check if the values are equal
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    // If all checks pass, the objects have equivalent property values
    return true;
  }
  
  // Test the function
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 1, b: 2, c: 3 };
  const obj3 = { a: 1, b: 2, c: 3 };
  
  console.log(compareObjects(obj1, obj2)); // Output: true
  console.log(compareObjects(obj1, obj3)); // Output: false
  