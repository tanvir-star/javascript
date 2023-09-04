// Simulated API function that returns a Promise
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulating an API call after a delay
      setTimeout(() => {
        const data = { name: "John", age: 30 };
        if (data) {
          resolve(data); // Resolve with the fetched data
        } else {
          reject("Error fetching data");
        }
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  // Using the Promise to fetch data and handle it
  fetchDataFromAPI()
    .then(result => {
      console.log("Fetched data:", result); // Outputs: Fetched data: { name: "John", age: 30 }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  