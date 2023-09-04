function fetchData(url, callback) {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
      const data = { name: "Alice", age: 30 };
      callback(data);
    }, 2000);
  }
  
  function processFetchedData(data) {
    console.log("Received data:", data);
  }
  
  fetchData("https://api.example.com/data", processFetchedData);
  