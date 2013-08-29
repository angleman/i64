// test/main.js
var should = require('should');
var i64    = require('../i64.js');

describe('i64.valueOf()', function() {
    describe('no arguments', function() {
        it('returns 0', function() {
            var result = i64.valueOf();
            should.exist(result);
            result.should.equal('0');
        });
    });
});



describe('i64.valueOf()', function() {
    describe('argument passed', function() {
        it('returns G5f2', function() {
            var result = i64.valueOf('G5f2');
            should.exist(result);
            result.should.equal('G5f2');
        });
    });
});