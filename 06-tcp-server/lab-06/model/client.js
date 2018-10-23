'use strict';

const uuid = require('uuid/v4');

// Client constructor that models an individual connection
class Client {
  constructor(socket) {
    let id = uuid();
    this.id = id;
    this.nickname = `ID-${id}`;
    this.socket = socket;
  }
}

module.exports = Client;
