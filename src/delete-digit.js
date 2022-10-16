const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');//.sort((a,b) => b-a);
   let result = [];
   for (let i = 0; i < arr.length; i++) {
    arr.splice(i,1);
    //console.log(arr)
    result.push(Number(arr.join('')))
    //console.log(result)
    arr = n.toString().split('')
    //console.log(arr)
  }  
  return Math.max(...result);
}

//deleteDigit(1001)//, 101);
//deleteDigit(342)//, 42)

module.exports = {
  deleteDigit
};
