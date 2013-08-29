// test/main.js
var should = require('should');
var i64    = require('../i64.js');

describe('isI64()', function() {
    describe('no arguments', function() {
        it('returns false', function() {
            var result = i64.isI64();
            should.exist(result);
            result.should.equal(false);
        });
    });

    describe('base64 string passed', function() {
        it('returns true', function() {
            var result = i64.isI64('Z3');
            should.exist(result);
            result.should.equal(true);
        });
    });

    describe('non base64 string passed', function() {
        it('returns false', function() {
            var result = i64.isI64('hi mom');
            should.exist(result);
            result.should.equal(false);
        });
    });

    describe('integer passed', function() {
        it('returns false', function() {
            var result = i64.isI64(15);
            should.exist(result);
            result.should.equal(false);
        });
    });

    describe('base64 encoded string passed', function() {
        it('returns false', function() {
            var result = i64.isI64('AAA==');
            should.exist(result);
            result.should.equal(false);
        });
    });
});




