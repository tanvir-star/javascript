let obj = {
    'a' : 1,
    'b': 2
}

for(const key in obj){
    console.log('key==>', key)
}

let array = [1,2,3,4];


for(const key of array){
    console.log('rray', array[key])
}

// const arr = [1, 2, 3, 4];

// for (const element of arr) {
//   console.log('22', arr[0]);
// }


// console.log('arr.entries()--->', arr.entries())



const arr = [10, 20, 30];

const entriesIterator = arr.entries();

console.log('entriesIterator--->', entriesIterator)

for (const entry of entriesIterator) {
  console.log(entry);
}



