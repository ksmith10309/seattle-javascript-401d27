'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    // if value is not provided, just return the length
    if (value === undefined) return this.length;
    // push value to the end of the list
    this[this.length] = value;
    // modify the length
    this.length++;
    // return the length
    return this.length;
  }

  pop() {
    if (arguments.length > 0) {
      throw new Error('There should be no arguments');
    }
    // if the list is empty, return undefined
    if (this.length === 0) return undefined;
    // assign last element to variable to return
    let poppedEl = this[this.length - 1];
    // remove last element
    delete this[this.length - 1];
    // modify the length;
    this.length--;
    // return last element
    return poppedEl;
  }

  slice(begin=0, end=this.length) {
    // if begin is greater than the length, return an empty list
    if (begin > this.length) return new List();
    // if begin is negative, set as offset from the end
    if (begin < 0) begin = this.length + begin;
    // if begin is still negative after offset, set begin to 0
    if (begin < 0) begin = 0;
    // if end is negative, set as offset from the end
    if (end < 0) end = this.length + end;
    // if end is greater than the length, set end to the length
    if (end > this.length) end = this.length;
    let newList = new List();
    for (let i = begin; i < end; i++) {
      newList.push(this[i]);
    }
    return newList;
  }

  map(callback) {
    if (typeof callback !== 'function') {
      throw new Error('There should be a callback function');
    }
    let newList = new List();
    for (let i = 0; i < this.length; i++) {
      newList.push(callback(this[i]));
    }
    return newList;
  }

  filter(callback) {
    if (typeof callback !== 'function') {
      throw new Error('There should be a callback function');
    }
    let newList = new List();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) newList.push(this[i]);
    }
    return newList;
  }

  reduce(callback, initial) {
    if (typeof callback !== 'function') {
      throw new Error('There should be a callback function');
    }
    let accumulator;
    // if initial is not provided, set initial to element at index 0
    if (initial === undefined) {
      accumulator = this[0];
      for (let i = 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
      }
    } else {
      accumulator = initial;
      for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
      }
    }
    return accumulator;
  }
}

module.exports = List;
