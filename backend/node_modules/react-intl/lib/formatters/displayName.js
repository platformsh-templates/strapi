import { filterProps } from '../utils';
import { FormatError } from 'intl-messageformat';
import { ReactIntlError } from '../error';
const DISPLAY_NAMES_OPTONS = [
    'localeMatcher',
    'style',
    'type',
    'fallback',
];
export function formatDisplayName({ locale, onError }, getDisplayNames, value, options = {}) {
    const DisplayNames = Intl.DisplayNames;
    if (!DisplayNames) {
        onError(new FormatError(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, "MISSING_INTL_API" /* MISSING_INTL_API */));
    }
    const filteredOptions = filterProps(options, DISPLAY_NAMES_OPTONS);
    try {
        return getDisplayNames(locale, filteredOptions).of(value);
    }
    catch (e) {
        onError(new ReactIntlError("FORMAT_ERROR" /* FORMAT_ERROR */, 'Error formatting display name.', e));
    }
}
