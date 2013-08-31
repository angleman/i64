var should = require('should')
  , i64    = require('../i64.js')
  , a64    = i64.new()
;



describe('cross conversion', function() {
    describe('hexidecimal to integer', function() {
        var result;
        it('returns 255', function() {
            result = a64.hex('ff');
            should.exist(result);

            result = a64.hex('ff').int();
            result.should.equal(255);
        });
    });

    describe('integer to hexidecimal', function() {
        var result;
        it('returns fffe', function() {
            result = a64.int(65534);
            should.exist(result);

            result = a64.int(65534).hex();
            result.should.equal('fffe');
        });
    });
});
