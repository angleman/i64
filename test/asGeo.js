var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('asGeo()', function() {
    describe('select latitude', function() {
        var result;
        it('returns "j"', function() {
            a64.config({ geo_precision: 1 });
            result = a64.asGeo(-71.5653);
            should.exist(result);
            result = a64.valueOf();
            result.should.equal('j');
        });

        it('returns approximately -71.5653', function() {
            result = a64.asGeo();
            should.exist(result);
            result.should.equal(-73.125);
        });



        it('returns "ji"', function() {
            a64.config({ geo_precision: 2 });
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



        it('returns "jhM"', function() {
            a64.config({ geo_precision: 3 });
            result = a64.asGeo(-71.5653);
            should.exist(result);
            result = a64.valueOf();
            result.should.equal('jhM');
        });

        it('returns approximately -71.5653', function() {
            result = a64.asGeo();
            should.exist(result);
            result.should.equal(-71.56494140625);
        });



        it('returns "jhLL"', function() {
            a64.config({ geo_precision: 4 });
            result = a64.asGeo(-71.5653);
            should.exist(result);
            result = a64.valueOf();
            result.should.equal('jhLL');
        });

        it('returns approximately -71.5653', function() {
            result = a64.asGeo();
            should.exist(result);
            result.should.equal(-71.56530618667603);
        });



        it('returns "jhLLi"', function() {
            a64.config({ geo_precision: 5 });
            result = a64.asGeo(-71.5653);
            should.exist(result);
            result = a64.valueOf();
            result.should.equal('jhLLi');
        });

        it('returns approximately -71.5653', function() {
            result = a64.asGeo();
            should.exist(result);
            result.should.equal(-71.56530015170574);
        });
    });
});
