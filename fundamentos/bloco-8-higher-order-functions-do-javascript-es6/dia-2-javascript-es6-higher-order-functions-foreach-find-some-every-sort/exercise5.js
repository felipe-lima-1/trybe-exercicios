const { books } = require("./exercise");

//5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.​

const everyoneWasBornOnSecXX = (array) => {
  return array.every(
    (book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  );
};
//console.log(everyoneWasBornOnSecXX(books))
//Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const someBookWasReleaseOnThe80s = (array) =>
  array.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
console.log(someBookWasReleaseOnThe80s(books));
