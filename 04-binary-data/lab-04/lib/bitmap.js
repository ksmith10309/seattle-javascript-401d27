'use strict';

const transforms = require('./dictionary.js');

class Bitmap {
  constructor(filePath) {
    this.file = filePath;
  }
  parse(buffer) {
    this.type = buffer.toString('utf-8', 0, 2);
    this.bits = buffer.readInt16LE(28);
    this.dibheadersize = buffer.readInt32LE(14);
    this.pixelarraystart = buffer.readInt32LE(10);
    this.buffer = buffer;
  }
  transform(operation) {
    transforms[operation](this);
    this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
  }
}

module.exports = Bitmap;
