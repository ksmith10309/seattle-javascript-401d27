'use strict';

const dictionary = require('../../lib/dictionary.js');

describe('Testing the dictionary object', () => {
  test('The dictionary object should be an object', () => {
    expect(typeof dictionary).toBe('object');
  });
  test('The dictionary object should have properties stored', () => {
    expect(Object.keys(dictionary).length).toBeGreaterThan(0);
  });
});
