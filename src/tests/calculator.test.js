
import { calculator } from '../calculator.js';

test('adds two numbers', () => {
  expect(calculator.add(5, 3)).toBe(8);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('divides two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('throws an error when dividing by zero', () => {
  expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
});