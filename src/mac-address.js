const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  /*if (n.length > 17) return false;
  let element = n.split('-')
  console.log(n)
  console.log(element)*/
  let regExp = /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i;
  return regExp.test(n);

}

isMAC48Address('00-1B-63-84-45-E6')//, true);
isMAC48Address('Z1-1B-63-84-45-E6')//, false);

module.exports = {
  isMAC48Address
};
