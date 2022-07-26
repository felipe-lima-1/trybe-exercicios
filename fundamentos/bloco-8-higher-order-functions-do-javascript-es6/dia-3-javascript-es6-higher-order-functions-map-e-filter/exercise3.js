const { books } = require("./exercise");

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

function fantasyOrScienceFiction() {
    return books.filter((livro) => livro.genre === "Ficção Científica" || livro.genre === "Fantasia");
  }
console.log(fantasyOrScienceFiction(books));