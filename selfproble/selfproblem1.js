// find the largest element in an array


const array = [1,2,3,4,5]

const result = array.sort((a, b)=>{
    return b-a
})

console.log('array-->', array)
console.log('result', result)

console.log('array.length--', array.length)


// for(let i=0; i<array.length; i++){
//     console.log('11', array[i])
// }

function findLargestElement(array) {
    if (array.length === 0) {
      return undefined; // Handle empty array case
    }
  
    let largest = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < largest) {
        largest = array[i];
      }
    }
  
    return [largest];
  }
  
  const numbers = [12, 45, 9, 24, 72, 5];
  const largest = findLargestElement(numbers);
//   console.log(`The largest element is: ${largest}`); // Output: The largest element is: 72
  console.log('largest', largest[0])
