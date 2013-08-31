# TOC
   - [_intTo64Fast()](#_intto64fast)
     - [no arguments](#_intto64fast-no-arguments)
     - [negative number](#_intto64fast-negative-number)
     - [valid integer](#_intto64fast-valid-integer)
   - [_toIntFast()](#_tointfast)
     - [no arguments](#_tointfast-no-arguments)
     - [non base64 string passed](#_tointfast-non-base64-string-passed)
     - [base64 string passed](#_tointfast-base64-string-passed)
   - [asDate()](#asdate)
     - [select date](#asdate-select-date)
     - [current date](#asdate-current-date)
   - [asGeo()](#asgeo)
     - [select latitude](#asgeo-select-latitude)
   - [asGeoJson()](#asgeojson)
     - [select latitude](#asgeojson-select-latitude)
   - [asGeoSet()](#asgeoset)
     - [select latitude](#asgeoset-select-latitude)
   - [asHex()](#ashex)
     - [no arguments](#ashex-no-arguments)
     - [small hexidecimal](#ashex-small-hexidecimal)
     - [large hexidecimal](#ashex-large-hexidecimal)
   - [asInt()](#asint)
     - [no arguments](#asint-no-arguments)
     - [small integer](#asint-small-integer)
     - [large integer](#asint-large-integer)
   - [asMicrotime()](#asmicrotime)
     - [microtime.nowStruct()](#asmicrotime-microtimenowstruct)
     - [microtime.nowDouble()](#asmicrotime-microtimenowdouble)
     - [microtime.now()](#asmicrotime-microtimenow)
   - [cross conversion](#cross-conversion)
     - [hexidecimal to integer](#cross-conversion-hexidecimal-to-integer)
     - [integer to hexidecimal](#cross-conversion-integer-to-hexidecimal)
   - [isI64()](#isi64)
     - [no arguments](#isi64-no-arguments)
     - [non base64 string](#isi64-non-base64-string)
     - [integer passed](#isi64-integer-passed)
     - [base64 encoded string](#isi64-base64-encoded-string)
     - [base64 string](#isi64-base64-string)
     - [base64 string with underscore](#isi64-base64-string-with-underscore)
     - [base64 string with dash](#isi64-base64-string-with-dash)
   - [valueOf()](#valueof)
     - [no arguments](#valueof-no-arguments)
     - [argument passed](#valueof-argument-passed)
<a name=""></a>
 
<a name="_intto64fast"></a>
# _intTo64Fast()
<a name="_intto64fast-no-arguments"></a>
## no arguments
throws exception.

```js
var failed = false;
try {
    var result = a64._intTo64Fast();
} catch(err) {
    failed = true;
}
failed.should.equal(true);
```

<a name="_intto64fast-negative-number"></a>
## negative number
throws exception.

```js
var failed = false;
try {
    var result = a64._intTo64Fast(-22);
} catch(err) {
    failed = true;
}
failed.should.equal(true);
```

<a name="_intto64fast-valid-integer"></a>
## valid integer
returns "cR".

```js
var result = a64._intTo64Fast(821);
result.should.equal('cR');
```

<a name="_tointfast"></a>
# _toIntFast()
<a name="_tointfast-no-arguments"></a>
## no arguments
throws exception.

```js
var failed = false;
try {
    var result = a64._toIntFast();
} catch(err) {
    failed = true;
}
failed.should.equal(true);
```

<a name="_tointfast-non-base64-string-passed"></a>
## non base64 string passed
throws exception.

```js
var failed = false;
try {
    var result = a64._toIntFast(-22);
} catch(err) {
    failed = true;
}
failed.should.equal(true);
```

<a name="_tointfast-base64-string-passed"></a>
## base64 string passed
returns 821.

```js
var result = a64._toIntFast('cR');
result.should.equal(821);
```

<a name="asdate"></a>
# asDate()
<a name="asdate-select-date"></a>
## select date
returns "38tkcf00".

```js
var date = new Date(2013, 08, 29, 20, 12, 15, 0);
result = a64.asDate(date);
should.exist(result);
result = a64.valueOf();
result.should.equal('38tkcf00');
```

<a name="asdate-current-date"></a>
## current date
 returns "1377907301220".

```js
result = a64.asDate(date);
should.exist(result);
result = a64.asDate();
should.exist(result);
result = result.valueOf()
result.should.equal(date.valueOf());
```

<a name="asgeo"></a>
# asGeo()
<a name="asgeo-select-latitude"></a>
## select latitude
returns "ji".

```js
result = a64.asGeo(-71.5653);
should.exist(result);
result = a64.valueOf();
result.should.equal('ji');
```

returns approximately -71.5653.

```js
result = a64.asGeo();
should.exist(result);
result.should.equal(-71.54296875);
```

<a name="asgeojson"></a>
# asGeoJson()
<a name="asgeojson-select-latitude"></a>
## select latitude
returns "DKji".

```js
result = a64.asGeoJson({latitude: 43.4108, longitude:-71.5653});
should.exist(result);
result = a64.valueOf();
result.should.equal('DKji');
```

returns approximately 43.4108, -71.5653.

```js
result = a64.asGeoJson();
should.exist(result);
result.should.have.keys('latitude','longitude');
result.latitude.should.equal(43.41796875);
result.longitude.should.equal(-71.54296875);
```

<a name="asgeoset"></a>
# asGeoSet()
<a name="asgeoset-select-latitude"></a>
## select latitude
returns "DKji".

```js
result = a64.asGeoSet([43.4108, -71.5653]);
should.exist(result);
result = a64.valueOf();
result.should.equal('DKji');
```

returns approximately 43.4108, -71.5653.

```js
result = a64.asGeoSet();
should.exist(result);
result[0].should.equal(43.41796875);
result[1].should.equal(-71.54296875);
```

<a name="ashex"></a>
# asHex()
<a name="ashex-no-arguments"></a>
## no arguments
returns 0.

```js
var result = a64.asInt();
should.exist(result);
result.should.equal(0);
```

<a name="ashex-small-hexidecimal"></a>
## small hexidecimal
returns "3yzU".

```js
result = a64.asHex('0e28f8');
should.exist(result);
result = a64.asHex('0e28f8').valueOf();
result.should.equal('3yzU');
```

returns "e28f8".

```js
result = a64.asHex();
should.exist(result);
result.should.equal('0e28f8');
```

<a name="ashex-large-hexidecimal"></a>
## large hexidecimal
returns "2iWjuR0G-gGdyvMZ5WILSEdf".

```js
result = a64.asHex('092e937b502af90a8d89fc3d17ab2fda834f');
should.exist(result);
result.should.equal('2iWjuR0G-gGdyvMZ5WILSEdf');
```

returns "092e937b502af90a8d89fc3d17ab2fda834f".

```js
result = a64.asHex();
should.exist(result);
result.should.equal('092e937b502af90a8d89fc3d17ab2fda834f');
```

<a name="asint"></a>
# asInt()
<a name="asint-no-arguments"></a>
## no arguments
returns 0.

```js
var result = a64.asInt();
should.exist(result);
result.should.equal(0);
```

<a name="asint-small-integer"></a>
## small integer
returns "mGW".

```js
result = a64.asInt(92858);
should.exist(result);
result.should.equal('mGW');
```

returns "92858".

```js
result = a64.asInt();
should.exist(result);
result.should.equal(92858);
```

<a name="asint-large-integer"></a>
## large integer
returns "5abxVtZRda".

```js
result = a64.asInt('92937450274902858');
should.exist(result);
result.should.equal('5abxVtZRda');
```

returns "92937450274902858".

```js
result = a64.asInt();
should.exist(result);
result.should.equal('92937450274902858');
```

<a name="asmicrotime"></a>
# asMicrotime()
<a name="asmicrotime-microtimenowstruct"></a>
## microtime.nowStruct()
preserved date returns "1377907301".

```js
should.exist(micro);
result = a64.asMicrotime(micro);
should.exist(result);
result = a64.asMicrotime();
should.exist(result);
result.should.be.an.instanceOf(Array);
result.length.should.equal(2);
result[0].should.equal(micro[0]);
```

preserved microseconds returns "226146".

```js
result[1].should.equal(micro[1]);
```

<a name="asmicrotime-microtimenowdouble"></a>
## microtime.nowDouble()
preserved date returns "1377907301".

```js
should.exist(micro);
result = a64.asMicrotime(micro);
should.exist(result);
result = a64.asMicrotime();
should.exist(result);
result.should.be.an.instanceOf(Array);
result.length.should.equal(2);
result[0].should.equal(date);
```

preserved microseconds returns "226336".

```js
result[1].should.equal(microseconds);
```

<a name="asmicrotime-microtimenow"></a>
## microtime.now()
preserved date returns "1377907301".

```js
should.exist(micro);
result = a64.asMicrotime(micro);
should.exist(result);
result = a64.asMicrotime();
should.exist(result);
result.should.be.an.instanceOf(Array);
result.length.should.equal(2);
result[0].should.equal(date);
```

preserved microseconds returns "226535".

```js
result[1].should.equal(microseconds);
```

<a name="cross-conversion"></a>
# cross conversion
<a name="cross-conversion-hexidecimal-to-integer"></a>
## hexidecimal to integer
returns 255.

```js
result = a64.asHex('ff');
should.exist(result);

result = a64.asHex('ff').asInt();
result.should.equal(255);
```

<a name="cross-conversion-integer-to-hexidecimal"></a>
## integer to hexidecimal
returns fffe.

```js
result = a64.asInt(65534);
should.exist(result);

result = a64.asInt(65534).asHex();
result.should.equal('fffe');
```

<a name="isi64"></a>
# isI64()
<a name="isi64-no-arguments"></a>
## no arguments
returns false.

```js
var result = a64.isI64();
should.exist(result);
result.should.equal(false);
```

<a name="isi64-non-base64-string"></a>
## non base64 string
returns false.

```js
var result = a64.isI64('hi mom');
should.exist(result);
result.should.equal(false);
```

<a name="isi64-integer-passed"></a>
## integer passed
returns false.

```js
var result = a64.isI64(15);
should.exist(result);
result.should.equal(false);
```

<a name="isi64-base64-encoded-string"></a>
## base64 encoded string
returns false.

```js
var result = a64.isI64('AAA==');
should.exist(result);
result.should.equal(false);
```

<a name="isi64-base64-string"></a>
## base64 string
returns true.

```js
var result = a64.isI64('Z3');
should.exist(result);
result.should.equal(true);
```

<a name="isi64-base64-string-with-underscore"></a>
## base64 string with underscore
returns true.

```js
var result = a64.isI64('3_');
should.exist(result);
result.should.equal(true);
```

<a name="isi64-base64-string-with-dash"></a>
## base64 string with dash
returns true.

```js
var result = a64.isI64('-G');
should.exist(result);
result.should.equal(true);
```

<a name="valueof"></a>
# valueOf()
<a name="valueof-no-arguments"></a>
## no arguments
returns "0".

```js
var result = a64.valueOf();
should.exist(result);
result.should.equal('0');
```

<a name="valueof-argument-passed"></a>
## argument passed
returns "this" and G5f2.

```js
result = a64.valueOf('G5f2');
should.exist(result);

result = a64.valueOf('G5f2').valueOf();
result.should.equal('G5f2');
```

