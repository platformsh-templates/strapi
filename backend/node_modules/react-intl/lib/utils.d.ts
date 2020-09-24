import { IntlConfig, IntlCache, CustomFormats, Formatters } from './types';
import { IntlRelativeTimeFormatOptions } from '@formatjs/intl-relativetimeformat';
import { ReactIntlError } from './error';
export declare function filterProps<T extends Record<string, any>, K extends string>(props: T, whitelist: Array<K>, defaults?: Partial<T>): Pick<T, K>;
export declare function invariantIntlContext(intl?: any): asserts intl;
export declare function defaultErrorHandler(error: ReactIntlError): void;
export declare const DEFAULT_INTL_CONFIG: Pick<IntlConfig, 'formats' | 'messages' | 'timeZone' | 'textComponent' | 'defaultLocale' | 'defaultFormats' | 'onError'>;
export declare function createIntlCache(): IntlCache;
/**
 * Create intl formatters and populate cache
 * @param cache explicit cache to prevent leaking memory
 */
export declare function createFormatters(cache?: IntlCache): Formatters;
export declare function getNamedFormat<T extends keyof CustomFormats>(formats: CustomFormats, type: T, name: string, onError: (err: ReactIntlError) => void): Intl.NumberFormatOptions | Intl.DateTimeFormatOptions | IntlRelativeTimeFormatOptions | undefined;
