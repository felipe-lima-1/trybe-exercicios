const {books} = require('./exercise');

// Retorne o nome do livro de menor nome. 
//use o forEach

const smallerName = (array) => {
  let initialSmallName = array[0].name
  //console.log(initialSmallName)
  array.forEach((book) => {
    if(initialSmallName.length > book.name.length) initialSmallName = book.name
  })
  return initialSmallName
}

console.log(smallerName(books))