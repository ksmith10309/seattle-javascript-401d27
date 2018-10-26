'use strict';

const storage = module.exports = {};

const database = {};

storage.get = (id) => {
  return new Promise((resolve, reject) => {
    if (database[id]) {
      resolve(database[id]);
    }
    else reject(id);
  });
};

storage.save = (data) => {
  return new Promise((resolve) => {
    database[data.id] = data;
    resolve(database[data.id]);
  });
};

storage.delete = (id) => {
  return new Promise((resolve, reject) => {
    if (database[id]) {
      delete database[id];
      resolve();
    }
    else reject(id);
  });
};
