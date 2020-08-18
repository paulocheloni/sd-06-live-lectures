const numbers = [10, 1, 2, 3];

console.table(numbers);

const compare = (value1, value2) => {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  }

  return 0;
}

numbers.sort(compare);

console.table(numbers);