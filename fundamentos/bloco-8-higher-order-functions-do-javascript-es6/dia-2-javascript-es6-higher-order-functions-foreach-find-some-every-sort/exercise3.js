const {books} = require('./exercise');

//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const encontraNomeDoLivro = (array, number) => array.find(book => book.name.length >= number)​
console.log(encontraNomeDoLivro(books, 26))