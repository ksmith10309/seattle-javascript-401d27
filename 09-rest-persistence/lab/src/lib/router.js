'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

router.routes = {};

const methods = ['GET', 'POST', 'DELETE', 'PUT'];

methods.forEach((method) => {
  router.routes[method] = {};
  router[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };
});

router.route = (req, res) => {
  console.log(`${req.method} ${req.url}`);

  return parser(req)
    .then(req => {
      // Returns a status code of 404 for routes that have not been registered
      if (!methods.includes(req.method)) {
        console.error('ROUTE_NOT_REGISTERED', req.method);
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.statusMessage = 'Route Not Found';
        res.end(`Route has not been registered. Please use POST, GET, or DELETE.`);
        return;
      }

      let handler = router.routes[req.method][req.parsed.pathname];
      if (handler) {
        return handler(req, res);
      }
    })
    .catch(err => {
      // POST: Returns a status of 400 and Bad Request if no request body was provided or the body was invalid
      console.error('BAD_POST_REQUEST', err.name);
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 400;
      res.statusMessage = 'Bad Request';
      res.end('No request body was provided or the request body was invalid. Please provide a valid request body.');
    });
};
