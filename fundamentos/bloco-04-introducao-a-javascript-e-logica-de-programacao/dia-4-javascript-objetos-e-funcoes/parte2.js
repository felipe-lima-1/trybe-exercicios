function verificaPalindromo(word) {
    for (index in word) {
        if (word[index] != word[word.length - 1 - index]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo("ana"));
console.log(verificaPalindromo("felipe"));

// 2 -

function maior(array) {
    let maior = 0;
    for (index in array) {
        if (array[maior] < array[index]) {
            maior = index;
        }
    }
    return maior;
}
console.log(maior([2, 3, 6, 7, 10, 1]));

// 3 - 

function menor(numeros) {
    let menor = 0;
    for (let index in numeros) {
        if (numeros[menor] > numeros[index]) {
            menor = index;
        }
    }
    return menor;
}
console.log(menor([2, 4, 6, 7, 10, 0, -3]));