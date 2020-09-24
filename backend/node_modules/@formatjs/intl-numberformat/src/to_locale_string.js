"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLocaleString = void 0;
// eslint-disable-next-line import/no-cycle
var core_1 = require("./core");
/**
 * Number.prototype.toLocaleString ponyfill
 * https://tc39.es/ecma402/#sup-number.prototype.tolocalestring
 */
function toLocaleString(x, locales, options) {
    var numberFormat = new core_1.NumberFormat(locales, options);
    return numberFormat.format(x);
}
exports.toLocaleString = toLocaleString;
