function reverseStringKeepNumbers(inputStr) {
    const nonNumericChars = [];
    const numericCharsIndices = [];
  
    for (let i = 0; i < inputStr.length; i++) {
      if (isNaN(inputStr[i])) {
        nonNumericChars.push(inputStr[i]);
      } else {
        numericCharsIndices.push(i);
      }
    }
  
    let reversedStr = "";
    let j = nonNumericChars.length - 1;
  
    for (let i = 0; i < inputStr.length; i++) {
      if (numericCharsIndices.includes(i)) {
        reversedStr += inputStr[i];
      } else {
        reversedStr += nonNumericChars[j];
        j--;
      }
    }
  
    return reversedStr;
  }
  
  // Test the function
  const inputStr = "T2NV8R";
  const reversedStr = reverseStringKeepNumbers(inputStr);
  console.log("Original string:", inputStr);
  console.log("Reversed string:", reversedStr);
  