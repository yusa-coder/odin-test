
import { caesarCipher } from '../caesarCipher.js';

test('shifts letters correctly', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('leaves punctuation and spaces unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('handles large shift factors (greater than 26)', () => {
  expect(caesarCipher('Hello', 29)).toBe('Khoor'); // 29 % 26 = 3
});

test('handles negative shift factors', () => {
  expect(caesarCipher('Khoor', -3)).toBe('Hello');
});