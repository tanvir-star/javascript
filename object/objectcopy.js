//shallow copy
const originalObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    }
};

  const shallowCopy = { ...originalObject };

console.log(shallowCopy); 
// Output: { name: 'John', age: 30, address: { city: 'New York', zip: '10001' } }

shallowCopy.address.city = 'Los Angeles';

console.log('---->', originalObject.address.city); // Output: 'Los Angeles'

//deep copy


const original = { name: 'John', age: 30, address: { city: 'New York', zip: '10001' } };
const deepCopy = JSON.parse(JSON.stringify(originalObject));
deepCopy.address.city = 'sam'

console.log('--->deepCopy', deepCopy); // Output: { name: 'John', age: 30, address: { city: 'New York', zip: '10001' } }
console.log('original---->', original)
