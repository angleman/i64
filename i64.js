var util        = require('util')
  , int_encoder = require('int-encoder')
  , microtime   = require('microtime')
  , Validator   = require('validator').Validator
  , validator   = new Validator()
;

/** ERROR TYPES **/
var I64Error = function (msg, constr) {
  Error.captureStackTrace(this, constr || this);
  this.message = msg || 'Error';
};
util.inherits(I64Error, Error);
I64Error.prototype.name = 'i64 Error';



var I64StringError = function (msg, constr) {
  Error.captureStackTrace(this, constr || this);
  this.message = msg || 'Error';
};
util.inherits(I64StringError, I64Error);
I64StringError.prototype.name = 'i64 Int64String Error';



var I64IntegerError = function (msg, constr) {
  Error.captureStackTrace(this, constr || this);
  this.message = msg || 'Error';
};
util.inherits(I64IntegerError, I64Error);
I64IntegerError.prototype.name = 'i64 Integer Error';



/** INIT CODE **/
function i64(config_or_value) {
	this._value  = '0';
	this.config(config_or_value);
}

                   //   0       8       16      24      32      40      48      56     63
                   //   v       v       v       v       v       v       v       v      v
var default_alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
  , geo_base         = [0, 64, 4096, 262144, 16777216, 1073741824]
;



/** INTERNAL SUPPORT FUNCTIONS **/

// based on: http://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript
i64.prototype._intTo64Fast = function(number) {
    if (isNaN(Number(number)) || number === null || number === Number.POSITIVE_INFINITY) {
        throw new I64IntegerError("Invalid _intTo64fast() Number '" + number + "'");
    }
    if (number < 0) {
        throw new I64IntegerError("Invalid _intTo64fast() Negative Number '" + number + "'");
    }

    var rixit                          // like 'digit', only in some non-decimal radix 
      , result   = ''
      , residual = Math.floor(number)
      , alphabet = this._config.alphabet
    ;
    while (true) {
        rixit    = residual % 64;
        result   = alphabet.charAt(rixit) + result;
        residual = Math.floor(residual / 64);
        if (residual == 0) {
            break;
        }
    }
    return result;
}



// based on: http://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript
i64.prototype._toIntFast = function(i64string) {
	if (!this.isI64(i64string)) {
		throw new I64StringError("Invalid _toIntFast() Int64String: '" + i64string + "'");
	}
    var result = 0
      , alphabet = this._config.alphabet
    ;
    i64string = i64string.split('');
    for (var e in i64string) {
        result = (result * 64) + alphabet.indexOf(i64string[e]);
    }
    return result;
}


i64.prototype._dateToBase64 = function(date, options, asMicrotime) {
	options       = options || this._config;
    var base_year = (options.base_year) ? options.base_year : 2010
      , dat       = new Date(date)
      , alphabet  = this._config.alphabet
      , year      = alphabet.charAt(dat.getFullYear() - base_year)
      , month     = alphabet.charAt(dat.getMonth())
      , day       = alphabet.charAt(dat.getDate())
      , hour      = alphabet.charAt(dat.getHours())
      , minute    = alphabet.charAt(dat.getMinutes())
      , second    = alphabet.charAt(dat.getSeconds())
      , millis    = date.getMilliseconds()
      , millis1   = Math.floor(millis / 64)
      , millis2   = millis - (millis1 * 64)
      , millisa   = alphabet.charAt(millis1)
      , millisb   = alphabet.charAt(millis2)
      , result    = year + month + day + hour + minute + second + millisa + millisb
    ;
    return result;
}




