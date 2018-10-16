'use strict';

const greet = require('../../lib/greet.js');

describe('Test the greet module', () => {
  it('should return hello world when the function is supplied world', () => {
    expect(greet('world')).toBe('hello world');
  });
  it('should return null when the function is supplied a number', () => {
    expect(greet(123)).toBe(null);
  });
  it('should return null when the function is supplied an array', () => {
    expect(greet([])).toBe(null);
  });
  it('should return null when the function is supplied an object', () => {
    expect(greet({})).toBe(null);
  });
});
