# i64 [![NPM version](https://badge.fury.io/js/i64.png)](http://badge.fury.io/js/i64) [![Build Status](https://travis-ci.org/angleman/i64.png)](https://travis-ci.org/angleman/i64) [![Dependency Status](https://gemnasium.com/angleman/i64.png)](https://gemnasium.com/angleman/i64) 

URL safe Base64 Integer Strings (BAS) and conversion tools. Supports both fast conversions for regular integers and large integer strings (via [alan/clarke/int-encoder](http://github.com/alanclarke/int-encoder)). Assists with compression as fewer base 64 digits are needed to represent larger integers than base 10 digits. Unlike RFC-3548 Base 64 encodings, readability of BAS is improved for small integers by using an alphabet that extends base-converter in PHP and following node [base-converter](https://github.com/naholyr/node-base-converter).


## Install

```
npm install i64
```

## Usage

```
var i64 = require('i64');

i64.valueOf([int64_string])       // value as Base64 Integer String, set option
i64.isI64(int64_string)           // true if a valid int64_string is passed
i64.asInt([integer])              // get/set value as Integer
i64.asHex([hex_string])           // get/set value as Hexidecimal
i64.asDate([date])                // get/set value as Date
i64.asMicrotime([microtime])      // get/set value as [Microtime](https://github.com/wadey/node-microtime)
i64.asGeo([degrees])              // get/set value as Degrees (+/- 180.0)
i64.asGeoSet([geoset])            // get/set value as [longitude, latitude]
i64.asGeoJson([geojson])          // get/set value as {longitude: value, latitude: value}
i64.config([config])              // get/set configuration
i64.new(config)                   // new instance factory
```

## Examples

```
i64.asInt(64).valueOf()                 // _         integer to Base64 Integers String (BAS)

i64.valueOf('a').asInt()                // 10        BAS to integer 

i64.asHex('ff').asInt()                 // 255       hexidecimal to integer

date = new Date(2013,08,29,20,12,15,0)
i64.asDate(date).valueOf()              // 38tkcf00  date to BAS 

i64.asGeo(-71.5653).valueOf()           // ji        ~10km accuracy with default 2 digit precision

point = [43.4108, -71.5653]
i64.asGeoSet(point).valueOf()           // DKji     

point = latitude: 43.4108, longitude:-71.5653}
i64.asGeoJson(point).valueOf()          // DKji     
```


Normal integers are handled by a faster radix converter.

## Base64 Integer String digits

As an extension of Base36 digits, BAS digits are: 0..9a..zA..Z-_

## Default Config

```
{ 
   base_year:      2010,
   alphabet:       '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_',
   geo_precision": 2  // Values 1: ~400 miles, 2: ~6 miles, 3: ~500 feet, 4: ~10 feet
}
```

## License: MIT
