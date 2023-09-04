// Rest Operator ( ... ):



function sum(...numbers){
    return numbers.reduce((acc, val) => {
        console.log('acc, ', acc)
        console.log('val', val)
       return acc + val
    }, 5)
} 


const result = sum(1,2,3,4,5)
console.log('result--->', result)