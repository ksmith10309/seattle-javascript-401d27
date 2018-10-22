'use strict';

module.exports = (bmp) => {
  console.log('Transforming bitmap by randomize', bmp);
  if (bmp.type !== 'BM') {
    throw new Error('It needs to be a BMP file!');
  }
  if (bmp.bits !== 8) {
    throw new Error('It needs to be an 8-bit image!');
  }
  let start = 14 + bmp.dibheadersize;
  let end = bmp.pixelarraystart;
  for (let i = start; i < end; i+=4) {
    bmp.buffer[i] = Math.random() * 255;
    bmp.buffer[i+1] = Math.random() * 255;
    bmp.buffer[i+2] = Math.random() * 255;
  }
};
