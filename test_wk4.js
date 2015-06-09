var assert = require('chai').assert;
var wk4 = require('./wk4.js');
var num = require('numbers');

// Problem 1: Write a function findLongestWord() that takes an array of words
// and returns the length of the longest word.
describe('findLongestWord(words)', function() {
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

// Problem 2: Define a function sum() and a function multiply() that sums and
// multiplies (respectively) all the numbers in an array of numbers. For
// example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should
// return 24.
describe('Math functions', function() {
  var arr;
  before(function() {
    arr = [1,2,3,4];
  });
  describe('sum()', function() {
    it('should return the sum of all values', function() {
      assert.equal(10,wk4.sum(arr));
    });
  });
  describe('multiply()', function() {
    it('should return the product of all values', function() {
      assert.equal(24,wk4.multiply(arr));
    });
  });
});

// Problem 3: Create an expression using both Math.random and Math.floor to
// generate a random integer between two variables, high and low, where high is
// greater than low
// Assume: high and low are inclusive (i.e. the result can equal high or low)
describe('randomInteger(high, low)', function() {
  var res=[], high, low;
  var nMC; // number of Monte-Carlo trials
  before(function() {
    high = 5;
    low = 2;
    nMC = (high-low+1)*100;
    for (var i=0;i<nMC;i++) {
      res[i] = wk4.randomInteger(high,low);
    }
  });
  it('should return an integer', function() {
    for (var i=0;i<nMC;i++) assert.equal(0,Math.floor(res[i])-res[i]);
  });
  it('should return a value less than or equal to high', function() {
    for (var i=0;i<nMC;i++) assert.equal(true,res[i]<=high);
  });
  it('should return a value greater than or equal to low', function() {
    for (var i=0;i<nMC;i++) assert.equal(true,res[i]>=low);
  });
  it('should be able to return a value equal to high', function() {
    var highCheck = false;
    for (var i=0;i<nMC;i++) {
      if (res[i]===Math.floor(high)) highCheck = true;
    }
    assert.equal(true,highCheck);
  });
  it('should be able to return a value equal to low', function() {
    var lowCheck = false;
    for (var i=0;i<nMC;i++) {
      if (res[i]===Math.ceil(low)) lowCheck = true;
    }
    assert.equal(true,lowCheck);
  });
  it('should return an inclusive uniform distribution (TBD)', function() {
    // @TODO: Put a chi-squared test here to test uniform distribution
    // http://www.macwright.org/simple-statistics/
  });

});
