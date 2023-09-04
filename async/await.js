async function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from API 1");
      }, 1000);
    });
  }
  
  async function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from API 2");
      }, 1500);
    });
  }
  
  async function processData(data1, data2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = `Processed data: ${data1} - ${data2}`;
        resolve(result);
      }, 500);
    });
  }
  
  async function main() {
    try {
      // console.time('Function Execution'); 
      const data1 = await fetchData1();
      console.log('1111')
      const data2 = await fetchData2();
      console.log('22222')
      // console.timeEnd('Function Execution'); // Stop the timer and display the elapsed time
      const result = await processData(data1, data2);
      console.log('3333')
      console.log(result); // Replace with your display logic
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  main();
  