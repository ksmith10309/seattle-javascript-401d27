'use strict';

const List = require('../../lib/list.js');

describe('Testing the List class', () => {
  it('should have a length of zero', () => {
    let initialList = new List();
    expect(initialList.length).toBe(0);
  });
});

describe('Testing the push method', () => {
  let pushList = new List();
  pushList.push(6);
  pushList.push(8);
  pushList.push(1);
  pushList.push(3);  
  it('should add argument to the list', () => {
    expect(pushList.length).toBe(4);
    expect(pushList[2]).toBe(1);
  });
  it('should just return the length if no argument provided', () => {
    expect(pushList.push()).toBe(4);
    expect(pushList[4]).toBe(undefined);
  });
});

describe('Testing the pop method', () => {
  let popList = new List();
  popList.push(1);
  popList.push(8);
  popList.push(4);
  popList.push(9);
  it('should remove the last element of the list and return that element', () => {
    popList.pop();
    expect(popList.length).toBe(3);
    expect(popList.pop()).toBe(4);
  });
  it('should throw an error if any arguments are provided', () => {
    expect(() => popList.pop('string')).toThrow();
  });
  it('should return undefined if called on an empty array', () => {
    let emptyList = new List();
    expect(emptyList.pop()).toBe(undefined);
  });
});

describe('Testing the slice method', () => {
  let sliceList = new List();
  sliceList.push(9);
  sliceList.push(7);
  sliceList.push(4);
  sliceList.push(1);
  it('should return a shallow copy of a portion of the array', () => {
    const sliced1 = sliceList.slice(2,4);
    expect(sliced1.length).toEqual(2);
    expect(sliced1[0]).toEqual(4);
  });
  it('should should work if no arguments are provided', () => {
    const sliced2 = sliceList.slice();
    expect(sliced2.length).toEqual(4);
    expect(sliced2[3]).toEqual(1);
  });
  it('should work if only one argument is provided', () => {
    const sliced3 = sliceList.slice(1);
    expect(sliced3.length).toEqual(3);
    expect(sliced3[0]).toEqual(7);
  });
  it('should work if the begin value is greater than the length', () => {
    const sliced4 = sliceList.slice(6,5);
    expect(sliced4.length).toEqual(0);
    expect(sliced4[0]).toEqual(undefined);
  });
  it('should work if the end value is greater than the length', () => {
    const sliced5 = sliceList.slice(2,5);
    expect(sliced5.length).toEqual(2);
    expect(sliced5[1]).toEqual(1);
  });
  it('should work for negative begin and end values', () => {
    const sliced6 = sliceList.slice(0,-1);
    expect(sliced6.length).toEqual(3);
    expect(sliced6[2]).toEqual(4);

    const sliced7 = sliceList.slice(-10,-2);
    expect(sliced7.length).toEqual(2);
    expect(sliced7[0]).toEqual(9);
  });
});

describe('Testing the map method', () => {
  let mapList = new List();
  mapList.push(5);
  mapList.push(4);
  mapList.push(9);
  mapList.push(16);
  it('should iterate over the list and run the callback for each element', () => {
    let mapped = mapList.map(num => num * 2);
    expect(mapped.length).toEqual(mapList.length);
    expect(mapped).not.toEqual(mapList);
  });
  it('should throw an error if a callback function is not provided', () => {
    expect(() => mapList.map()).toThrow();
    expect(() => mapList.map('string')).toThrow();
  });
});

describe('Testing the filter method', () => {
  let filterList = new List();
  filterList.push(5);
  filterList.push(4);
  filterList.push(13);
  filterList.push(17);
  it('should iterate over the list and check if the callback is true for each element', () => {
    let filtered = filterList.filter(num => num > 10);
    expect(filtered.length).toEqual(2);
    expect(filtered[0]).toEqual(13);
  });
  it('should throw an error if a callback function is not provided', () => {
    expect(() => filterList.filter()).toThrow();
    expect(() => filterList.filter(123)).toThrow();
  });
});

describe('Testing the reduce method', () => {
  let reduceList = new List();
  reduceList.push(2);
  reduceList.push(5);
  reduceList.push(3);
  reduceList.push(8);
  it('should iterate over the list and reduce according to the callback', () => {
    let reduced1 = reduceList.reduce((acc,cur) => acc + cur);
    expect(reduced1).toEqual(18);

    let reduced2 = reduceList.reduce((acc,cur) => acc - cur, 30);
    expect(reduced2).toEqual(12);
  });
  it('should throw an error if a callback function is not provided', () => {
    expect(() => reduceList.reduce()).toThrow();
    expect(() => reduceList.reduce(null)).toThrow();
  });
});
