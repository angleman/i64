var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('asGeoSet()', function() {
    describe('select latitude', function() {
        var result;
        it('returns "DKji"', function() {
            result = a64.asGeoSet([43.4108, -71.5653]);
            should.exist(result);
            result = a64.valueOf();
            result.should.equal('DKji');
        });

        it('returns approximately 43.4108, -71.5653', function() {
            result = a64.asGeoSet();
            should.exist(result);
            result[0].should.equal(43.41796875);
            result[1].should.equal(-71.54296875);
        }); 
    });
});
