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
i64.asMicrotime([microtime])      // get/set value as Microtime
i64.asGeo([degrees, [precision]]) // get/set value as Longitude or Latitude degrees, base64 digits of precision
i64.config([config])              // get/set configuration
i64.new(config)                   // new instance factor for i64
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
i64.asInt(64)                 // _      integer to base64
i64.as64('a').asInt()         // 10     base64 to integer 
i64.asHex('ff').asInt()       // 255    hex to integer 
i64.asDate(new Date()).as64() // 38dc3g date to base64 
i64.asGeo(-28.22).as64()      // g2     geo degrees to base64
```

## Default Config

```
{ 
    "base_year":        2010      // to help be human readable. ex: year 0=2010, 1=2011, etc
  , "date_format":      'ymdhis'  // one character for each date granularity
  , "geo_precision":    2         // approximately 10km (a little more than one decimal point of precision)
}
```

## License: MIT
