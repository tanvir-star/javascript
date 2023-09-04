function reverseString(inputString) {
    let reversedString = '';
    console.log('inputString.length--->', inputString.length);
    console.log('inputString.length-->', inputString.length - 1);
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
}
  
  // Example usage
  let originalString = "Hello, world!";
  let reversedString = reverseString(originalString);
  console.log(reversedString);
  