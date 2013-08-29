// test/main.js
var should = require('should');
var i64    = require('../i64.js');

describe('i64._intTo64fast()', function() {
    describe('no arguments', function() {
        it('throws exception', function() {
            var failed = false;
            try {
                var result = i64._intTo64fast();
            } catch(err) {
                failed = true;
            }
            failed.should.equal(true);
        });
    });

    describe('negative number', function() {
        it('throws exception', function() {
            var failed = false;
            try {
                var result = i64._intTo64fast(-22);
            } catch(err) {
                failed = true;
            }
            failed.should.equal(true);
        });
    });

    describe('valid integer', function() {
        it('returns cR', function() {
            var result = i64._intTo64fast(821);
            result.should.equal('cR');
        });
    });
});

