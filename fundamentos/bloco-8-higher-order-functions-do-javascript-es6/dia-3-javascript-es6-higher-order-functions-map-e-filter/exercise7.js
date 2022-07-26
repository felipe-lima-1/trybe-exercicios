const { books } = require("./exercise");

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

function authorWith3DotsOnName() {
    return books.find((livros) => livros.author.name.split(" ").filter((palavra) => palavra.endsWith(".")).length === 3).name;
  };

console.log(authorWith3DotsOnName(books));