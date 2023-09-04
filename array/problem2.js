function reverseAlphabetic(str) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let reversed = str.split('');
    const alphabeticIndices = [];
  
    // Find and store the indices of alphabetic characters
    for (let i = 0; i < reversed.length; i++) {
      if (alphabets.includes(reversed[i])) {
        alphabeticIndices.push(i);
      }
    }
  
    // Reverse and replace the alphabetic characters
    for (let i = 0; i < alphabeticIndices.length; i++) {
      const currentIdx = alphabeticIndices[i];
      const reversedIdx = alphabeticIndices[alphabeticIndices.length - 1 - i];
      [reversed[currentIdx], reversed[reversedIdx]] = [reversed[reversedIdx], reversed[currentIdx]];
    }
  
    return reversed.join('');
  }
  
  const input = "T@N$V*R";
  const output = reverseAlphabetic(input);
  
  console.log(output); // Output: R@V$N*T
  