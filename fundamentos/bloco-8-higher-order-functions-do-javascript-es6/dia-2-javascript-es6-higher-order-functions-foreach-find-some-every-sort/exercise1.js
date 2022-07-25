const {books} = require('./exercise');

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const buscaAuthor = (array, ano) => {
 const livroEcontrado = array.find((book) => book.author.birthYear === ano);
 return livroEcontrado.author.name
}

console.log(buscaAuthor(books,1947));
