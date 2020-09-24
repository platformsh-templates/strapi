import { filterProps } from '../utils';
import { ReactIntlError } from '../error';
import { FormatError } from 'intl-messageformat';
const PLURAL_FORMAT_OPTIONS = [
    'localeMatcher',
    'type',
];
export function formatPlural({ locale, onError }, getPluralRules, value, options = {}) {
    if (!Intl.PluralRules) {
        onError(new FormatError(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, "MISSING_INTL_API" /* MISSING_INTL_API */));
    }
    const filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
    try {
        return getPluralRules(locale, filteredOptions).select(value);
    }
    catch (e) {
        onError(new ReactIntlError("FORMAT_ERROR" /* FORMAT_ERROR */, 'Error formatting plural.', e));
    }
    return 'other';
}
