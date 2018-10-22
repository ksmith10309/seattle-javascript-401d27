'use strict';

module.exports = (bmp) => {
  console.log('Transforming bitmap by invert', bmp);
  if (bmp.type !== 'BM') {
    throw new Error('It needs to be a BMP file!');
  }
  if (bmp.bits !== 8) {
    throw new Error('It needs to be an 8-bit image!');
  }
  let start = 14 + bmp.dibheadersize;
  let end = bmp.pixelarraystart;
  for (let i = start; i < end; i+=4) {
    bmp.buffer[i] = 255 - bmp.buffer[i];
    bmp.buffer[i+1] = 255 - bmp.buffer[i+1];
    bmp.buffer[i+2] = 255 - bmp.buffer[i+2];
  }
};
