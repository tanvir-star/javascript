const books = [
    { title: "Book A", genre: "Fiction" },
    { title: "Book B", genre: "Non-fiction" },
    { title: "Book C", genre: "Fiction" }
  ];
  
  // Solution
  const groupedBooks = books.reduce((groups, book) => {
    if (!groups[book.genre]) {
      groups[book.genre] = [];
    }
    groups[book.genre].push(book.title);
    return groups;
  }, {});
  
  console.log(groupedBooks);
  // Output: { Fiction: [ 'Book A', 'Book C' ], 'Non-fiction': [ 'Book B' ] }
  