const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let row = 0; row < rows; row++) {
    const rowResult = [];

    for (let col = 0; col < cols; col++) {
      let count = 0;

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const newRow = row + dr;
          const newCol = col + dc;

          if (
              newRow >= 0 &&
              newRow < rows &&
              newCol >= 0 &&
              newCol < cols &&
              !(dr === 0 && dc === 0) &&
              matrix[newRow][newCol]
          ) {
            count++;
          }
        }
      }

      rowResult.push(count);
    }

    result.push(rowResult);
  }

  return result;
}

module.exports = {
  minesweeper
};
