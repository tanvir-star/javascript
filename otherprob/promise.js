// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(0).then(() => console.log(4));
// Promise.resolve()
//   .then(() => console.log(2))
//   .then(() => console.log(3));
// console.log(1); // 1, 2, 3, 4


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  wait(10 * 1000)
  .then(() => console.log('111'))
  .catch((error) => {    
    console.log('error---<', error)
  });

//   function saySomething(data){
//     console.log(data)
//   }