// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueSet = Array.from(new Set ([...numbers]));
// // new Set([...nums]);
// console.log(uniqueSet); // Output: Set { 1, 2, 3, 4, 5 }



// function greet(name) {
//     console.log('greet', name)
//     console.log(`Hello, ${name}.`);
//   }
  
//   function callFunctionWithApply(func, context, args) {
//     func.apply(context, args);
//   }
  
//   // Example usage: Passing the greet function and its arguments to callFunctionWithApply
//   callFunctionWithApply(greet, null, ['John']);
//   // Output: Hello, John.
  
//   const person = { name: 'Alice' };
//   callFunctionWithApply(greet, person, ['Bob']);
//   // Output: Hello, Bob.
  

function greet(name, age) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  }
  
  const person = { name: 'John', age: 30 };
  
  // Call the greet function with the person object as `this` and pass arguments using an array
  greet.apply(null, ['John', 30]);
  // Output: Hello, John. You are 30 years old.
  