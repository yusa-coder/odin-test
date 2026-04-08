
import { analyzeArray } from '../analyzeArray.js';

test('analyzes an array of numbers correctly', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('handles arrays with negative numbers', () => {
  const object = analyzeArray([-5, 10, -3, 8]);
  expect(object).toEqual({
    average: 2.5,
    min: -5,
    max: 10,
    length: 4,
  });
});

test('handles an array with a single number', () => {
  const object = analyzeArray([5]);
  expect(object).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});