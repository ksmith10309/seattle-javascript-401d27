import fs from 'fs';

const storage = {};

const dataDirectory = `${__dirname}/../data`;

storage.get = (id) => {
  return new Promise((resolve, reject) => {
    let file = `${dataDirectory}/${id}.json`;
    fs.readFile(file, (err, data) => {
      if (err) reject(id);
      else if (data) {
        let obj = JSON.parse(data.toString());
        resolve(obj);
      }
    });
  });
};

storage.save = (data) => {
  return new Promise((resolve, reject) => {
    let file = `${dataDirectory}/${data.id}.json`;
    let text = JSON.stringify(data);
    fs.writeFile(file, text, (err) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

storage.delete = (id) => {
  return new Promise((resolve, reject) => {
    let file = `${dataDirectory}/${id}.json`;
    fs.unlink(file, (err) => {
      if (err) reject(id);
      resolve();
    });
  });
};

export default storage;
