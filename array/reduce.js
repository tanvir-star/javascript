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


const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})

console.log('count', count) // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }



