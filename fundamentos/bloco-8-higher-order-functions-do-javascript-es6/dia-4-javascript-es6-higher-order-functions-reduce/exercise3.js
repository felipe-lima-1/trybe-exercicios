const { books } = require("./exercise");

// 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge() {
  const numberOfBooks = books.length;
  const soma = books.reduce((sum, book) => {
    return sum + (book.releaseYear - book.author.birthYear);
  }, 0);
  return soma / numberOfBooks;
}

console.log(averageAge(books));
