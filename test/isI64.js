var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('isI64()', function() {
    describe('no arguments', function() {
        it('returns false', function() {
            var result = a64.isI64();
            should.exist(result);
            result.should.equal(false);
        });
    });

    describe('non base64 string', function() {
        it('returns false', function() {
            var result = a64.isI64('hi mom');
            should.exist(result);
            result.should.equal(false);
        });
    });

    describe('integer passed', function() {
        it('returns false', function() {
            var result = a64.isI64(15);
            should.exist(result);
            result.should.equal(false);
        });
    });

    describe('base64 encoded string', function() {
        it('returns false', function() {
            var result = a64.isI64('AAA==');
            should.exist(result);
            result.should.equal(false);
        });
    });

    describe('base64 string', function() {
        it('returns true', function() {
            var result = a64.isI64('Z3');
            should.exist(result);
            result.should.equal(true);
        });
    });

    describe('base64 string with underscore', function() {
        it('returns true', function() {
            var result = a64.isI64('3_');
            should.exist(result);
            result.should.equal(true);
        });
    });
    describe('base64 string with dash', function() {
        it('returns true', function() {
            var result = a64.isI64('-G');
            should.exist(result);
            result.should.equal(true);
        });
    });
});