i64.prototype._base64ToDate = function(base64, options) {
	options       = options || this._config;
    var base_year = (options.base_year) ? options.base_year : 2010
      , alphabet  = this._config.alphabet
      , year      = (base64.length > 0) ? alphabet.indexOf(base64[0]) + base_year : base_year
      , month     = (base64.length > 1) ? alphabet.indexOf(base64[1]) : 1
      , day       = (base64.length > 2) ? alphabet.indexOf(base64[2]) : 1
      , hours     = (base64.length > 3) ? alphabet.indexOf(base64[3]) : 0
      , minutes   = (base64.length > 4) ? alphabet.indexOf(base64[4]) : 0
      , seconds   = (base64.length > 5) ? alphabet.indexOf(base64[5]) : 0
      , millis    = (base64.length > 7) ? alphabet.indexOf(base64[6]) * 64 + alphabet.indexOf(base64[7]) : 0
      , date      = new Date(year, month, day, hours, minutes, seconds, millis)
    ;
    return date;
}



i64.prototype._microtimeToBase64 = function(microvalue, options) {
	var seconds, micro;
	if (!util.isArray(microvalue)) {
		try {
			validator.check(microvalue).isInt();
			seconds = Math.floor(microvalue / 1000000);
			micro   = microvalue - (seconds * 1000000);
		} catch(err) { // assume floating point
			seconds = Math.floor(microvalue);
			micro   = Math.floor((microvalue - seconds) * 1000000);
		}
		microvalue = [seconds, micro];
	}

	options       = options || this._config;
    var base_year = (options.base_year) ? options.base_year : 2010
      , date      = microvalue[0] * 1000
      , dat       = new Date(date)
      , alphabet  = this._config.alphabet
      , year      = alphabet.charAt(dat.getFullYear() - base_year)
      , month     = alphabet.charAt(dat.getMonth())
      , day       = alphabet.charAt(dat.getDate())
      , hour      = alphabet.charAt(dat.getHours())
      , minute    = alphabet.charAt(dat.getMinutes())
      , second    = alphabet.charAt(dat.getSeconds())
      , millis    = '0000' + this._intTo64Fast(microvalue[1])
      , result    = year + month + day + hour + minute + second + millis.substr(millis.length - 4, 4)
    ;
    return result;
}



i64.prototype._base64ToMicrotime = function(base64, options) {
	options       = options || this._config;
    var base_year = (options.base_year) ? options.base_year : 2010
      , alphabet  = this._config.alphabet
      , year      = (base64.length > 0) ? alphabet.indexOf(base64[0]) + base_year : base_year
      , month     = (base64.length > 1) ? alphabet.indexOf(base64[1]) : 1
      , day       = (base64.length > 2) ? alphabet.indexOf(base64[2]) : 1
      , hours     = (base64.length > 3) ? alphabet.indexOf(base64[3]) : 0
      , minutes   = (base64.length > 4) ? alphabet.indexOf(base64[4]) : 0
      , seconds   = (base64.length > 5) ? alphabet.indexOf(base64[5]) : 0
      , millis    = (base64.length > 9) ? alphabet.indexOf(base64[6]) * 262144 
      		+ alphabet.indexOf(base64[7]) * 4096 
      		+ alphabet.indexOf(base64[8]) * 64 
      		+ alphabet.indexOf(base64[9])
      		: 0
      , date      = new Date(year, month, day, hours, minutes, seconds, 0)
      , result    = [
      		Math.floor(date.valueOf() / 1000)
      	  , millis
      ]
    ;
    return result; // returns in microtime.nowStruct() form
}



i64.prototype._base64ToDegrees = function(base64) {
    var digits  = base64.length
      , intval  = this._toIntFast(base64)
      , degrees = (intval / geo_base[digits] * 360) - 180.0
    ;
    return degrees;
}



i64.prototype._degreesToBase64 = function(degrees, options) {
	options    = options || this._config;
	var geop   = options.geo_precision
      , digits = (geop && (geop > 0) && (geop < 6)) ? geop : 2
      , intval = Math.round((degrees + 180) * geo_base[digits] / 360)
      , base64 = this._intTo64Fast(intval)
    ;
    base64 = '0000' + base64;
    base64 = base64.substr(base64.length - digits, digits);
    return base64;
}





/** Main API **/

i64.prototype.new = function(config_or_value) {
	var result = new i64(config_or_value);
	return result;
}



