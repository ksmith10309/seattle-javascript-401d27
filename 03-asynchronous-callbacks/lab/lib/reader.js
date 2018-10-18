'use strict';

let fs = require('fs');

const reader = function(arrayOfPaths, callback) {
  const arrayOfStrings = [];
  fs.readFile(arrayOfPaths[0], (err1, data1) => {
    if (err1) { 
      callback(err1);
      return;
    }
    arrayOfStrings.push(data1.toString());
    fs.readFile(arrayOfPaths[1], (err2, data2) => {
      if (err2) { 
        callback(err2);
        return;
      }
      arrayOfStrings.push(data2.toString());
      fs.readFile(arrayOfPaths[2], (err3, data3) => {
        if (err3) { 
          callback(err3);
          return;
        }
        arrayOfStrings.push(data3.toString());
        callback(null, arrayOfStrings);
      });
    });  
  });
};

module.exports = reader;
