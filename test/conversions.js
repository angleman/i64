var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('cross conversion', function() {
    describe('hexidecimal to integer', function() {
        it('returns 255', function() {
            var result = a64.asHex('ff');
            should.exist(result);

            result = a64.asInt();
            result.should.equal(255);
        });
    });
});
