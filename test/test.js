'use strict';

var expect = require('chai').expect;
var converter = require('../lib/converter');

describe('#numFormatter', function() {
    it('should return a number', function() {
        var result = converter(1, 'kg').to('g');
        expect(result).to.be.a('number');
    });

    it('should return undefined if value is not a number', function() {
        var result = converter('a', 'kg').to('g');
        expect(result).to.equal(undefined);
    });

    it('should return undefined if params are missing', function() {
        expect(converter('a').to('g')).to.equal(undefined);
        expect(converter(12, 'm').to()).to.equal(undefined);
        expect(converter().to('g')).to.equal(undefined);
    });

    it('should return convert km to m', function() {
        var result = converter(100, 'km').to('m');
        expect(result).to.equal(100000);
    });

    it('should return convert m to km', function() {
        var result = converter(200, 'm').to('km');
        expect(result).to.equal(0.2);
    });

});

