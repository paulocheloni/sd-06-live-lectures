const convertToRoman = require('./roman-numerals');
const { TestResult } = require('@jest/types');

test('Its defined', () => {
  expect(typeof convertToRoman).toBe('function');
});

test('converts number from 1 to 4', () => {
  expect(convertToRoman(1)).toBe('I');
  expect(convertToRoman(2)).toBe('II');
  expect(convertToRoman(3)).toBe('III');
  expect(convertToRoman(4)).toBe('IV');
});

test('converts numbers from 5 to 9', () => {
  expect(convertToRoman(5)).toBe('V');
  expect(convertToRoman(6)).toBe('VI');
  expect(convertToRoman(7)).toBe('VII');
  expect(convertToRoman(8)).toBe('VIII');
  expect(convertToRoman(9)).toBe('IX');
});

test('converts numbers 50, 55 and 76', () => {
  expect(convertToRoman(50)).toBe('L');
  expect(convertToRoman(55)).toBe('LV');
  expect(convertToRoman(76)).toBe('LXXVI');
});

test('converts numbers 100, 200 and 227', () => {
  expect(convertToRoman(100)).toBe('C');
  expect(convertToRoman(200)).toBe('CC');
  expect(convertToRoman(227)).toBe('CCXXVII');
});

test('converts numbers 500, 576 and 981', () => {
  expect(convertToRoman(500)).toBe('D');
  expect(convertToRoman(576)).toBe('DLXXVI');
  expect(convertToRoman(981)).toBe('CMLXXXI');
});

test('converts numbers 1000, 2999 and 3000', () => {
  expect(convertToRoman(1000)).toBe('M');
  expect(convertToRoman(2999)).toBe('MMCMXCIX');
  expect(convertToRoman(3000)).toBe('MMM');
});