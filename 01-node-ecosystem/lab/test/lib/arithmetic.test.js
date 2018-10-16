'use strict';

const arithmetic = require('../../lib/arithmetic.js');

describe('Test the arithmetic module add method', () => {
  it('should return the sum of the two parameters', () => {
    expect(arithmetic.add(2, 3)).toBe(5);
  });
  it('should return null when the method is only supplied one number', () => {
    expect(arithmetic.add(1)).toBe(null);
  });
  it('should return null when the method is supplied a non-number', () => {
    expect(arithmetic.add(1, 'hello')).toBe(null);
  });
  it('should return null when the method is supplied a non-number', () => {
    expect(arithmetic.add([], 1)).toBe(null);
  });
});

describe('Test the arithmetic module subtract method', () => {
  it('should return second parameter subtracted from the first parameter', () => {
    expect(arithmetic.sub(3, 2)).toBe(1);
  });
  it('should return null when the method is only supplied one number', () => {
    expect(arithmetic.sub(1)).toBe(null);
  });
  it('should return null when the method is supplied a non-number', () => {
    expect(arithmetic.sub(1, 'hello')).toBe(null);
  });
  it('should return null when the method is supplied a non-number', () => {
    expect(arithmetic.sub([], 1)).toBe(null);
  });
});
