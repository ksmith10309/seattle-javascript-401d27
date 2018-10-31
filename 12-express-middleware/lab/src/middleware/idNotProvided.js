'use strict';

export default (req, res) => {
  console.error('ID_NOT_PROVIDED');
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.setHeader('Content-Type', 'text/html');
  res.end('No ID was provided');
};
