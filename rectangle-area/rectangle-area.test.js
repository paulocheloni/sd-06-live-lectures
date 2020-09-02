const rectangleArea = require('./rectangle-area')

describe('A função rectangleArea', () => {
  it('Deve ser do tipo function', () => {
    expect(typeof rectangleArea).toBe('function');
  });

  it('Deve retorna nulo ao receber string', () => {
    expect(rectangleArea('10', '10')).toBeNull();
  });

  it('Deve retorna nulo ao receber objeto', () => {
    expect(rectangleArea({}, {})).toBeNull();
  });

  it('Deve retorna nulo ao receber array', () => {
    expect(rectangleArea([], [])).toBeNull();
  });

  it('Deve retorna nulo ao receber um número negativo', () => {
    expect(rectangleArea(-1, -1)).toBeNull();
  });

  it('Deve retorna nulo ao receber um 0', () => {
    expect(rectangleArea(0, 0)).toBeNull();
  });

  it('Deve retornar 100 ao receber 10 do lado 1, e 10 do lado 2', () => {
    expect(rectangleArea(10, 10)).toBe(100);
  })
});
