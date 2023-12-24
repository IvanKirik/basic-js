const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const parts = domain.split('.').reverse();

    let key = "";
    for (let j = 0; j < parts.length; j++) {
      key += `.${parts[j]}`;
      if (dnsStats[key]) {
        dnsStats[key]++;
      } else {
        dnsStats[key] = 1;
      }
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats
};
