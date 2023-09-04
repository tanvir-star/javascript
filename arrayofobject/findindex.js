const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" }
  ];
  
  const indexToRemove = fruits.findIndex(item => item.id === 1);
  console.log('indexToRemove-->', indexToRemove)
  if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
  }
  console.log(fruits);




  // const arrayofobject =  [
  //   {'apple': 1 , 'car': 2},
  //   {'butter': 1 , 'car': 2},
  //   {'apple': 2, 'butter': 3}
  // ]

  // let data = [{'apple': 1 , 'car': 2}]

  // for(const item of data){
  //    console.log('data--->', item)
  // }
   
  // const arraynew = [];

  //  forEach((data)=>{
  //   for (const item of data) {
  //      if(!item){
  //       arraynew[item] = 
  //      }
  //   }
  // });


  const arrayofobject = [
    { 'apple': 1, 'car': 2 },
    { 'butter': 1, 'car': 2 },
    { 'apple': 2, 'butter': 3 }
  ];
  
  const result = {};
  
  // Iterate through each object in the array
  arrayofobject.forEach(obj => {
    // Iterate through the keys in each object
    for (const key in obj) {
      // If the key doesn't exist in the result object, initialize it to 0
      if (!result[key]) {
        result[key] = 0;
      }
      // Add the value associated with the key to the result
      result[key] += obj[key];
    }
  });

  console.log('result--->', result);
  console.log('Object.keys(result)-->', Object.keys(result))
  
  // Convert the result object back to an array of objects
  const finalResult = Object.keys(result).map(key => { 
    console.log('key-->', key)
   return {[key]: result[key]} ;
   });
  

  //  const finalResult = Object.keys(result).map(key => {
  //   return { [key]: result[key] };
  // });
  console.log(finalResult);
  

  