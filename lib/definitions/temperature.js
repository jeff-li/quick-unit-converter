module.exports = {
    'C': {type: 'temperature', multiplier: function(v, toUnit) {
        switch(toUnit) {
            case 'K':
                return (v + 273.15);
            case 'F':
                return (v * (9/5)) + 32;
            default:
                return v;
        }
    }, name: ''},
    'K': {type: 'temperature', multiplier: function(v, toUnit) {
        switch(toUnit) {
            case 'C':
                return (v - 273.15);
            case 'F':
                return (v * 9/5 - 459.67);
            default:
                return v;
        }
    }, name: ''},
    'F': {type: 'temperature', multiplier: function(v, toUnit) {
        switch(toUnit) {
            case 'C':
                return ((v - 32) * (5/9));
            case 'K':
                return (v + 459.67) * (5/9);
            default:
                return v;
        }
    }, name: ''}
};