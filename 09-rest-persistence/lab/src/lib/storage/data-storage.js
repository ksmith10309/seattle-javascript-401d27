'use strict';

const memoryStorage = require('./memory.js');
const fileStorage = require('./filesystem.js');

let dataStorageModule = (process.env.STORAGE === 'filesystem') ? fileStorage : memoryStorage;

module.exports = dataStorageModule;
