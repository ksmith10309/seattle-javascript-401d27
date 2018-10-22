'use strict';

const transformGreen = require('../../../lib/transformations/green.js');

describe('Testing the green transform function', () => {
  test('The transform function should be a function', () => {
    expect(typeof transformGreen).toBe('function');
  });
  test('The transform function should throw an error if not provided a BMP file', (done) => {
    const testbmp1 = {
      type: 'BA',
    };
    expect(() => {transformGreen(testbmp1);}).toThrow();
    done();
  });
  test('The transform function should throw an error if not provided an 8-bit image', (done) => {
    const testbmp2 = {
      type: 'BM',
      bits: 24,
    };
    expect(() => {transformGreen(testbmp2);}).toThrow();
    done();
  });
});
