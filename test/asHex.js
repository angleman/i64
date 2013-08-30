var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('asHex()', function() {
    describe('no arguments', function() {
        it('returns 0', function() {
            var result = a64.asInt();
            should.exist(result);
            result.should.equal(0);
        });
    });

    describe('small hexidecimal', function() {
        var result;
        it('returns "3yzU"', function() {
            result = a64.asHex('0e28f8');
            should.exist(result);
            result = a64.asHex('0e28f8').valueOf();
            result.should.equal('3yzU');
        });
        it('returns "e28f8"', function() {
            result = a64.asHex();
            should.exist(result);
            result.should.equal('0e28f8');
        });
    });

    describe('large hexidecimal', function() {
        var result;
        it('returns "2iWjuR0G-gGdyvMZ5WILSEdf"', function() {
            result = a64.asHex('092e937b502af90a8d89fc3d17ab2fda834f');
            should.exist(result);
            result.should.equal('2iWjuR0G-gGdyvMZ5WILSEdf');
        });
        it('returns "092e937b502af90a8d89fc3d17ab2fda834f"', function() {
            result = a64.asHex();
            should.exist(result);
            result.should.equal('092e937b502af90a8d89fc3d17ab2fda834f');
        });
    });
});
