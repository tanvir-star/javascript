const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

console.log('---->', iterator)

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
