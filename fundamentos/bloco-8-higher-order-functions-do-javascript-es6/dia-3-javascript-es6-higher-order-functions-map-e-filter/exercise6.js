const { books } = require("./exercise");

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
    const anoAtual = new Date().getFullYear();
    return books.filter((livros) => anoAtual - livros.releaseYear > 60).map((livros) => livros.name)
  };

  console.log(oldBooks(books));

