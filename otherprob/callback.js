function processUserInput(callback) {
    console.log('11--->')
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
      const data = "Processed data";
      console.log('setTimeoutCalled-->')
      callback(data); // Call the callback function with the processed data
    },5000);
  }
  
  function displayData(data) {
    console.log("Data:", data);
  }
  
  // Call processUserInput with the displayData function as a callback
  processUserInput(displayData);
  