
import { capitalize } from '../capitalize.js';

test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('handles empty strings', () => {
  expect(capitalize('')).toBe('');
});

test('handles strings that are already capitalized', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('only changes the first character', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});