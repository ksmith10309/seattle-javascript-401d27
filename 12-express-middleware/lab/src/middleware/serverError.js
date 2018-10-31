'use strict';

export default (err, req, res, next) => {
  console.error(err);
  let error = { error:err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(error));
};
