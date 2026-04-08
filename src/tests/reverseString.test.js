
import { reverseString } from '../reverseString.js';

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('handles empty strings', () => {
  expect(reverseString('')).toBe('');
});

test('handles strings with spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});