'use strict';

const router = require('../lib/router.js');
const Notes = require('../models/notes.js');

// GET: Returns a status of 200 and a response body for a request made with a valid id
// POST: Returns a status of 200 and the body content for a request with a valid body
let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
};

// GET: Returns a status of 404 and Not Found for valid requests made with an ID that was not found
let notFoundError = (res, err) => {
  console.error('ID_NOT_FOUND', err);
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'text/html');
  res.end('ID was not found');
};

// GET: Returns a status of 400 and Bad Request if no ID was provided in the request
let notProvidedError = (res) => {
  console.error('ID_NOT_PROVIDED');
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.setHeader('Content-Type', 'text/html');
  res.end('No ID was provided');
};

let serverError = (res, err) => {
  let error = {error: err};
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(error));
};

router.get('/api/v1/notes', (req, res) => {
  if (req.query.id) {
    Notes.findOne(req.query.id)
      .then(data => sendJSON(res, data))
      .catch(err => notFoundError(res, err));
  }
  else notProvidedError(res);
});

// DELETE: Returns a status of 204 and no content in the body
router.delete('/api/v1/notes', (req, res) => {
  if (req.query.id) {
    Notes.deleteOne(req.query.id)
      .then(() => {
        res.statusCode = 204;
        res.statusMessage = 'OK';
        res.end();
      })
      .catch(err => notFoundError(res, err));
  }
  else notProvidedError(res);
});

router.post('/api/v1/notes', (req, res) => {
  let record = new Notes(req.body);
  record.save()
    .then(data => sendJSON(res, data))
    .catch(err => serverError(res, err));
});

module.exports = {};
