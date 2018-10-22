'use strict';

const transformGreyscale = require('../../../lib/transformations/greyscale.js');

describe('Testing the greyscale transform function', () => {
  test('The transform function should be a function', () => {
    expect(typeof transformGreyscale).toBe('function');
  });
  test('The transform function should throw an error if not provided a BMP file', (done) => {
    const testbmp1 = {
      type: 'BA',
    };
    expect(() => {transformGreyscale(testbmp1);}).toThrow();
    done();
  });
  test('The transform function should throw an error if not provided an 8-bit image', (done) => {
    const testbmp2 = {
      type: 'BM',
      bits: 24,
    };
    expect(() => {transformGreyscale(testbmp2);}).toThrow();
    done();
  });
});
