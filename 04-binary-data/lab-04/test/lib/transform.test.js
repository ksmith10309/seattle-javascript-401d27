'use strict';

const testTransform = require('../../lib/transform.js');

describe('Testing the transform function', () => {
  test('The transform function should be a function', () => {
    expect(typeof testTransform).toBe('function');
  });
  test('The transform function should throw an error if not provided a file path', (done) => {
    expect(() => {testTransform(undefined, 'greyscale');}).toThrow();
    done();
  });
});
