const numbers = [2, 3, 4, 6, 8, 12, 24];

let summation = numbers
  .reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue, 1);

console.log(`O somatório é: ${summation}`);