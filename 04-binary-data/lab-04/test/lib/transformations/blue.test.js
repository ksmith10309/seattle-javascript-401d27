'use strict';

const transformBlue = require('../../../lib/transformations/blue.js');

describe('Testing the blue transform function', () => {
  test('The transform function should be a function', () => {
    expect(typeof transformBlue).toBe('function');
  });
  test('The transform function should throw an error if not provided a BMP file', (done) => {
    const testbmp1 = {
      type: 'BA',
    };
    expect(() => {transformBlue(testbmp1);}).toThrow();
    done();
  });
  test('The transform function should throw an error if not provided an 8-bit image', (done) => {
    const testbmp2 = {
      type: 'BM',
      bits: 24,
    };
    expect(() => {transformBlue(testbmp2);}).toThrow();
    done();
  });
});
