// Yes, there are other methods to convert [['a', 1], ['b', 2], ['c', 3]] into [1, 2, 3].

const arrayOfKeyValuePairs = [['a', 1], ['b', 2], ['c', 3]];

const valuesArray = Array.from(arrayOfKeyValuePairs, pair => pair[1]);

console.log(valuesArray); // Output: [1, 2, 3]


// const arrayOfKeyValuePairs = [['a', 1], ['b', 2], ['c', 3]];

// const valuesArray = [];
// for (const pair of arrayOfKeyValuePairs) {
//   valuesArray.push(pair[1]);
// }

// console.log(valuesArray); // Output: [1, 2, 3]


// const arrayOfKeyValuePairs = [['a', 1], ['b', 2], ['c', 3]];

// const valuesArray = arrayOfKeyValuePairs.reduce((acc, pair) => {
//   acc.push(pair[1]);
//   return acc;
// }, []);

// console.log(valuesArray); // Output: [1, 2, 3]

