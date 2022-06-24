// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.


let soma = 0

for (let index = 35; index < 106; index += 1) {
    soma += index

}

console.log('A soma de 35 a 105 é:', soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.

let divisiveisPor3 = 0
let impares = 0

for (let index = 15; index < 156; index += 1) {
    if (index % 3 === 0) {
        divisiveisPor3 += 1
    }
    if (index % 2 !== 0) {
        impares += 1
    }
}
console.log(divisiveisPor3);

if (impares => 50) {
    console.log("Parabéns, essa é a mensagem secreta");
}

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.


let jogador1 = 'scissors';
let jogador2 = 'stone';

if (jogador1 == 'paper' && jogador2 == 'stone') {
    console.log('Jogador 1 vence');
} else if (jogador1 == 'stone' && jogador2 == 'scissors') {
    console.log('Jogador 1 vence');
} else if (jogador1 == 'scissors' && jogador2 == 'paper') {
    console.log('Jogador 1 vence');
} else if (jogador1 == jogador2) {
    console.log('Empate');
} else {
    console.log('Jogador 2 vence');
}

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade" ou "A pessoa é menor de idade".
// Bônus: Crie a condição utilizando operador ternário.

let idade = 18;
let print;

if (idade >= 18) {
    print = "A pessoa é maior de idade";
} else {
    print = "A pessoa é menor de idade";
}

console.log(print);

// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// "Pessoa" é a mais nova.


let Ademar = 15
let Adriana = 40
let Julia = 10

if(Ademar < Adriana && Ademar < Julia){
    console.log("Ademar é o mais novo");
}
else if(Adriana < Ademar && Adriana < Julia){
    console.log("Adriana é a mais nova");
}else{
    console.log("Julia é a mais nova");
}