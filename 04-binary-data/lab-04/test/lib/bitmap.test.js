'use strict';

const fs = require('fs');
const Bitmap = require('../../lib/bitmap.js');

let file = `${__dirname}/../../assets/baldy.bmp`;
let testbitmap = new Bitmap(file);

describe('Testing the Bitmap constructor', () => {
  test('The Bitmap constructor should construct a new Bitmap', () => {
    expect(testbitmap).toBeDefined();
  });
  test('The constructed Bitmap should have the file path stored', () => {
    expect(testbitmap.file).toBe(`${__dirname}/../../assets/baldy.bmp`);
  });
});

describe('Testing the Bitmap parse method', () => {
  test('The type of the file should be BM', (done) => {
    fs.readFile(testbitmap.file, (err, buffer) => {
      if (err) throw err;
      testbitmap.parse(buffer);
      expect(testbitmap.type).toBe('BM');
      done();
    });
  });
  test('The bits per pixel of the file should be 8', (done) => {
    fs.readFile(testbitmap.file, (err, buffer) => {
      if (err) throw err;
      testbitmap.parse(buffer);
      expect(testbitmap.bits).toBe(8);
      done();
    });
  });
  test('The constructed Bitmap should have the buffer stored', (done) => {
    fs.readFile(testbitmap.file, (err, buffer) => {
      if (err) throw err;
      testbitmap.parse(buffer);
      expect(testbitmap.buffer).toBeDefined();
      done();
    });
  });
});

describe('Testing the Bitmap transform method', () => {
  test('The new file name should be stored', (done) => {
    fs.readFile(testbitmap.file, (err, buffer) => {
      if (err) throw err;
      let operation = 'greyscale';
      testbitmap.transform(operation);
      expect(testbitmap.newFile).toBe(`${__dirname}/../../assets/baldy.greyscale.bmp`);
      done();
    });
  });
});
