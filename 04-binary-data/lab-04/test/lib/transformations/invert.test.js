'use strict';

const transformInvert = require('../../../lib/transformations/invert.js');

describe('Testing the invert transform function', () => {
  test('The transform function should be a function', () => {
    expect(typeof transformInvert).toBe('function');
  });
  test('The transform function should throw an error if not provided a BMP file', (done) => {
    const testbmp1 = {
      type: 'BA',
    };
    expect(() => {transformInvert(testbmp1);}).toThrow();
    done();
  });
  test('The transform function should throw an error if not provided an 8-bit image', (done) => {
    const testbmp2 = {
      type: 'BM',
      bits: 24,
    };
    expect(() => {transformInvert(testbmp2);}).toThrow();
    done();
  });
});
