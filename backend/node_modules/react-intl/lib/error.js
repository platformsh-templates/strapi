export var ReactIntlErrorCode;
(function (ReactIntlErrorCode) {
    ReactIntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
    ReactIntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
    ReactIntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
    ReactIntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
    ReactIntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
})(ReactIntlErrorCode || (ReactIntlErrorCode = {}));
export class ReactIntlError extends Error {
    constructor(code, message, descriptor, exception) {
        super(`[React Intl Error ${code}] ${message} ${exception ? `\n${exception.stack}` : ''}`);
        this.code = code;
        this.descriptor = descriptor;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ReactIntlError);
        }
    }
}
