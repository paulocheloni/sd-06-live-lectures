const pokeTips = () => {
  return 'Bulbasaur é o melhor pokémon para começar.';
}

const pokeTipsCallback = (callback) => {
  setTimeout(() => {
    callback('Bulbasaur é o melhor pokémon para começar.');
  }, 500);
}

const pokeTipsPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Bulbasaur é o melhor pokémon para começar.');
    }, 1000);
  });
}

test('pokeTips returns the string we expect', () => {
  expect(pokeTips()).toBe('Bulbasaur é o melhor pokémon para começar.');
});

test('pokeTipsCallback return the string we expect', (done) => {
  pokeTipsCallback((tip) => {
    expect(tip).toBe('Bulbasaur é o melhor pokémon para começar.');
    done();
  });
});

test('pokeTipsPromise return the string we expect', () => {
  expect.assertions(1);

  return pokeTipsPromise().then((tip) => {
    expect(tip).toBe('Bulbasaur é o melhor pokémon para começar.');
  });
});

test('pokeTipsPromise using a promise matcher return the string we expect', () => {
  expect.assertions(1);
  return expect(pokeTipsPromise()).resolves.toBe('Bulbasaur é o melhor pokémon para começar.');
});
