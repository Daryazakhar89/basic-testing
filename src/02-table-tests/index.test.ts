// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 15, b: 9, action: Action.Subtract, expected: 6 },
  { a: 12, b: 5, action: Action.Multiply, expected: 60 },
  { a: 70, b: 10, action: Action.Divide, expected: 7 },
  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 4, b: 8, action: 'UnknownAction', expected: null },
  { a: '1', b: 3, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'Test simpleCalculator with using the table-driven testing approach({a: $a, b: $b, action: $action})',
    (testCase) => {
      expect(simpleCalculator(testCase)).toBe(testCase.expected);
    },
    30000,
  );
});
