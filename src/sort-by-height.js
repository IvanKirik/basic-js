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
  // create a new array containing only the elements that are not equal to -1
  const sortedArr = arr.filter(num => num !== -1);

  // sort the array in ascending order
  sortedArr.sort((a, b) => a - b);

  // iterate over the original array and replace the non-negative elements with their sorted counterparts
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = sortedArr[index];
      index++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
