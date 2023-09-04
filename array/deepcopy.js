function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const newArray = [];
      for (let i = 0; i < obj.length; i++) {
        newArray[i] = deepCopy(obj[i]);
      }
      return newArray;
    }
  
    const newObj = {};
    console.log('obj====>', obj)
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    console.log('newObj--->', newObj)
    return newObj;
  }
  

 console.log('111', Array.isArray(['a']))
  // Example usage
  const originalObject = {
    a: 1,
    b: { c: 2 },
    d: [3, 4, { e: 5 }]
  };
  
  const copiedObject = deepCopy(originalObject);
  
  console.log(copiedObject);
  