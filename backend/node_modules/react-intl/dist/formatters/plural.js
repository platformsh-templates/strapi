"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var error_1 = require("../error");
var intl_messageformat_1 = require("intl-messageformat");
var PLURAL_FORMAT_OPTIONS = [
    'localeMatcher',
    'type',
];
function formatPlural(_a, getPluralRules, value, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    if (!Intl.PluralRules) {
        onError(new intl_messageformat_1.FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", "MISSING_INTL_API" /* MISSING_INTL_API */));
    }
    var filteredOptions = utils_1.filterProps(options, PLURAL_FORMAT_OPTIONS);
    try {
        return getPluralRules(locale, filteredOptions).select(value);
    }
    catch (e) {
        onError(new error_1.ReactIntlError("FORMAT_ERROR" /* FORMAT_ERROR */, 'Error formatting plural.', e));
    }
    return 'other';
}
exports.formatPlural = formatPlural;
