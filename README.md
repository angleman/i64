i64
===

URL safe base64 integer conversion tools

__Install:__

```
npm install i64
```

__Usage:__

```
var i64 = require('i64');

i64.valueOf([base64])             // value as Numeric Base64 String, set option
i64.asInt([integer])              // get/set value as Integer
i64.asHex([hex_string])           // get/set value as Hex
i64.asDate([date])                // get/set value as Date
i64.asMicrotime([microtime])      // get/set value as Microtime
i64.asGeo([degrees, [precision]]) // get/set value as Longitude or Latitude degrees, base64 digits of precision
i64.config([config])              // get/set configuration
```
__Numeric Base64 String Digits:__

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

__Examples:__

```
i64.asInt(64)                 // _      integer to base64
i64.as64('a').asInt()         // 10     base64 to integer 
i64.asHex('ff').asInt()       // 255    hex to integer 
i64.asDate(new Date()).as64() // 38dc3g date to base64 
i64.asGeo(-28.22).as64()      // g2     geo degrees to base64
i64.config()                  // { "base_year": 2010, "date_format": "ymdhis", "geo_precision": 2, "on_error": "undefined" }  defaults
```

__On Error Options:__

```
"undefined" = return undefined
"exception" = throw exception
callback()  = call callback(method, value). method that was called, value that was off
```

__License:__

__MIT__
