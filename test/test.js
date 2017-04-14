'use strict';

var expect = require('chai').expect;
var numFormatter = require('../lib/converter');

describe('#numFormatter', function() {
    it('should convert single digits', function() {
        var result = numFormatter(1);
        expect(result).to.equal('1');
    });

});