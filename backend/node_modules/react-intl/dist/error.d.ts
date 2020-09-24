import { MessageDescriptor } from './types';
export declare const enum ReactIntlErrorCode {
    FORMAT_ERROR = "FORMAT_ERROR",
    UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER",
    INVALID_CONFIG = "INVALID_CONFIG",
    MISSING_DATA = "MISSING_DATA",
    MISSING_TRANSLATION = "MISSING_TRANSLATION"
}
export declare class ReactIntlError extends Error {
    readonly code: ReactIntlErrorCode;
    readonly descriptor?: MessageDescriptor;
    constructor(code: ReactIntlErrorCode, message: string, descriptor?: MessageDescriptor, exception?: Error);
}
