function someFunction() {
    // Replace this with the function you want to measure the execution time for
    for (let i = 0; i < 100; i++) {
      // Some time-consuming operation
      console.log('1')
    }
  }
  
  console.time('Function Execution'); // Start the timer
  someFunction(); // Call the function you want to measure
  console.timeEnd('Function Execution'); // Stop the timer and display the elapsed time
  