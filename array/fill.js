// const num = [1,2,3];
// const num_2 = num.fill(0);
// console.log('num-->', num_2)

const arr = ['a', 'b', 'c'];
  console.log('arr.map(item => [item, item])--->', arr.map(item => [item, item]))
  console.log('Object.fromEntries(', Object.fromEntries([[1, 'a']]))
const obj = Object.fromEntries(arr.map(item => [item, item]));

console.log(obj);
