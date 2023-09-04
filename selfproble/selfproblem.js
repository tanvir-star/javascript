

const array = [1,2,3,4,5];

for(element of array){
    console.log('element', element)
}

for(element in array){
    console.log('inelement', element)
}

const obj = {
    0: '1',
    1: '2',
    2: '3',
}

// for(ob of obj){
//     console.log(ob)
// }

for(ob in obj){
    console.log('11', ob)
}