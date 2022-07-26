const { books } = require("./exercise");

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.


function fantasyOrScienceFictionAuthors() {
    const generos = ['Fantasia', 'Ficção Científica']
    return books.filter((livro) => generos.includes(livro.genre)).map((livros) => livros.author.name).sort();
  }

  console.log(fantasyOrScienceFictionAuthors(books));