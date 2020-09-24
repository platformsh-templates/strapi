/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
import * as React from 'react';
import { invariant } from '@formatjs/intl-utils';
import IntlMessageFormat from 'intl-messageformat';
import { ReactIntlError } from '../error';
function setTimeZoneInOptions(opts, timeZone) {
    return Object.keys(opts).reduce((all, k) => {
        all[k] = Object.assign({ timeZone }, opts[k]);
        return all;
    }, {});
}
function deepMergeOptions(opts1, opts2) {
    const keys = Object.keys(Object.assign(Object.assign({}, opts1), opts2));
    return keys.reduce((all, k) => {
        all[k] = Object.assign(Object.assign({}, (opts1[k] || {})), (opts2[k] || {}));
        return all;
    }, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
    if (!timeZone) {
        return f1;
    }
    const mfFormats = IntlMessageFormat.formats;
    return Object.assign(Object.assign(Object.assign({}, mfFormats), f1), { date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)), time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone)) });
}
function prepareIntlMessageFormatHtmlOutput(chunks) {
    return React.createElement(React.Fragment, null, ...chunks);
}
export function formatMessage({ locale, formats, messages, defaultLocale, defaultFormats, onError, timeZone, wrapRichTextChunksInFragment, }, state, messageDescriptor = { id: '' }, values = {}) {
    const { id, defaultMessage } = messageDescriptor;
    // `id` is a required field of a Message Descriptor.
    invariant(!!id, '[React Intl] An `id` must be provided to format a message.');
    const message = messages && messages[String(id)];
    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
    let formattedMessageParts = '';
    if (message) {
        try {
            const formatter = state.getMessageFormat(message, locale, formats, {
                formatters: state,
            });
            formattedMessageParts = formatter.format(values);
        }
        catch (e) {
            onError(new ReactIntlError("FORMAT_ERROR" /* FORMAT_ERROR */, `Error formatting message: "${id}" for locale: "${locale}"` +
                (defaultMessage ? ', using default message as fallback.' : ''), messageDescriptor, e));
        }
    }
    else if (!defaultMessage ||
        (locale && locale.toLowerCase() !== defaultLocale.toLowerCase())) {
        // This prevents warnings from littering the console in development
        // when no `messages` are passed into the <IntlProvider> for the
        // default locale.
        onError(new ReactIntlError("MISSING_TRANSLATION" /* MISSING_TRANSLATION */, `Missing message: "${id}" for locale: "${locale}"` +
            (defaultMessage ? ', using default message as fallback.' : ''), messageDescriptor));
    }
    if (!formattedMessageParts && defaultMessage) {
        try {
            const formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);
            formattedMessageParts = formatter.format(values);
        }
        catch (e) {
            onError(new ReactIntlError("FORMAT_ERROR" /* FORMAT_ERROR */, `Error formatting the default message for: "${id}"`, messageDescriptor, e));
        }
    }
    if (!formattedMessageParts) {
        onError(new ReactIntlError("FORMAT_ERROR" /* FORMAT_ERROR */, `Cannot format message: "${id}", ` +
            `using message ${message || defaultMessage ? 'source' : 'id'} as fallback.`, messageDescriptor));
        if (typeof message === 'string') {
            return message || defaultMessage || String(id);
        }
        return defaultMessage || String(id);
    }
    if (Array.isArray(formattedMessageParts)) {
        if (wrapRichTextChunksInFragment) {
            return prepareIntlMessageFormatHtmlOutput(formattedMessageParts);
        }
        return formattedMessageParts;
    }
    return formattedMessageParts;
}
