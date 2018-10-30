import express from 'express';
import Calendar from '../models/calendar.js';

const router = new express.Router();

// GET: Returns a status of 400 and Bad Request if no ID was provided in the request
router.get('/api/v1/calendar', (req, res) => {
  console.error('ID_NOT_PROVIDED');
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.setHeader('Content-Type', 'text/html');
  res.end('No ID was provided');
});
  
router.get('/api/v1/calendar/:id', (req, res) => {
  Calendar.findOne(req.params.id)
  // GET: Returns a status of 200 and a response body for a request made with a valid id
    .then( data => {
      res.statusCode = 200;
      res.statusMessage = 'OK';
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    })
  // GET: Returns a status of 404 and Not Found for valid requests made with an ID that was not found
    .catch( err => {
      console.error('ID_NOT_FOUND', err);
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.setHeader('Content-Type', 'text/html');
      res.end('ID was not found');
    }); 
});
  
// DELETE: Returns a status of 400 and Bad Request if no ID was provided in the request
router.delete('/api/v1/calendar', (req, res) => {
  console.error('ID_NOT_PROVIDED');
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.setHeader('Content-Type', 'text/html');
  res.end('No ID was provided');
});
  
router.delete('/api/v1/calendar/:id', (req, res) => {
  Calendar.deleteOne(req.params.id)
  // DELETE: Returns a status of 204 and no content in the body
    .then(() => {
      res.statusCode = 204;
      res.statusMessage = 'OK';
      res.end();
    })
  // DELETE: Returns a status of 404 and Not Found for valid requests made with an ID that was not found
    .catch(err => {
      console.error('ID_NOT_FOUND', err);
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.setHeader('Content-Type', 'text/html');
      res.end('ID was not found');
    });
});
  
router.post('/api/v1/calendar', (req, res) => {
  // POST: Returns a status of 400 and Bad Request if no request body was provided
  if (Object.keys(req.body).length === 0) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.end('No request body was provided. Please provide a request body.');
    return;
  }
  let record = new Calendar(req.body);
  record.save()
  // POST: Returns a status of 200 and the body content for a request with a valid body
    .then(data => {
      res.statusCode = 200;
      res.statusMessage = 'OK';
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    })
    .catch(err => {
      let error = {error: err};
      res.statusCode = 500;
      res.statusMessage = 'Server Error';
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(error));
    });
});
  
// POST: Returns a status of 400 and Bad Request if the request body was invalid
router.use(function(err, req, res, next) {
  console.error('BAD_REQUEST', err.name);
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.end('The request body was invalid. Please provide a valid request body.');
});
  
const methods = ['GET', 'POST', 'DELETE'];
  
router.use(function(req, res, next) {
  // Returns a status code of 404 for routes that have not been registered
  if (!methods.includes(req.method)) {
    console.error('ROUTE_NOT_FOUND', req.method);
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.statusMessage = 'Route Not Found';
    res.end('Route has not been registered. Please use POST, GET, or DELETE.');
  }
  else {
    console.error('PATH_NOT_FOUND', req.path);
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.statusMessage = 'Path Not Found';
    res.end('Path has not been registered. Please check path.');
  }
});

export default router;
