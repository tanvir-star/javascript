function regularFunction() {
    setTimeout(function() {
      console.log('1111', this); // Points to the global object (e.g., Window)
    }, 5000);
  }
  
  const arrowFunction = () => {
    setTimeout(() => {
      console.log('2222',this); // Points to the enclosing context (lexical this)
    }, 1000);
  };
  
  regularFunction(); // Outputs global object (e.g., Window)
  arrowFunction();   // Outputs enclosing context
  