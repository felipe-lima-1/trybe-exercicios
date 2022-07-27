const {books} = require('./exercise');

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

function formatedBookNames() {
    return books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`);
};

console.log(formatedBookNames(books));