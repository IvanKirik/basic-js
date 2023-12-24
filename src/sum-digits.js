const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;

  // суммируем цифры числа
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);

    // если сумма больше 9, то заменяем число на сумму его цифр и переходим к следующей итерации
    if (n === 0 && sum > 9) {
      n = sum;
      sum = 0;
    }
  }

  return sum;
}

module.exports = {
  getSumOfDigits
};
