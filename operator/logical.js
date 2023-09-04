console.log(true && false); // Output: false
console.log(true && true);  // Output: true


console.log(true || false); // Output: true
console.log(false || false);// Output: false


console.log(!true);  // Output: false
console.log(!false); // Output: true

console.log('111', !!false)
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You are eligible to drive.");
} else {
  console.log("You are not eligible to drive.");
}


function one (a){
  return function two(b){
   return function three(c){
      return a*b*c ;
    }
  }
}

console.log('111', one(2)(3)(4));

var hey = 10;

function abc(){
  console.log('11', hey);
  var hey = 20;
}

abc();



// <!DOCTYPE html>
// <html>
// <head>
//     <title>Button Click Order</title>
// </head>
// <body>
//     <button id="button1">Button 1</button>
//     <button id="button2">Button 2</button>
//     <button id="button3">Button 3</button>

//     <script>
//         function createButtonClickHandler(buttonIndex) {
//             return function() {
//                 console.log(`Button ${buttonIndex} clicked`);
//             };
//         }

//         for (let i = 1; i <= 3; i++) {
//             const button = document.getElementById(`button${i}`);
//             button.addEventListener('click', createButtonClickHandler(i));
//         }
//     </script>
// </body>
// </html>