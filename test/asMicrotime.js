var should    = require('should')
  , i64       = require('../i64.js')
  , microtime = require('microtime')
  , a64       = i64.new()
;



describe('asMicrotime()', function() {
    var result;
    describe('microtime.nowStruct()', function() {
        var micro = microtime.nowStruct()
          , json  = JSON.stringify(micro)
        ;
        it('preserved date returns "' + micro[0] + '"', function() {
            should.exist(micro);
            result = a64.asMicrotime(micro);
            should.exist(result);
            result = a64.asMicrotime();
            should.exist(result);
            result.should.be.an.instanceOf(Array);
            result.length.should.equal(2);
            result[0].should.equal(micro[0]);
        });

        it('preserved microseconds returns "' + micro[1] + '"', function() {
            result[1].should.equal(micro[1]);
        });
    });

    describe('microtime.nowDouble()', function() {
        var micro        = microtime.nowDouble()
          , date         = Math.floor(micro)
          , microseconds = Math.floor((micro - date) * 1000000)
        ;
        it('preserved date returns "' + date + '"', function() {
            should.exist(micro);
            result = a64.asMicrotime(micro);
            should.exist(result);
            result = a64.asMicrotime();
            should.exist(result);
            result.should.be.an.instanceOf(Array);
            result.length.should.equal(2);
            result[0].should.equal(date);
        });

        it('preserved microseconds returns "' + microseconds + '"', function() {
            result[1].should.equal(microseconds);
        });
    });

    describe('microtime.now()', function() {
        var micro        = microtime.now()
          , date         = Math.floor(micro / 1000000)
          , microseconds = micro - (date * 1000000)
        ;
        it('preserved date returns "' + date + '"', function() {
            should.exist(micro);
            result = a64.asMicrotime(micro);
            should.exist(result);
            result = a64.asMicrotime();
            should.exist(result);
            result.should.be.an.instanceOf(Array);
            result.length.should.equal(2);
            result[0].should.equal(date);
        });

        it('preserved microseconds returns "' + microseconds + '"', function() {
            result[1].should.equal(microseconds);
        });
    }); 
});
