'use strict';

const transformOrange = require('../../../lib/transformations/orange.js');

describe('Testing the orange transform function', () => {
  test('The transform function should be a function', () => {
    expect(typeof transformOrange).toBe('function');
  });
  test('The transform function should throw an error if not provided a BMP file', (done) => {
    const testbmp1 = {
      type: 'BA',
    };
    expect(() => {transformOrange(testbmp1);}).toThrow();
    done();
  });
  test('The transform function should throw an error if not provided an 8-bit image', (done) => {
    const testbmp2 = {
      type: 'BM',
      bits: 24,
    };
    expect(() => {transformOrange(testbmp2);}).toThrow();
    done();
  });
});
