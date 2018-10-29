'use strict';

const storage = require('../lib/storage/data-storage.js');
const uuid = require('uuid/v4');

class Note {
  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.title = config && config.title || '';
    this.content = config && config.content || '';
  }

  save() {
    return storage.save(this);
  }

  static findOne(id) {
    return storage.get(id);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }
}

module.exports = Note;
