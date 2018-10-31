import uuid from 'uuid/v4';
import storage from '../storage/filesystem.js';

class Calendar {
  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.month = config && config.month || '';
    this.date = config && config.date || '';
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

  static updateOne(id, record) {
    return storage.update(id, record);
  }
}

export default Calendar;
