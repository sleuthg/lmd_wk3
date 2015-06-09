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
