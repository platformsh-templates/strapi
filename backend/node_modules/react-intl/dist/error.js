"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ReactIntlErrorCode;
(function (ReactIntlErrorCode) {
    ReactIntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
    ReactIntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
    ReactIntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
    ReactIntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
    ReactIntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
})(ReactIntlErrorCode = exports.ReactIntlErrorCode || (exports.ReactIntlErrorCode = {}));
var ReactIntlError = /** @class */ (function (_super) {
    __extends(ReactIntlError, _super);
    function ReactIntlError(code, message, descriptor, exception) {
        var _this = _super.call(this, "[React Intl Error " + code + "] " + message + " " + (exception ? "\n" + exception.stack : '')) || this;
        _this.code = code;
        _this.descriptor = descriptor;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, ReactIntlError);
        }
        return _this;
    }
    return ReactIntlError;
}(Error));
exports.ReactIntlError = ReactIntlError;
