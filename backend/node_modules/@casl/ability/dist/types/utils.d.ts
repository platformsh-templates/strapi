import { AnyObject, Subject, ForcedSubject, AliasesMap } from './types';
export declare function wrapArray<T>(value: T[] | T): T[];
export declare function setByPath(object: AnyObject, path: string, value: unknown): void;
export declare function setSubjectType<T extends string, U extends Record<PropertyKey, any>>(type: T, object: U): U & ForcedSubject<T>;
export declare function detectSubjectType<T extends Subject>(subject?: T): string;
export declare function expandActions(aliasMap: AliasesMap, rawActions: string | string[]): string[];
export declare const identity: <T>(x: T) => T;
export declare function createAliasResolver(aliasMap: AliasesMap): (action: string | string[]) => string[];
