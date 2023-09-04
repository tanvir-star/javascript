function fetchData1() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous API call
      setTimeout(() => {
        resolve("Data from API 1");
      }, 1000);
    });
}
  
  function fetchData2() {
    return new Promise((resolve, reject) => {
      // Simulate another asynchronous API call
      setTimeout(() => {
        resolve("Data from API 2");
      }, 1500);
    });
  }
  
  function processData(data1, data2) {
    return new Promise((resolve, reject) => {
      // Simulate some processing on the data
      setTimeout(() => {
        const result = `Processed data: ${data1} - ${data2}`;
        resolve(result);
      }, 500);
    });
  }
  
  // Using Promise.all() to fetch and process data
  console.time('Function Execution'); 
  Promise.all([fetchData1(), fetchData2()])
    .then(([data1, data2]) => {
      console.timeEnd('Function Execution'); // Stop the timer and display the elapsed time
      return processData(data1, data2);
    })
    .then((result) => {
      // Replace this with your logic for displaying the result
      console.log(result);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  