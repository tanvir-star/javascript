const array = [1, 2, 3, 4, 3, 2, 5, 6, 6, 1];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]


const array1 = [1, 2, 3, 4, 3, 2, 5, 6, 6, 1];
const array2 = [];
for(let i=0; i<array1.length; i++){
   if(!array2.includes(array1[i])){
     array2.push(array[i])
   }
}
console.log('array2--->', array2)


const array4 = [1, 2, 3, 4, 3, 2, 5, 6, 6, 1];
const uniqueArrayy = [...new Set(array4)];
console.log(uniqueArrayy); // Output: [1, 2, 3, 4, 5, 6]

const unique = [];
   unique = array.reduce((acc, curr) => {
    if(!acc.includes(curr)){
     acc.push(curr)
    }   
    return acc
}, []);

console.log('unique--->', unique)
