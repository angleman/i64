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

    describe('small integer passed and returned', function() {
        it('returns UNKNOWN', function() {
            var result = a64.asInt(928);
//            should.exist(result);
//            console.log('result: ' + result + '.');
        });
    });
});
