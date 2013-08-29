var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('valueOf()', function() {
    describe('no arguments', function() {
        it('returns "0"', function() {
            var result = a64.valueOf();
            should.exist(result);
            result.should.equal('0');
        });
    });

    describe('argument passed', function() {
        it('returns G5f2', function() {
            var result = a64.valueOf('G5f2');
            should.exist(result);
            result.should.equal('G5f2');
        });
    });
});
