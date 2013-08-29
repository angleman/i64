var util        = require('util')
  , int_encoder = require('int-encoder')
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
var default_alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';



/** INTERNAL SUPPORT FUNCTIONS **/

// based on: http://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript
i64.prototype._intTo64Fast = function(number) {
    if (isNaN(Number(number)) || number === null || number === Number.POSITIVE_INFINITY) {
        throw new I64IntegerError("Invalid _intTo64fast() Number");
    }
    if (number < 0) {
        throw new I64IntegerError("Invalid _intTo64fast() Negative Number");
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
		throw new I64StringError("Invalid _toIntFast() Int64String");
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
	  , date_format:      config_or_value.date_format      || 'ymdhis'
	  , geo_precision:    config_or_value.geo_precision    || 2
	  , alphabet:         config_or_value.alphabet         || default_alphabet
	};

	int_encoder.alphabet(this._config.alphabet);
}



i64.prototype.isI64 = function(i64string) {
	var result = (typeof i64string == 'string') && (i64string == i64string.match(/^([A-Za-z0-9+/])*/g));
	return result;
}



i64.prototype.valueOf = function(i64string) {
	if (i64string) {
		if (!this.isI64(i64string)) {
			throw new I64StringError("Invalid valueOf() Int64String");
		}
		this._value = i64string;
	}
	return this._value;
}



i64.prototype.asInt = function(intvalue) {
	if (typeof intvalue == 'undefined') { // no parameter, return the integer value
		if (this._value.length > 4) { // large number
			return int_encoder.decode(this._value, 10);
		} else {
			return this._toIntFast(this._value);
		}
	} else { // assign the integer value and return the Int64String
		if (typeof intvalue == 'string') {
			this._value = int_encoder.encode(intvalue, 10);
		} else {
			this._value = this._intTo64Fast(intvalue);
		}
		return this._value; // return the Int64String
	}
}



/** EXPORT GLOBAL INSTANCE**/
var i64GlobalInstance = new i64();
module.exports = i64GlobalInstance; // use i64.new() factory for individual instances
