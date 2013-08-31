var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('geo()', function() {
    describe('select latitude', function() {
        var result;
        it('returns "DKji"', function() {
            result = a64.geo({latitude: 43.4108, longitude:-71.5653});
            should.exist(result);
            result = a64.valueOf();
            result.should.equal('DKji');
        });

        it('returns approximately 43.4108, -71.5653', function() {
            result = a64.geo();
            should.exist(result);
            result.should.have.keys('latitude','longitude');
            result.latitude.should.equal(43.41796875);
            result.longitude.should.equal(-71.54296875);
        }); 
    });
});
