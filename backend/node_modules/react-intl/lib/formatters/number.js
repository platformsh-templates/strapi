import { getNamedFormat, filterProps } from '../utils';
import { ReactIntlError } from '../error';
const NUMBER_FORMAT_OPTIONS = [
    'localeMatcher',
    'style',
    'currency',
    'currencyDisplay',
    'unit',
    'unitDisplay',
    'useGrouping',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    // Unified NumberFormat (Stage 3 as of 10/22/19)
    'compactDisplay',
    'currencyDisplay',
    'currencySign',
    'notation',
    'signDisplay',
    'unit',
    'unitDisplay',
];
export function getFormatter({ locale, formats, onError, }, getNumberFormat, options = {}) {
    const { format } = options;
    const defaults = ((format &&
        getNamedFormat(formats, 'number', format, onError)) ||
        {});
    const filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults);
    return getNumberFormat(locale, filteredOptions);
}
export function formatNumber(config, getNumberFormat, value, options = {}) {
    try {
        return getFormatter(config, getNumberFormat, options).format(value);
    }
    catch (e) {
        config.onError(new ReactIntlError("FORMAT_ERROR" /* FORMAT_ERROR */, 'Error formatting number.', e));
    }
    return String(value);
}
export function formatNumberToParts(config, getNumberFormat, value, options = {}) {
    try {
        return getFormatter(config, getNumberFormat, options).formatToParts(value);
    }
    catch (e) {
        config.onError(new ReactIntlError("FORMAT_ERROR" /* FORMAT_ERROR */, 'Error formatting number.', e));
    }
    return [];
}
