function findLongestWord(words) {
  if (typeof(words) === 'undefined') {
    return 0;
  } else if (typeof(words) === 'string') {
    return words.length;
  } else {
    var c = 0;
    var a = 0;
    for (var i=0; i<words.length; i++) {
      a = words[i].length;
      c = a > c ? a : c;
    }
    return c;
  }
}
exports.findLongestWord = findLongestWord;

function sum(arr) {
  var S = 0;
  for (var i=0; i<arr.length; i++) S+=arr[i];
  return S;
}
exports.sum = sum;

function multiply(arr) {
  var P = 1;
  for (var i=0; i<arr.length; i++) {
    P*=arr[i];
    if (P===0) return 0;
  }
  return P;
}
exports.multiply = multiply;

function randomInteger(high,low) {
  if (low>high) {
    var lowTemp = low;
    low = high;
    high = lowTemp;
  }
  return Math.floor(Math.random() * (high+1 - low) + low); // the "+1" is to make high inclusive
}
exports.randomInteger = randomInteger;
