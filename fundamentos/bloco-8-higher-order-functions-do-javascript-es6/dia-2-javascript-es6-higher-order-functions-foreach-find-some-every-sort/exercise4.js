const {books} = require('./exercise');

// 4 - Ordene os livros por data de lançamento em ordem decrescente.​

const orderBooks = (array) => {
  const orderList = array.sort((bookA,bookB) => bookA.releaseYear - bookB.releaseYear)
  return orderList
}

console.log(orderBooks(books))