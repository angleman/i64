function i64(config_or_value) {
	this._value  = '0';
	this.config(config_or_value);
}



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
	  , alphabet:         config_or_value.alphabet         || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
	};
} 



i64.prototype.isI64 = function(i64string) {
	var result = (typeof i64string == 'string') && (i64string == i64string.match(/^([A-Za-z0-9+/])*/g));
	return result;
}



i64.prototype.valueOf = function(i64string) {
	if (i64string) {
		if (!this.isI64(i64string)) {
			throw new UserException("InvalidI64String");
		}
		this._value = i64string;
	}
	return this._value;
}

i64.prototype.new = function(config_or_value) {
	var result = new i64(config_or_value);
}

var a64 = new i64();

module.exports = a64;

