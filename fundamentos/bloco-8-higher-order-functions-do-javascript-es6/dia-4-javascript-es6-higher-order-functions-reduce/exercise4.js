const { books } = require("./exercise");

// 4- Encontre o livro com o maior nome.


const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  function longestNamedBook() {
    return books.reduce((maiorLivro, livroAtual) => {
        if (livroAtual.name.length > maiorLivro.name.length){
            return livroAtual;
        }
        return maiorLivro;
    });
  }

  console.log(longestNamedBook(books));