'use strict';

const router = require('../lib/router.js');

router.post('/api/v1/notes', (req, res) => {
  //POST: test 200, it should respond with the body content for a post request with a valid body
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.end(JSON.stringify(req.body));
});

router.put('/api/v1/notes', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.end(JSON.stringify(req.body));
});

router.get('/api/v1/notes', (req, res) => {
  let id = req.query.id || '';
  // GET: test 404, it should respond with 'not found' for valid requests made with an id that was not found - id of 0 is 'not found' id
  if (id === '0') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.end('ID was not found');
  }
  // GET: test 400, it should respond with 'bad request' if no id was provided in the request
  else if (id === '') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.end('ID was not provided');
  }
  // GET: test 200, it should contain a response body for a request made with a valid id
  else {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(`ID: ${id} was requested`);
  }
});

router.delete('/api/v1/notes', (req, res) => {
  let id = req.query.id || '';
  if (id === '0') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.end('ID was not found');
  }
  else if (id === '') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.end('ID was not provided');
  }
  else {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(`ID: ${id} was deleted`);
  }
});

module.exports = {};
