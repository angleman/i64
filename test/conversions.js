var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('cross conversion', function() {
    describe('hexidecimal to integer', function() {
        var result;
        it('returns 255', function() {
            result = a64.asHex('ff');
            should.exist(result);

            result = a64.asHex('ff').asInt();
            result.should.equal(255);
        });
    });

    describe('integer to hexidecimal', function() {
        var result;
        it('returns fffe', function() {
            result = a64.asInt(65534);
            should.exist(result);

            result = a64.asInt(65534).asHex();
            result.should.equal('fffe');
        });
    });
});
