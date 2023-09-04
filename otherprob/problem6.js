function removeDuplicates(array) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
    //   console.log('uniqueArray--->', !uniqueArray.includes(array[i]))
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  
  // Example array with duplicate values
  const originalArray = [1, 2, 2, 3, 4, 4, 5];
  
  const result = removeDuplicates(originalArray);
  console.log(result);
  
  let data = [1, 2]
  console.log('111---->', !data.includes(1))