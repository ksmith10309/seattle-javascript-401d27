'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

router.routes = {};

const methods = ['POST', 'PUT', 'GET', 'DELETE'];

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
      let handler = router.routes[req.method][req.parsed.pathname];
      console.log('handler: ', handler);
      if (handler) {
        return handler(req, res);
      }
      else {
        console.error('NOT_FOUND', req.parsed.pathname);
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.end(`Resource Not Found (${req.parsed.pathname})`);

      }
    })
    .catch(err => {
      // POST: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 400;
      res.statusMessage = 'Bad Request';
      res.end(`Request body was not provided or request body was invalid`);
    });
};
