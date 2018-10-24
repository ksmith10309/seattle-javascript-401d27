'use strict';

const url = require('url');
const queryString = require('querystring');

const urlparser = function(request) {
  return new Promise((resolve, reject) => {
    if (!request || !request.url) reject('This Request Object Is Invalid.');
    request.parsed = url.parse(request.url);
    request.query = queryString.parse(request.parsed.query);  
    
    resolve(request);

    request.on('err', reject);
  });
};

module.exports = urlparser;
