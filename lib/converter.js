'use strict';

/**
 * Covert units
 * @param {number} value
 * @param {string} unit
 * @return {number}
 */

var app = exports = module.exports = {};
var getUnitTable = require('./unit-table.js');
var measurements = getUnitTable();


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
            var result = 0;

            if (!isValidNumber(inputs.value) || 
                !isSupportedUnit(inputs._fromUnit) || 
                !isSupportedUnit(inputs._toUnit)) {
                return undefined;
            }

            if (typeof measurements[inputs._fromUnit].multiplier === "function") {
                result = measurements[inputs._fromUnit].multiplier(inputs.value, inputs._toUnit);
            } else {
                result = (inputs.value * measurements[inputs._fromUnit].multiplier) / measurements[inputs._toUnit].multiplier;
            }

            return parseFloat(result.toFixed(3));
        },

        to: function(unit) {
            this.inputs._toUnit = unit;

            return hasValidInputs(this.inputs) ? this.convert() : undefined;
        }
    };

};

module.exports = converter;