// test/main.js
var i64    = require('../i64.js');

describe('_toIntFast()', function() {
    describe('no arguments', function() {
        it('throws exception', function() {
            var failed = false;
            try {
                var result = i64._toIntFast();
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
                var result = i64._toIntFast(-22);
            } catch(err) {
                failed = true;
            }
            failed.should.equal(true);
        });
    });

    describe('valid integer', function() {
        it('returns cR', function() {
            var result = i64._toIntFast(821);
            result.should.equal('cR');
        });
    });
});

