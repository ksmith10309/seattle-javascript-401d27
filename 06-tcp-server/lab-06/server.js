'use strict';

// Node modules
const net = require('net');
const EventEmitter = require('events');

// require client.js file
const Client = require('./model/client.js');

// obtain environment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// create a new server
const server = net.createServer();

// create a new instance of EventEmitter
const ee = new EventEmitter();

// set up an array for all of the connected clients
let clientPool = [];

// set up a connection event
server.on('connection', (socket) => {
  const client = new Client(socket);
  clientPool.push(client);
  client.socket.write('Welcome to the chatroom!\nHere is a list of commands:\n   @nickname [new-name] - to change your nickname\n   @list - to list everyone in the chatroom\n   @all [message] - to send a message to everyone in the chatroom\n   @dm [to-username] [message] - to send a private message\n   @quit - to leave the chatroom\n');

  // data is logged on the server and commands should be implemented on data event
  socket.on('data', (data) => {
    console.log(data.toString());
    const command = data.toString().split(' ').shift().trim();
    if(command.startsWith('@')) {
      const restOfCommand = data.toString().split(' ').splice(1).join(' ');
      ee.emit(command, client, restOfCommand);
    }
    else {
      ee.emit('default', client);
    }
  });
  
  // socket is removed from client pool on close event
  socket.on('close', function() {
    clientPool = clientPool.filter(user => user !== client);
    clientPool.forEach(user => {
      user.socket.write(`${client.nickname} has left the chatroom\n`);
    });
  });

  // error is logged on the server on error event
  socket.on('error', function(err) {
    console.log('Error: ' + err.message);
  });
});

// register event listeners
ee.on('@all', (client, message) => {
  clientPool.forEach(user => {
    user.socket.write(`${client.nickname}: ${message}`);
  });
});

ee.on('@quit', (client) => {
  client.socket.end();
});

ee.on('@list', (client) => {
  let list = clientPool.map(user => user.nickname).join('\n   ');
  client.socket.write(`Here is a list of everyone in the chatroom:\n   ${list}\n`);
});

ee.on('@nickname', (client, string) => {
  if (string.split(' ').length > 1) {
    client.socket.write('There should not be any spaces in your nickname\n');
  }
  else {
    let nickname = string.trim();
    if (clientPool.find(user => user.nickname === nickname)) {
      client.socket.write(`This nickname is already taken\n`);
    }
    else {
      client.nickname = nickname;
      client.socket.write(`Your nickname has been changed to ${nickname}\n`);
    }
  }
});

ee.on('@dm', (client, string) => {
  let username = string.split(' ')[0];
  let message = string.split(' ').slice(1).join(' ');
  
  let user = clientPool.find(user => user.nickname === username);
  if (user) user.socket.write(`${client.nickname}: ${message}`);
  else client.socket.write('This nickname was not found\n'); 
});

ee.on('default', (client) => {
  client.socket.write('Please begin all commands with @\n');
});

// start a server listening for connections
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
