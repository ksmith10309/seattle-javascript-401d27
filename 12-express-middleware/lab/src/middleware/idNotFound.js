'use strict';

export default (err, req, res, next) => {
  console.error('ID_NOT_FOUND', err);
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'text/html');
  res.end('ID was not found');
};
