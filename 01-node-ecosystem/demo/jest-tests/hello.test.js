'use strict';

const hello = require('<filepath-to-hello.js-file>');

describe('Testing the hello module', () => {
  it('should say "hi" when the function is invoked', () => {
    expect(hello()).toBe('hi');
  });
});
