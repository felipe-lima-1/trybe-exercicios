const newEmployees = (names) => {
  const employees = {
    id1: names('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: names('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: names('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const names = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return {nomeCompleto, email: `${email}@betrybe.com`};
}

console.log(newEmployees(names));