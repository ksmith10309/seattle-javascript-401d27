'use strict';

const http = require('http');

const urlparser = require('./lib/urlparser');
const bodyparser = require('./lib/bodyparser');

const cowsay = require('cowsay');

const requestHandler = (request, response) => {
  console.log(`${request.method} ${request.url}`);
  if (request.method === 'GET') {
    urlparser(request)
      .then(request => {
        if (request.parsed.pathname === '/') {
          response.setHeader('Content-Type', 'text/html');
          response.statusCode = 200;
          response.statusMessage = 'OK';
          response.end(`
        <!DOCTYPE html><html><head><title> cowsay </title></head><body><header><nav><ul><li><a href="/cowsay?text=Welcome to cowsay!">cowsay</a></li></ul></nav><header><main>
        <p>Click the link above to access cowsay!</p></main></body></html>`);
          return;
        }
        else if (request.parsed.pathname === '/cowsay') {
          response.setHeader('Content-Type', 'text/html');
          response.statusCode = 200;
          response.statusMessage = 'OK';
          if (!request.query.text) { request.query.text = 'I need something good to say!'; }
          response.end(`
        <!DOCTYPE html><html><head><title> cowsay </title></head><body><h1> cowsay </h1><pre>
        ${cowsay.say({text: request.query.text}) }
        </pre></body></html>`);
          return;
        }
        else {
          response.setHeader('Content-Type', 'text/html');
          response.statusCode = 404;
          response.statusMessage = 'Not Found';
          response.end('Resource Not Found');
        }
      })
      .catch(err => {
        response.writeHead(500);
        response.end(err);
      });
  }

  if (request.method === 'POST') { 
    bodyparser(request)
      .then(request => {
        if (request.parsed.pathname === '/api/cowsay') {
          if (!request.body) {
            response.setHeader('Content-Type', 'text/html');
            response.statusCode = 400;
            // Return error when POST request is without body  
            response.end(JSON.stringify({'error': 'invalid request: body required'}));
            return;
          }
          else if (!request.body.text) {
            response.setHeader('Content-Type', 'text/html');
            response.statusCode = 400;
            // Return error when POST request is without text property on body
            response.end(JSON.stringify({'error': 'invalid  request:text query required'}));
            return;
          }
          else { 
            response.setHeader('Content-Type', 'text/json');
            response.statusCode = 200;
            response.statusMessage = 'OK';
            let content = cowsay.say(request.body);
            // Return content when POST request is valid
            response.end(JSON.stringify({'content': content}));
            return;
          }
        }
        else {
          response.setHeader('Content-Type', 'text/html');
          response.statusCode = 404;
          response.statusMessage = 'Not Found';
          response.end('Resource Not Found');
        }
      })
      .catch(err => {
        response.writeHead(500);
        response.end(err);
      });
  }
};

const app = http.createServer(requestHandler);

module.exports = {
  start: (port, callback) => app.listen(port, callback),
  stop: (callback) => app.close(callback),
};
