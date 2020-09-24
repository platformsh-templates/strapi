import { getNamedFormat, filterProps } from '../utils';
import { FormatError } from 'intl-messageformat';
import { ReactIntlError } from '../error';
const RELATIVE_TIME_FORMAT_OPTIONS = ['numeric', 'style'];
function getFormatter({ locale, formats, onError, }, getRelativeTimeFormat, options = {}) {
    const { format } = options;
    const defaults = (!!format && getNamedFormat(formats, 'relative', format, onError)) || {};
    const filteredOptions = filterProps(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
    return getRelativeTimeFormat(locale, filteredOptions);
}
export function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options = {}) {
    if (!unit) {
        unit = 'second';
    }
    const RelativeTimeFormat = Intl.RelativeTimeFormat;
    if (!RelativeTimeFormat) {
        config.onError(new FormatError(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, "MISSING_INTL_API" /* MISSING_INTL_API */));
    }
    try {
        return getFormatter(config, getRelativeTimeFormat, options).format(value, unit);
    }
    catch (e) {
        config.onError(new ReactIntlError("FORMAT_ERROR" /* FORMAT_ERROR */, 'Error formatting relative time.', e));
    }
    return String(value);
}
