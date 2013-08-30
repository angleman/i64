var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('asGeo()', function() {
    describe('select latitude', function() {
        var result;
        it('returns "ji"', function() {
            result = a64.asGeo(-71.5653);
            should.exist(result);
            result = a64.valueOf();
            result.should.equal('ji');
        });

        it('returns approximately -71.5653', function() {
            result = a64.asGeo();
            should.exist(result);
            result.should.equal(-71.54296875);
        });
    });
});
