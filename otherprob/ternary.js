// condition ? expressionIfTrue : expressionIfFalse;


// const age = 18;
// const gender = 'fmale'

// const condition =  age > 12  && gender === 'male' ? 'adult' : gender === 'male' ? 'female' : 'child';

// console.log('condition-->', condition)


// const age = 12;
// const isStudent = false;
// const result = condition1 ? expressionIfCondition1True : condition2 ? expressionIfCondition2True: expressionIfBothConditionsFalse;

const age = 12;
const isStudent = false;
// const message = age >= 18 && isStudent  ? "You are an adult student" : age >= 18  ?  "You are an adult" :  "You are a minor";

const message = age >= 18 ? isStudent  ? "You are an adult student" : "You are an adult"  : "You are a minor";

console.log(message); // Output: "You are an adult"


// console.log(message); // Output: "You are an adult"
