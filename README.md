# i64 [![NPM version](https://badge.fury.io/js/i64.png)](http://badge.fury.io/js/i64) [![Build Status](https://travis-ci.org/angleman/i64.png)](https://travis-ci.org/angleman/geos-major) [![Dependency Status](https://gemnasium.com/angleman/i64.png)](https://gemnasium.com/angleman/i64) 

URL safe base64 integers and conversion tools

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
i64.asGeo([degrees])              // get/set value as Degrees (+/- 180.0)
i64.asGeoSet([geoset])            // get/set value as [longitude, latitude]
i64.asGeoJson([geojson])          // get/set value as {longitude: value, latitude: value}
i64.config([config])              // get/set configuration
i64.new(config)                   // new instance factory
```

## Examples

```
i64.asInt(64).valueOf()                 // _        integer to base64
i64.valueOf('a').asInt()                // 10       base64 to integer 
i64.asHex('ff').asInt()                 // 255      hex to integer
date = new Date(2013,08,29,20,12,15,0)
i64.asDate(date).valueOf()              // 38tkcf00 date to int64_string 
i64.asGeo(-71.5653).valueOf()           // ji       ~10km accuracy with default 2 digit precision
```

## Big and Fast number handling

Large integer string conversions are handled complements of [alan/clarke/int-encoder](http://github.com/alanclarke/int-encoder).

Normal integers are handled by a faster radix converter.

## Base64 Integer String digits

As an extension of Base36 digits, Numeric Base64 String digits are: 0..9a..zA..Z-_

## Default Config

```
{ 
   base_year:      2010,
   alphabet:       '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_',
   geo_precision": 2 // ~10km (a little more than one decimal point of precision). Values: 1 to 4
}
```

## License: MIT
