function capitalizeFirstLetter(sentence) {
    const words = sentence.split(' ');
  
    for (let i = 0; i < words.length; i++) {
        console.log('words[i].slice(1)-,', words[i].slice(1))
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  }
  
  const inputSentence = "hello world";
  const capitalizedSentence = capitalizeFirstLetter(inputSentence);
  console.log(capitalizedSentence); // Output: "Hello World"
  