let array = [1, 2, 3, 4];
let array2 = array.map((element) => {
  console.log('element-->', element)
  return element * 2;
});

console.log(array2);


const books = [
  { title: "Book 1", author: "Author 1" },
  { title: "Book 2", author: "Author 2" }
];

const titles = books.map(book => book.title);
console.log(titles);
