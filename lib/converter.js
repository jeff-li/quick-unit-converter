'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

var app = exports = module.exports = {};

module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};