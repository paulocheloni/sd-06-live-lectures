const sum = require('../sum');

describe('sum', () => {
  it('deve ser capaz de somar dois numeros', () => {
    expect(sum(2,2)).toEqual(4);
  });

    it('deve ser capaz de somar dois numeros', () => {
    expect(sum(5,5)).toEqual(10);
  });
});