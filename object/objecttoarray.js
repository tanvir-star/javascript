const obj = { a: 1, b: 2, c: 3 };
console.log('Object.keys(obj)-->', Object.values(obj))
const arr = Object.keys(obj).map(key => {
      return {obj : obj[key]}
});

console.log('11', arr); // Output: [1, 2, 3]


const objj = { a: 1, b: 2, c: 3 };
const array = Object.entries(objj);

console.log(array); // Output: [['a', 1], ['b', 2], ['c', 3]]


const ob = { a: 1, b: 2, c: 3 };
const ar = Object.values(obj);

console.log(ar); // Output: [1, 2, 3]


