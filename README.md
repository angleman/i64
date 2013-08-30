# i64 [![NPM version](https://badge.fury.io/js/i64.png)](http://badge.fury.io/js/i64) [![Build Status](https://travis-ci.org/angleman/i64.png)](https://travis-ci.org/angleman/geos-major) [![Dependency Status](https://gemnasium.com/angleman/i64.png)](https://gemnasium.com/angleman/i64) 

URL safe base64 integer conversion tools

## Install

```
npm install i64
```

## Usage

```
var i64 = require('i64');

i64.valueOf([int64_string])       // value as Numeric Base64 String, set option
i64.isI64(int64_string)           // true if a valid int64_string is passed
i64.asInt([integer])              // get/set value as Integer
i64.asHex([hex_string])           // get/set value as Hex
i64.asDate([date])                // get/set value as Date
i64.config([config])              // get/set configuration
i64.new(config)                   // new instance factory
```

## Numeric Base64 String Digits

As an extension of Base36 digits, Numeric Base64 String digits are:

```
Base64  Base10
------  -------
0..9    0 to 9
a..z    10 to 25
A..Z    26 to 61
-       62       (dash)
_       63       (underscore)
```

## Examples

```
echo i64.asInt(64)                      // _      integer to base64
i64.valueOf('a'); echo i64.asInt()      // 10     base64 to integer 
i64.asHex('ff');  echo i64.asInt()      // 255    hex to integer 
i64.asDate(new Date()); echo i64.as64() // 38dc3g date to int64_string 
```

## Default Config

```
{ 
   // future use: part of asDate, asMicrotime and asGeo
}
```

## Big and Fast integer handling

Large integer string conversions are handled complements of [alan/clarke/int-encoder](http://github.com/alanclarke/int-encoder).

Normal integers are handled by a faster radix converter.

## upcoming 0.3.x changes

- add asDate()
- add asMicrotime()
- add asGeo()
- asTYPE() functions will return the value as TYPE as is currently done
- asTYPE(value) will change to return 'this', which will enabling chaining like:
```
i64.valueOf('a').asInt()
```

## License: MIT
