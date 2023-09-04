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
        resolve("Data from API 2");
      }, 1500);
    });
  }
  
  function processData(data1, data2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = `Processed data: ${data1} - ${data2}`;
        resolve(result);
      }, 500);
    });
  }
  
  async function main() {
    try {
      const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
      console.log('data1--->', data1);
      console.log('data2--->', data2)
      const result = await processData(data1, data2);
      console.log(result); // Replace with your display logic
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  main();
  