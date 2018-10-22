'use strict';

const transformRed = require('../../../lib/transformations/red.js');

describe('Testing the red transform function', () => {
  test('The transform function should be a function', () => {
    expect(typeof transformRed).toBe('function');
  });
  test('The transform function should throw an error if not provided a BMP file', (done) => {
    const testbmp1 = {
      type: 'BA',
    };
    expect(() => {transformRed(testbmp1);}).toThrow();
    done();
  });
  test('The transform function should throw an error if not provided an 8-bit image', (done) => {
    const testbmp2 = {
      type: 'BM',
      bits: 24,
    };
    expect(() => {transformRed(testbmp2);}).toThrow();
    done();
  });
});
