var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('asInt()', function() {
    describe('no arguments', function() {
        it('returns 0', function() {
            var result = a64.asInt();
            should.exist(result);
            result.should.equal(0);
        });
    });

    describe('small integer', function() {
        var result;
        it('returns "mGW"', function() {
            result = a64.asInt(92858);
            should.exist(result);
            result.should.equal('mGW');
        });
        it('returns "92858"', function() {
            result = a64.asInt();
            should.exist(result);
            result.should.equal(92858);
        });
    });

    describe('large integer', function() {
        var result;
        it('returns "5abxVtZRda"', function() {
            result = a64.asInt('92937450274902858');
            should.exist(result);
            result.should.equal('5abxVtZRda');
        });
        it('returns "92937450274902858"', function() {
            result = a64.asInt();
            should.exist(result);
            result.should.equal('92937450274902858');
        });
    });
});