i64.prototype.config = function(config_or_value) {
	config_or_value      = config_or_value || {};
	if (typeof config_or_value == 'string') {
		if (this.isI64(config_or_value)) {
			this._value = config_or_value;
		}
		config_or_value = {};
	}
	this._config = {
		base_year:        config_or_value.base_year        || 2010
	  , geo_precision:    config_or_value.geo_precision    || 2
	  , alphabet:         config_or_value.alphabet         || default_alphabet
	};

	int_encoder.alphabet(this._config.alphabet);
}



i64.prototype.isI64 = function(i64string) {
	var result = (typeof i64string == 'string') && (i64string == i64string.match(/^([\-_A-Za-z0-9+/])*/g));
	return result;
}



i64.prototype.valueOf = function(i64string) {
	if (typeof i64string == 'undefined') { // no parameter, return the Int64String value
		return this._value;
	} else {
		if (!this.isI64(i64string)) {
			throw new I64StringError("Invalid valueOf() Int64String '" + i64string + "'");
		}
		this._value = i64string;
		return this;
	}
}



i64.prototype.int = function(intvalue) {
	if (typeof intvalue == 'undefined') { // no parameter, return the integer value
		if (this._value.length > 4) { // large number
			return int_encoder.decode(this._value, 10);
		} else {
			return this._toIntFast(this._value);
		}
	} else { // assign the integer value
		if (typeof intvalue == 'string') {
			this._value = int_encoder.encode(intvalue, 10);
		} else {
			this._value = this._intTo64Fast(intvalue);
		}
		return this;
	}
}



i64.prototype.hex = function(hexvalue) {
	if (typeof hexvalue == 'undefined') { // no parameter, return the hexidecimal value
		return int_encoder.decode(this._value, 16);
	} else { // assign the hexidecimal value
		this._value = int_encoder.encode(hexvalue, 16);
		return this; 
	}
}



i64.prototype.date = function(datevalue, options) {
	options = options || this._config;
	if (typeof datevalue == 'undefined') { // no parameter, return the date value
		return this._base64ToDate(this._value, options);
	} else { // assign the date value
		this._value = this._dateToBase64(datevalue, options);
		return this;
	}
}



i64.prototype.microtime = function(datevalue, options) {
	options = options || this._config;
	if (typeof datevalue == 'undefined') { // no parameter, return the date value
		return this._base64ToMicrotime(this._value, options);
	} else { // assign the microtime value
		this._value = this._microtimeToBase64(datevalue, options);
		return this;
	}
}



i64.prototype.degree = function(degrees, options) {
	options = options || this._config;
	if (typeof degrees == 'undefined') { // no parameter, return the geo value
		return this._base64ToDegrees(this._value, options);
	} else { // assign the degrees value
    degrees = (degrees.latitude) ? degrees.latitude : degrees; // grab one pair if object passed
		this._value = this._degreesToBase64(degrees, options);
		return this;
	}
}



i64.prototype.geoSet = function(geoset, options, asJson) {
	options = options || this._config;
	if (typeof geoset == 'undefined') { // no parameter, return the geo set
		var digits = this._value.length / 2;
		options.geo_precision = this._value.length / 2;
		var latitude  = this._base64ToDegrees(this._value.substr(0,digits), options)
		  , longitude = this._base64ToDegrees(this._value.substr(digits,digits), options)
		  , result    = (asJson) ? {
		  		latitude: latitude
		  	  , longitude: longitude
		  	} : [latitude, longitude]
		 ;
		return result;
	} else { // assign the point values
		var geo1      = geoset.latitude  || geoset[0]
		  , geo2      = geoset.longitude || geoset[1]
		  , latitude  = this._degreesToBase64(geo1, options)
		  , longitude = this._degreesToBase64(geo2, options)
		;
		this._value = latitude + longitude;
		return this;
	}
}



i64.prototype.geo = function(geoset, options, asJson) {
	return this.geoSet(geoset, options, true);
}



/** EXPORT GLOBAL INSTANCE**/
var i64GlobalInstance = new i64();
module.exports = i64GlobalInstance; // use i64.new() factory for individual instances
