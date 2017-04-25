'use strict';

/**
 * Covert units
 * @param {number} value
 * @param {string} unit
 * @return {number}
 */

var app = exports = module.exports = {};
var getSIUnits = require('./definitions/si-mapping.js')
var length =  require('./definitions/length.js')
var measurements = getSIUnits();

console.log(measurements)

var converter = function(value, unit) {

    return {
        value: value,
        _fromUnit: unit,
        _toUnit: undefined,

        convert: function() {
            if (!this.isNumber(this.value)) {
                return undefined;
            }
            

            return 123;
        },

        isSupportedUnit: function(unit) {

        },

        isNumber: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },

        hasValidInputs: function() {
            return this.value != null && 
                    this._fromUnit != null && 
                    this._toUnit != null;
        },

        to: function(unit) {
            this._toUnit = unit;

            return this.hasValidInputs ? this.convert() : undefined;
        }
    };

};

module.exports = converter;