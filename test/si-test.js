'use strict';

var expect = require('chai').expect;
var getSIUnits = require('../lib/definitions/si-mapping.js')

describe('SI Generator test', function() {
    it('should return a an object', function() {
        var result = getSIUnits();
        expect(result).to.be.a('object');
    });

    // it('should return undefined if value is not a number', function() {
    //     var result = converter('a', 'kg').to('g');
    //     expect(result).to.equal(undefined);
    // });

});

