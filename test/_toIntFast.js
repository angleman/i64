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

    describe('non base64 string passed', function() {
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

    describe('base64 string passed', function() {
        it('returns 821', function() {
            var result = i64._toIntFast('cR');
            result.should.equal(821);
        });
    });
});

