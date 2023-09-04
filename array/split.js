// string.split(delimiter);


const sentence = "Hello, world!, How, are, you?";
const words = sentence.split(",");

console.log(words); // Outputs: ["Hello", "world!", "How", "are", "you?"]


const date = "20230819";
const parts = date.split("");

console.log(parts); // Outputs: ["2023", "08", "19"]


const sentences = "one two three four five";
const word = sentences.split(" ", 3);

console.log(word); // Outputs: ["one", "two", "three"]
