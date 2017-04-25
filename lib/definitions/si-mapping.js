module.exports = function () {
    var siMapping = {};
    var prefixes = ['Y', 'Z', 'E', 'P', 'T', 'G', 'M', 'k', 'h', 'da', '', 'd', 'c', 'm', 'u', 'n', 'p', 'f', 'a', 'z', 'y'];
    var factors = [24, 21, 18, 15, 12, 9, 6, 3, 2, 1, 0, -1, -2, -3, -6, -9, -12, -15, -18, -21, -24];
    
    var units = [{
            'symbol': 'g', 'category': 'mass' 
        }, {
            'symbol': 'b', 'category': 'digital' 
        }, {
            'symbol': 'l', 'category': 'length' 
        }, {
            'symbol': 'm', 'category': 'length' 
        }];
    
    var addUnit = function (actualUnit, multiplier, category) {
        siMapping[actualUnit] = {multiplier: multiplier, type: category, name: ''};
    };

    units.forEach(function(unit) {
        prefixes.forEach(function(prefix, index) {
            addUnit(prefix + unit.symbol, Math.pow(10, factors[index]) ,unit.category);
        })
    }); 
    
    return siMapping;
}