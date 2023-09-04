function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data from API 1");
      }, 1000);
    });
}
  
  function fetchData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Data from API 2");
      }, 1500);
    });
  }
  
  function processData(data1, data2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = `Processed data: ${data1} - ${data2}`;
        resolve(result);
      }, 500);
    });
  }
  
  fetchData1()
    .then((data1) => {
      console.log('first--->')
      return fetchData2()
        .then((data2) => {
          console.log('second--->')
          return processData(data1, data2);
        })
        .then((result) => {
          console.log('111')
          console.log(result); // Replace with your display logic
        });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  