let obj = {
    "a": 1
};

/* hasownproperty */

console.log(obj.hasOwnProperty("a"));

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false


/* Constructor Functions: */
// Creating an object using a constructor function
function Person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}
  
const person = new Person('John', 30, 'Engineer');

console.log('person--.++', person);


// Classes (ES6):

// Creating an object using a class
class Persson {
    constructor(name, age, occupation) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
    }
  }
  
const persson = new Persson('John', 30, 'Engineer');

console.log(person.name); // Output: 'John'
console.log(person['age']); // Output: 


const son = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    },
    hobbies: ['Reading', 'Coding', 'Gardening']
  };
  
  console.log(son.address.city); // Output: 'New York'
  console.log(son.hobbies[0]); // Output: 'Reading'
  

  

  
