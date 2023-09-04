const arr = ['a', 'b', 'c'];
const obj = {};

for (const item of arr) {
  obj[item] = item;
}

console.log(obj);
