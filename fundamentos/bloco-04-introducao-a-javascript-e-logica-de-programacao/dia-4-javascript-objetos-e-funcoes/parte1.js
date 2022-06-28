// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

console.log("Bem vinda,", info.personagem);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let key in info) {
  console.log(key);
}

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (let key in info) {
  console.log(info[key]);
}

// 5 -

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let prop in info) {
  if (prop === 'recorrente' && info[prop] === 'Sim' && info2[prop] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[prop] + ' e ' + info2[prop]);
  }
}

// 6 - 

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log ('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// 7 -

leitor.livrosFavoritos.push(
  {
    titulo: 'A Morte de Ivan Ilitch',
    autor: 'Liev Tolstói',
    editora: 'Antofágica',
  }
)

// 8 - 

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');