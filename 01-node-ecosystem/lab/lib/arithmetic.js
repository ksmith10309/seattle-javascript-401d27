'use strict';

module.exports = exports = {};

exports.add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return null
  else return a + b;
};

exports.sub = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return null
  else return a - b;
};
