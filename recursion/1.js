function factorial(n){
    if(n === 0){
        return 1;
    }
    let a = n * factorial(n-1)
    return a;
}

console.log('c--->', factorial(6))