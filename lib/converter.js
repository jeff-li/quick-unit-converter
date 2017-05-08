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


var converter = function(value, unit) {

    var isSupportedUnit = function(unit) {
        return measurements.hasOwnProperty(unit);
    };

    var isValidNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    var hasValidInputs = function(inputs) {
        return (inputs.value != null) && (inputs._fromUnit != null) && (inputs._toUnit != null);
    };

    return {
        inputs: {
            value: value,
            _fromUnit: unit,
            _toUnit: undefined,
        },
        
        convert: function() {
            var inputs = this.inputs;

            if (!isValidNumber(inputs.value) || 
                !isSupportedUnit(inputs._fromUnit) || 
                !isSupportedUnit(inputs._toUnit)) {
                return undefined;
            }

            if (typeof measurements[inputs._fromUnit].multiplier === "function") {
                return 'a function';
            } else {
                return (inputs.value * measurements[inputs._fromUnit].multiplier) / measurements[inputs._toUnit].multiplier;
            }
        },

        to: function(unit) {
            this.inputs._toUnit = unit;

            return hasValidInputs(this.inputs) ? this.convert() : undefined;
        }
    };

};

module.exports = converter;