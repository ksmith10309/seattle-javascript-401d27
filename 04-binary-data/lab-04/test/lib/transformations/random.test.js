'use strict';

const transformRandom = require('../../../lib/transformations/random.js');

describe('Testing the random transform function', () => {
  test('The transform function should be a function', () => {
    expect(typeof transformRandom).toBe('function');
  });
  test('The transform function should throw an error if not provided a BMP file', (done) => {
    const testbmp1 = {
      type: 'BA',
    };
    expect(() => {transformRandom(testbmp1);}).toThrow();
    done();
  });
  test('The transform function should throw an error if not provided an 8-bit image', (done) => {
    const testbmp2 = {
      type: 'BM',
      bits: 24,
    };
    expect(() => {transformRandom(testbmp2);}).toThrow();
    done();
  });
});
