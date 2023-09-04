const numbers = [1,2,3,4,5]

function sum(accumulator, currentvalue){
    return accumulator + currentvalue
}

const result = numbers.reduce(sum, 0);

console.log('result', result);


const number = [1, 2, 3, 4, 5];

const sum = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Outputs: 15



