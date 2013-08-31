# TOC
   - [_intTo64Fast()](#_intto64fast)
     - [no arguments](#_intto64fast-no-arguments)
     - [negative number](#_intto64fast-negative-number)
     - [valid integer](#_intto64fast-valid-integer)
   - [_toIntFast()](#_tointfast)
     - [no arguments](#_tointfast-no-arguments)
     - [non base64 string passed](#_tointfast-non-base64-string-passed)
     - [base64 string passed](#_tointfast-base64-string-passed)
   - [cross conversion](#cross-conversion)
     - [hexidecimal to integer](#cross-conversion-hexidecimal-to-integer)
     - [integer to hexidecimal](#cross-conversion-integer-to-hexidecimal)
   - [date()](#date)
     - [select date](#date-select-date)
     - [current date](#date-current-date)
   - [degree()](#degree)
     - [select latitude](#degree-select-latitude)
   - [geo()](#geo)
     - [select latitude](#geo-select-latitude)
   - [geoSet()](#geoset)
     - [select latitude](#geoset-select-latitude)
   - [hex()](#hex)
     - [no arguments](#hex-no-arguments)
     - [small hexidecimal](#hex-small-hexidecimal)
     - [large hexidecimal](#hex-large-hexidecimal)
   - [int()](#int)
     - [no arguments](#int-no-arguments)
     - [small integer](#int-small-integer)
     - [large integer](#int-large-integer)
   - [isI64()](#isi64)
     - [no arguments](#isi64-no-arguments)
     - [non base64 string](#isi64-non-base64-string)
     - [integer passed](#isi64-integer-passed)
     - [base64 encoded string](#isi64-base64-encoded-string)
     - [base64 string](#isi64-base64-string)
     - [base64 string with underscore](#isi64-base64-string-with-underscore)
     - [base64 string with dash](#isi64-base64-string-with-dash)
   - [microtime()](#microtime)
     - [microtime.nowStruct()](#microtime-microtimenowstruct)
     - [microtime.nowDouble()](#microtime-microtimenowdouble)
     - [microtime.now()](#microtime-microtimenow)
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

<a name="cross-conversion"></a>
# cross conversion
<a name="cross-conversion-hexidecimal-to-integer"></a>
## hexidecimal to integer
returns 255.

```js
result = a64.hex('ff');
should.exist(result);

result = a64.hex('ff').int();
result.should.equal(255);
```

<a name="cross-conversion-integer-to-hexidecimal"></a>
## integer to hexidecimal
returns fffe.

```js
result = a64.int(65534);
should.exist(result);

result = a64.int(65534).hex();
result.should.equal('fffe');
```

<a name="date"></a>
# date()
<a name="date-select-date"></a>
## select date
returns "38tkcf00".

```js
var date = new Date(2013, 08, 29, 20, 12, 15, 0);
result = a64.date(date);
should.exist(result);
result = a64.valueOf();
result.should.equal('38tkcf00');
```

<a name="date-current-date"></a>
## current date
 returns "1377949347906".

```js
result = a64.date(date);
should.exist(result);
result = a64.date();
should.exist(result);
result = result.valueOf()
result.should.equal(date.valueOf());
```

<a name="degree"></a>
# degree()
<a name="degree-select-latitude"></a>
## select latitude
returns "j".

```js
a64.config({ geo_precision: 1 });
result = a64.degree(-71.5653);
should.exist(result);
result = a64.valueOf();
result.should.equal('j');
```

returns approximately -71.5653.

```js
result = a64.degree();
should.exist(result);
result.should.equal(-73.125);
```

returns "ji".

```js
a64.config({ geo_precision: 2 });
result = a64.degree(-71.5653);
should.exist(result);
result = a64.valueOf();
result.should.equal('ji');
```

returns approximately -71.5653.

```js
result = a64.degree();
should.exist(result);
result.should.equal(-71.54296875);
```

returns "jhM".

```js
a64.config({ geo_precision: 3 });
result = a64.degree(-71.5653);
should.exist(result);
result = a64.valueOf();
result.should.equal('jhM');
```

returns approximately -71.5653.

```js
result = a64.degree();
should.exist(result);
result.should.equal(-71.56494140625);
```

returns "jhLL".

```js
a64.config({ geo_precision: 4 });
result = a64.degree(-71.5653);
should.exist(result);
result = a64.valueOf();
result.should.equal('jhLL');
```

returns approximately -71.5653.

```js
result = a64.degree();
should.exist(result);
result.should.equal(-71.56530618667603);
```

returns "jhLLi".

```js
a64.config({ geo_precision: 5 });
result = a64.degree(-71.5653);
should.exist(result);
result = a64.valueOf();
result.should.equal('jhLLi');
```

returns approximately -71.5653.

```js
result = a64.degree();
should.exist(result);
result.should.equal(-71.56530015170574);
```

<a name="geo"></a>
# geo()
<a name="geo-select-latitude"></a>
## select latitude
returns "DKji".

```js
result = a64.geo({latitude: 43.4108, longitude:-71.5653});
should.exist(result);
result = a64.valueOf();
result.should.equal('DKji');
```

returns approximately 43.4108, -71.5653.

```js
result = a64.geo();
should.exist(result);
result.should.have.keys('latitude','longitude');
result.latitude.should.equal(43.41796875);
result.longitude.should.equal(-71.54296875);
```

<a name="geoset"></a>
# geoSet()
<a name="geoset-select-latitude"></a>
## select latitude
returns "DKji".

```js
result = a64.geoSet([43.4108, -71.5653]);
should.exist(result);
result = a64.valueOf();
result.should.equal('DKji');
```

returns approximately 43.4108, -71.5653.

```js
result = a64.geoSet();
should.exist(result);
result[0].should.equal(43.41796875);
result[1].should.equal(-71.54296875);
```

<a name="hex"></a>
# hex()
<a name="hex-no-arguments"></a>
## no arguments
returns 0.

```js
var result = a64.int();
should.exist(result);
result.should.equal(0);
```

<a name="hex-small-hexidecimal"></a>
## small hexidecimal
returns "3yzU".

```js
result = a64.hex('0e28f8');
should.exist(result);
result = a64.hex('0e28f8').valueOf();
result.should.equal('3yzU');
```

returns "e28f8".

```js
result = a64.hex();
should.exist(result);
result.should.equal('0e28f8');
```

<a name="hex-large-hexidecimal"></a>
## large hexidecimal
returns "2iWjuR0G-gGdyvMZ5WILSEdf".

```js
result = a64.hex('092e937b502af90a8d89fc3d17ab2fda834f');
should.exist(result);
result.should.equal('2iWjuR0G-gGdyvMZ5WILSEdf');
```

returns "092e937b502af90a8d89fc3d17ab2fda834f".

```js
result = a64.hex();
should.exist(result);
result.should.equal('092e937b502af90a8d89fc3d17ab2fda834f');
```

<a name="int"></a>
# int()
<a name="int-no-arguments"></a>
## no arguments
returns 0.

```js
var result = a64.int();
should.exist(result);
result.should.equal(0);
```

<a name="int-small-integer"></a>
## small integer
returns "mGW".

```js
result = a64.int(92858);
should.exist(result);
result.should.equal('mGW');
```

returns "92858".

```js
result = a64.int();
should.exist(result);
result.should.equal(92858);
```

<a name="int-large-integer"></a>
## large integer
returns "5abxVtZRda".

```js
result = a64.int('92937450274902858');
should.exist(result);
result.should.equal('5abxVtZRda');
```

returns "92937450274902858".

```js
result = a64.int();
should.exist(result);
result.should.equal('92937450274902858');
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

<a name="microtime"></a>
# microtime()
<a name="microtime-microtimenowstruct"></a>
## microtime.nowStruct()
preserved date returns "1377949347".

```js
should.exist(micro);
result = a64.microtime(micro);
should.exist(result);
result = a64.microtime();
should.exist(result);
result.should.be.an.instanceOf(Array);
result.length.should.equal(2);
result[0].should.equal(micro[0]);
```

preserved microseconds returns "913458".

```js
result[1].should.equal(micro[1]);
```

<a name="microtime-microtimenowdouble"></a>
## microtime.nowDouble()
preserved date returns "1377949347".

```js
should.exist(micro);
result = a64.microtime(micro);
should.exist(result);
result = a64.microtime();
should.exist(result);
result.should.be.an.instanceOf(Array);
result.length.should.equal(2);
result[0].should.equal(date);
```

preserved microseconds returns "913639".

```js
result[1].should.equal(microseconds);
```

<a name="microtime-microtimenow"></a>
## microtime.now()
preserved date returns "1377949347".

```js
should.exist(micro);
result = a64.microtime(micro);
should.exist(result);
result = a64.microtime();
should.exist(result);
result.should.be.an.instanceOf(Array);
result.length.should.equal(2);
result[0].should.equal(date);
```

preserved microseconds returns "913839".

```js
result[1].should.equal(microseconds);
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

