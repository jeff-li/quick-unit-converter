'use strict';

var expect = require('chai').expect;
var converter = require('../lib/converter');

describe('#numFormatter', function() {
    it('should return a number', function() {
        var result = converter(1, 'kg').to('g');
        expect(result).to.equal(123);
    });

    it('should return undefined if value is not a number', function() {
        var result = converter('a', 'kg').to('g');
        expect(result).to.equal(undefined);
    });

});

