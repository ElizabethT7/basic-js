const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let arrayS1 = s1.split('');
  //console.log(arrayS1);
  let string2 = s2;
  while(arrayS1.length > 0)  {
    const char = arrayS1.pop();
    //console.log(arrayS1);
    //console.log(char)
    if (string2.includes(char)) {
      sum++;
      string2 = string2.replace(char, '');
    }
  }
  //console.log(sum)
  return sum;
}

//getCommonCharacterCount('aabcc', 'adcaa')//, 3);

module.exports = {
  getCommonCharacterCount
};
