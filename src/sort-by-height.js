const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArr = arr;
  sortedArr = sortedArr.filter((element) => {
    if (element !== -1) {
      return element;
    }
  }).sort((a, b) => a - b);
  //console.log(sortedArr);
  //console.log(arr);
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != -1) {
      arr[i] = sortedArr[index];
      index++;
    }
  }
  //console.log(arr)
  return arr;
}

//sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])

module.exports = {
  sortByHeight
};
