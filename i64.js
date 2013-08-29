var util = require('util');

var I64Error = function (msg, constr) {
  Error.captureStackTrace(this, constr || this);
  this.message = msg || 'Error';
};

util.inherits(I64Error, Error);
I64Error.prototype.name = 'i64 Error';



function i64(config_or_value) {
	this._value  = '0';
	this.config(config_or_value);
}

                   //   0       8       16      24      32      40      48      56     63
                   //   v       v       v       v       v       v       v       v      v
var default_alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';

i64.prototype.config = function(config_or_value) {
	config_or_value      = config_or_value || {};
	if (typeof config_or_value == 'string') {
		this._value = config_or_value;
		config_or_value = {}
	}
	this._config = {
		base_year:        config_or_value.base_year        || 2010
	  , date_format:      config_or_value.date_format      || 'ymdhis'
	  , geo_precision:    config_or_value.geo_precision    || 2
	  , alphabet:         config_or_value.alphabet         || default_alphabet
	};
} 



i64.prototype.isI64 = function(i64string) {
	var result = (typeof i64string == 'string') && (i64string == i64string.match(/^([A-Za-z0-9+/])*/g));
	return result;
}



i64.prototype.valueOf = function(i64string) {
	if (i64string) {
		if (!this.isI64(i64string)) {
			throw new I64Error("i64_invalid_valueOf_i64_string");
		}
		this._value = i64string;
	}
	return this._value;
}

i64.prototype.new = function(config_or_value) {
	var result = new i64(config_or_value);
}

var a64 = new i64();



// based on: http://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript
i64.prototype._intTo64fast = function(number) {
    if (isNaN(Number(number)) || number === null || number === Number.POSITIVE_INFINITY) {
        throw new Error("i64_invalid__intTo64fast_number");
    }
    if (number < 0) {
        throw new I64Error("i64_invalid__intTo64fast_negative_number");
    }

    var rixit; // like 'digit', only in some non-decimal radix 
    var residual = Math.floor(number);
    var result = '';
    while (true) {
        rixit = residual % 64
        result = this._config.alphabet.charAt(rixit) + result;
        residual = Math.floor(residual / 64);
        if (residual == 0) {
            break;
        }
    }
    return result;
}

// based on: http://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript
intWith64 = {
    _Rixits :
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_", // more human readable than RFC1113
    to64 : function(number) {
    },

    toInt : function(rixits) {
        var result = 0;
        rixits = rixits.split('');
        for (e in rixits) {
            result = (result * 64) + this._Rixits.indexOf(rixits[e]);
        }
        return result;
    }
}


module.exports = a64;

