# i64 [![NPM version](https://badge.fury.io/js/i64.png?branch=master)](https://npmjs.org/package/i64) [![Build Status](https://travis-ci.org/angleman/i64.png?branch=master)](https://travis-ci.org/angleman/i64) [![Dependency Status](https://gemnasium.com/angleman/i64.png?branch=master)](https://gemnasium.com/angleman/i64) [![License](http://badgr.co/use/MIT.png?bg=%234ed50e)](http://opensource.org/licenses/MIT)

URL safe Base64 Integer Strings (BIS) and conversion tools. Supports both fast conversions for regular integers and large integer strings (via [alan/clarke/int-encoder](http://github.com/alanclarke/int-encoder)). Assists with compression as fewer base 64 digits are needed to represent larger integers than base 10 digits. Unlike RFC-3548 Base 64 encodings, readability of BIS is improved for small integers by using an alphabet that extends base-converter in PHP and following node [base-converter](https://github.com/naholyr/node-base-converter).


## Install

```
npm install i64
```

## Usage

```
var i64 = require('i64');       // initial instance

i64.config([config])            // get/set configuration

i64.date([date])                // get/set value as Date
i64.degree([degrees])           // get/set value as Geo Degrees (+/- 180.0)
i64.geo([geo])                  // get/set value as Geo Point as {longitude: value, latitude: value}
i64.geoSet([geoset])            // get/set value as Geo Point as [longitude, latitude]
i64.hex([hex_string])           // get/set value as Hexidecimal
i64.int([integer])              // get/set value as Integer
i64.microtime([microtime])      // get/set value as Microtime (wadey/node-microtime)

i64.isBis(BIS)                  // true if a valid Base64 Integer String (BIS)

i64.valueOf([int64_string])     // value as BIS, set option

i64.new(config)                 // new instance factory
```

## Examples

```
i64.nt(64).valueOf()                 // _         integer to BIS

i64.valueOf('a').asInt()             // 10        BIS to integer 

i64.hex('ff').asInt()                // 255       hexidecimal to integer

date = new Date(2013,08,29,20,12,15,0)
i64.date(date).valueOf()              // 38tkcf00  date to BIS 

i64.degree(-71.5653).valueOf()        // ji        ~10km accuracy with default 2 digit precision

point = {latitude: 43.4108, longitude:-71.5653}
i64.geo(point).valueOf()              // DKji     

point = [43.4108, -71.5653]
i64.geoSet(point).valueOf()           // DKji     
```

## Default Config

```
{ 
   base_year:      2010,
   alphabet:       '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_',
   geo_precision": 2  // Values 1: ~400 miles, 2: ~6 miles, 3: ~500 feet, 4: ~10 feet, 5: ~10 inches
}
```

## License: MIT
