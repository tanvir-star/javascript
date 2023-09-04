//  const array = [3,0,5,0,4,0];


//  let count = 0
//  let position = 0
//  for(let i=0; i<array.length; i++){
//     console.log('array[i]--->', array[i], i)
//     if(array[i] === 0){
//        count++
//     } else {
//         array[position] = array[i];
//         position++;
//     }
//  } 
//  console.log('array', array)
//  let data = array.length - count;
//  console.log('data', data)
//  for(let j=array.length; j<data; j++ ){
//    array[j]=0;
//  }

//  console.log(array);



//  const array = [3, 0, 5, 0, 4, 0];

// let position = 0;
// let count = 0;

// // Move non-zero elements to the front and count them
// for (let i = 0; i < array.length; i++) {
//     if(array[i] === 0){
//         count++
//      } else {
//          array[position] = array[i];
//          position++;
//      }
// }

// console.log('array.length--->', array)

// // Fill the remaining positions with zeros
// for (let i = count; i < array.length; i++) {
//   console.log('i-->', i)
//   array[i] = 0;
// }

// console.log(array); // Output: [3, 5, 4, 0, 0, 0]


const array = [3, 0, 5, 0, 4, 0];

let nonZeroCount = 0;

// Move non-zero elements to the front and count them
for (let i = 0; i < array.length; i++) {
  if (array[i] !== 0) {
    array[nonZeroCount] = array[i];
    nonZeroCount++;
  }
}

console.log('array--->', array)

// Fill the remaining positions with zeros
for (let i = nonZeroCount; i < array.length; i++) {
  array[i] = 0;
}

console.log(array); // Output: [3, 5, 4, 0, 0, 0]


let array1 = [1,2,3,4,5,6];

let array2 = []

for(let i=array1.length - 1; i>=0; i--){
    array2.push(array1[i])
}

console.log('array2--->',array2)




