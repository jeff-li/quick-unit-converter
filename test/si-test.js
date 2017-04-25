'use strict';

var expect = require('chai').expect;
var getSIUnits = require('../lib/definitions/si-mapping.js')

describe('SI Generator test', function() {
    it('should return a a non-empty object', function() {
        var result = getSIUnits();
        expect(result).to.be.a('object');
        expect(result).to.not.be.empty;
    });

    it('should include meter', function() {
        var result = getSIUnits();
        expect(result.m).to.deep.equal({multiplier: 1, type: 'length', name: '' });
    });

});

