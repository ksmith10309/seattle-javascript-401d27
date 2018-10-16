'use strict';

module.exports = (str) => {
  return (typeof str === 'string') ? 'hello ' + str : null;
};
