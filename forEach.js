const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplyByThreeWithFor = array => {
  const newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    const multipliedNumber = array[index] * 3;
    newArray.push(multipliedNumber);
  }

  return newArray;
}

const multiplyByThree = array => {
  const newArray = [];
  array.forEach(element => newArray.push(element * 3));
  return newArray;
}

console.table(multiplyByThreeWithFor(numbers));
console.table(multiplyByThree(numbers));