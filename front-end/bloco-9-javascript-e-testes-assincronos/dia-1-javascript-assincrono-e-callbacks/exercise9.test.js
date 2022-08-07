// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercise8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const erro = new Error('Não temos esse pokémon para você :(');

    getPokemonDetails('Pikachu', (error, _message) => {
      try {
        expect(error).toEqual(erro);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});