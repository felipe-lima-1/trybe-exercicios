const { books } = require("./exercise");

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

function oldBooksOrdered() {
    const anoAtual = new Date().getFullYear();
    return books.filter((livros) => (livros.releaseYear < anoAtual - 60))
    .sort((a, b) => a.releaseYear - b.releaseYear);
  }

  console.log(oldBooksOrdered(books));