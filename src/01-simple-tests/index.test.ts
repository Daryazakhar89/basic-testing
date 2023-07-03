// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 2, action: Action.Add })).toBe(4);
  }, 30000);

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 3, action: Action.Subtract })).toBe(7);
  }, 30000);

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 18, b: 2, action: Action.Multiply })).toBe(36);
  }, 30000);

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 44, b: 11, action: Action.Divide })).toBe(4);
  }, 30000);

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(
      8,
    );
  }, 30000);

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 3, b: 10, action: 'UnknownAction' })).toBe(
      null,
    );
  }, 30000);

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: '5', b: 8, action: Action.Add })).toBe(null);
  }, 30000);
});
