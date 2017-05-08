'use strict';

var getSI = require('./definitions/si.js');
var categories = {
    length : require('./definitions/length.js'),
    temperature : require('./definitions/temperature.js'),
    price : require('./definitions/price.js'),
    time : require('./definitions/time.js'),
    weight : require('./definitions/weight.js')
};

var createUnitTable = function () {
    var result = getSI();

    for (var catId in categories) {

        if(!categories.hasOwnProperty(catId)) continue;
        var units = categories[catId];

        for (var id in units) {
            // skip loop if the property is from prototype
            if(!units.hasOwnProperty(id)) continue;
            result[id] = units[id];
        }
    }

    return result;
};

module.exports = createUnitTable;

