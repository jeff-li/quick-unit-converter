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

    it('should return convert C to F', function() {
        var result = converter(200, 'C').to('F');
        expect(result).to.equal(392);
    });
    
    it('should return convert F to K', function() {
        var result = converter(60, 'F').to('K');
        expect(result).to.equal(288.706);
    });

    it('should return convert C to K', function() {
        var result = converter(20, 'C').to('K');
        expect(result).to.equal(293.15);
    });

    it('should return convert K to C', function() {
        var result = converter(300, 'K').to('C');
        expect(result).to.equal(26.85);
    });
});

