var assert = require('chai');
var wk4 = require('./test_wk4');

describe('1. findLongestWord()', function() {
  it('should return empty if no arguments', function() {
    assert.equal('',wk4.findLongestWord());
  });
});


// Ling.gu.se: Write a function findLongestWord() that takes an array of words and returns
// the length of the longest word. 
// 2. Ling.gu.se: Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. 
// 3. Ling.gu.se: Create an expression using both Math.random and Math.floor to generate a random integer between two variables, high and low, where high is greater than low. 
// 4. Ling.gu.se: Write a function named evaluateExpression(), that takes three arguments: two operands and an operator, and returns the number that results from applying the operator to the operands. For example: evaluateExpression(5, 7, ‘+’). 
// 5. W3Resource.com: Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 
// Solution 
// 6. W3Resource.com: Write a JavaScript program that accepts a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. 
// Solution. 
// 7. W3Resource.com: Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.[ Formula : c/5 = f-32/9 [ where c = temperature in celsius and f = temperature in fahrenheit ] Expected Output : 60°C is 140 °F 45°F is 7.222222222222222°C  Solution. 
// 8. W3Resource.com: Write a JavaScript program to find the most frequent item of an array.Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Sample Output : a ( 5
// ￼￼￼￼￼￼￼
// times ).  Solution
// 9. W3Resource.com: Write a JavaScript function to remove specified number of characters from a string. Test Data : console.log(truncate_string("Robin Singh”,4)); "Robi" 
// Solution. 
// 10. Complete the first thirteen programing challenges at the link below:  http://coderbyte.com/CodingArea/Challenges/ 
