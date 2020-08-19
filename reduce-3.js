const arrays = [
  [1, 2, 3],
  [10, 20, 30],
  [100, 200, 300]
];

// allArraysToRuleThemAll = [
//   1,
//   2,
//   3,
//   10,
//   20,
//   30,
//   100,
//   200,
//   300
// ]

const allArraysToRuleThemAll = arrays
  .reduce((previousValue, currentValue) => previousValue.concat(currentValue));

console.table(allArraysToRuleThemAll);
