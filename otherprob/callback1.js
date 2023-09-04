  function executeOperation(callback, value) {
    return callback(value);
  }
  
  function double(x) {
    return x * 2;
  }
  
  function square(x) {
    return x * x;
  }
  
  console.log(executeOperation(double, 5)); // Output: 10
  console.log(executeOperation(square, 5)); // Output: 25
  