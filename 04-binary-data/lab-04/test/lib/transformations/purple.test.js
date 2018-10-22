'use strict';

const transformPurple = require('../../../lib/transformations/purple.js');

describe('Testing the purple transform function', () => {
  test('The transform function should be a function', () => {
    expect(typeof transformPurple).toBe('function');
  });
  test('The transform function should throw an error if not provided a BMP file', (done) => {
    const testbmp1 = {
      type: 'BA',
    };
    expect(() => {transformPurple(testbmp1);}).toThrow();
    done();
  });
  test('The transform function should throw an error if not provided an 8-bit image', (done) => {
    const testbmp2 = {
      type: 'BM',
      bits: 24,
    };
    expect(() => {transformPurple(testbmp2);}).toThrow();
    done();
  });
});
