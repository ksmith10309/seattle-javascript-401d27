import express from 'express';

const router = new express.Router();

import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

import sendJSON from '../middleware/sendJSON.js';
import idNotProvided from '../middleware/idNotProvided.js';
import idNotFound from '../middleware/idNotFound.js';
import serverError from '../middleware/serverError.js';

// GET: Returns a status of 400 and Bad Request if no ID was provided in the request
router.get('/api/v1/:model', idNotProvided);

router.get('/api/v1/:model/:id', (req, res, next) => {
  req.model.findOne(req.params.id)
    // GET: Returns a status of 200 and a response body for a request made with a valid id
    .then(data => sendJSON(res, data))
    // GET: Returns a status of 404 and Not Found for valid requests made with an ID that was not found
    .catch(err => idNotFound(err, req, res, next));
});

// DELETE: Returns a status of 400 and Bad Request if no ID was provided in the request
router.delete('/api/v1/:model', idNotProvided);

router.delete('/api/v1/:model/:id', (req, res, next) => {
  req.model.deleteOne(req.params.id)
    // DELETE: Returns a status of 204 and no content in the body
    .then(() => {
      res.statusCode = 204;
      res.statusMessage = 'No Content';
      res.end();
    })
    // DELETE: Returns a status of 404 and Not Found for valid requests made with an ID that was not found
    .catch(err => idNotFound(err, req, res, next));
});

router.post('/api/v1/:model', (req, res, next) => {
  // POST: Returns a status of 400 and Bad Request if no request body was provided
  if (Object.keys(req.body).length === 0) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.end('No request body was provided. Please provide a request body.');
    return;
  }
  let record = new req.model(req.body);
  record.save()
    // POST: Returns a status of 200 and the body content for a request with a valid body
    .then(data => sendJSON(res, data))
    .catch(err => serverError(err, req, res, next));
});

// PUT: Returns a status of 400 and Bad Request if no ID was provided in the request
router.put('/api/v1/:model', idNotProvided);

router.put('/api/v1/:model/:id', (req, res, next) => {
  // PUT: Returns a status of 400 and Bad Request if no request body was provided
  if (Object.keys(req.body).length === 0) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.end('No request body was provided. Please provide a request body.');
    return;
  }
  let record = new req.model(req.body);
  req.model.updateOne(req.params.id, record)
    // PUT: Returns a status of 200 and the body content for a request with a valid body
    .then(data => sendJSON(res, data))
    // PUT: Returns a status of 404 and Not Found for valid requests made with an ID that was not found
    .catch(err => idNotFound(err, req, res, next));
});

export default router;
