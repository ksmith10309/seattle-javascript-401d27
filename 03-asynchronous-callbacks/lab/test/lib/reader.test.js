'use strict';

const reader = require('../../lib/reader.js');

let file1 = `${__dirname}/../../data/eenie.txt`;
let file2 = `${__dirname}/../../data/meenie.txt`;
let file3 = `${__dirname}/../../data/moe.txt`;

let successArray = [file1, file3, file2];

describe('Test the reader module', () => {
  test('The reader function should return undefined', (done) => {
    expect(reader(successArray, (err, arrayOfStrings) => { done(); }).toBeUndefined());
  });

  test('On success: should return an array with a length of 3', (done) => {
    reader(successArray, (err, arrayOfStrings) => {
      expect(arrayOfStrings.length).toBe(3);
      done();
    });
  });
  test('On success: should return array with eenie text as first element', (done) => {
    reader(successArray, (err, arrayOfStrings) => {
      expect(arrayOfStrings[0]).toBe('a little text');
      done();
    });
  });
  test('On success: should return array with meenie text as last element', (done) => {
    reader(successArray, (err, arrayOfStrings) => {
      expect(arrayOfStrings[2]).toBe('a little more text');
      done();
    });
  });
  test('On success: should return null as the first parameter', (done) => {
    reader(successArray, (err, arrayOfStrings) => {
      expect(err).toBe(null);
      done();
    });
  });

  let failureArray = [file1, undefined, file2];

  test('On failure: should return TypeError', (done) => {
    reader(failureArray, (err, arrayOfStrings) => {
      expect(err).toBe(TypeError);
      done();
    });
  });
});
