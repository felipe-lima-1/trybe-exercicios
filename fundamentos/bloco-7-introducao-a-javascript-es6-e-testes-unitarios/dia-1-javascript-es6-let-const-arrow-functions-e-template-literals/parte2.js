// 1 - 

const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1;

console.log(fatorial(5));

// 2 - 

const longestWord = text => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (let word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord('O vasco da gama é gigantesco'));

// 4 - 

const subst = (nome) => {
    let frase = 'Tryber x aqui!';
    let fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome;
        }
    }
    return fraseArray.join(' ');
};
console.log(subst('Bebeto'));


const minhasSkills = () => {
    const skills = ['JavaScript,', 'HTML,', 'CSS.'];
    let resultado = `Minhas três principais habilidades são:`;

    skills.forEach((skill) => {
        resultado = `${resultado} ${skill}`;
    });
    return resultado;
};

console.log(minhasSkills(subst('Bebeto')));