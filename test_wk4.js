var assert = require('chai').assert;
var wk4 = require('./wk4.js');

// Problem 1: Write a function findLongestWord() that takes an array of words
// and returns the length of the longest word.
describe('findLongestWord()', function() {
  it('should return 0 if no arguments', function() {
    assert.equal(0, wk4.findLongestWord());
  });
  it('should return 0 string if empty array', function() {
    assert.equal(0, wk4.findLongestWord([]));
  });
  it('should return the length if only a string', function() {
    assert.equal(5, wk4.findLongestWord('donut'));
    assert.equal(0, wk4.findLongestWord(''));
  });
  it('should return the longest word from an array of words', function() {
    assert.equal(5, wk4.findLongestWord(['donut', 'cake']));
    assert.equal(5, wk4.findLongestWord(['cake', 'donut']));
  });
});
