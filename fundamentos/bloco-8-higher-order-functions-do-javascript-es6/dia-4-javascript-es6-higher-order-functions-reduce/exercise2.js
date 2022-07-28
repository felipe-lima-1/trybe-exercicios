const {books} = require('./exercise');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const nomes = books.reduce((acc, book, index, array) => {
    if (index === array.length -1) return `${acc} ${book.author.name}`;
    return `${acc} ${book.author.name}`;
  }, '');
  return nomes.trim();
}

console.log(reduceNames(books));