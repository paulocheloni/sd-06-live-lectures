const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const reduceFunction = (accumulator, currentValue) => `${accumulator} ${currentValue}`;

const epicPhrase = epic
  .reduce(reduceFunction);


// elemento[1] || accumulator: a || currentValue: long
// elemento[2] || accumulator: a long || currentValue: time
// elemento[3] || accumulator: a long time || currentValue: ago
// elemento[4] || accumulator: a long time ago || currentValue: in a
// elemento[5] || accumulator: a long time ago in a || currentValue: galaxy
// elemento[6] || accumulator: a long time ago in a galaxy || currentValue: far far
// elemento[7] || accumulator: a long time ago in a galaxy far far || currentValue: away => a long time ago in a galaxy far far away


console.log(epicPhrase);