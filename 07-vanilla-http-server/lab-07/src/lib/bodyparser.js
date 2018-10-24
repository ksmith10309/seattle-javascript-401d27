'use strict';

const url = require('url');
const queryString = require('querystring');

const bodyparser = function(request) {
  return new Promise((resolve, reject) => {
    if (!request || !request.url) reject('This Request Object Is Invalid.');
    request.parsed = url.parse(request.url);
    request.query = queryString.parse(request.parsed.query);

    let text = '';
    request.on('data', (buffer) => {
      text += buffer.toString();
    });

    request.on('end', () => {
      try {
        if (text.length === 0) request.body = null;
        else request.body = JSON.parse(text);
        resolve(request);
      }
      catch(err) { 
        reject(err);
      }
    });

    request.on('err', reject);
  });
};

module.exports = bodyparser;
