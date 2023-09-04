function findPairsWithPropertySum(targetSum, array1, array2) {
    const pairs = [];
    const priceMap = {};
  
    // Create a map of values from the first array
    for (const obj1 of array1) {
      priceMap[obj1.price] = obj1;
    }


    console.log('priceMap-->', priceMap)
  
    // Check for complement values in the second array
    for (const obj2 of array2) {
      const complement = targetSum - obj2.price;
      if (priceMap.hasOwnProperty(complement)) {
        pairs.push([priceMap[complement], obj2]);
      }
    }
  
    return pairs;
  }
  
  const targetSum = 120;
  const products1 = [{ name: 'A', price: 50 }, { name: 'B', price: 70 }];
  const products2 = [{ name: 'X', price: 50 }, { name: 'Y', price: 70 }];
  
  const result = findPairsWithPropertySum(targetSum, products1, products2);
  
  console.log('1-->', result);
  