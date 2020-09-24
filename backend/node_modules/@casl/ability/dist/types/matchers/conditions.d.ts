import { ConditionsMatcher as Matcher } from '../types';
declare type RegExpOptions<T> = {
    $regex: T;
    $options?: string;
};
declare type Primitive = Record<PropertyKey, any> | string | number | null | boolean | undefined;
export declare type MongoQueryOperators = {
    $eq?: any;
    $ne?: any;
    $lt?: string | number | Date;
    $lte?: string | number | Date;
    $gt?: string | number | Date;
    $gte?: string | number | Date;
    $in?: any[];
    $nin?: any[];
    $all?: any[];
    /** checks by array length */
    $size?: number;
    $regex?: RegExp | RegExpOptions<string> | RegExpOptions<RegExp>;
    /** checks the shape of array item */
    $elemMatch?: {
        [k in Exclude<keyof MongoQueryOperators, '$elemMatch'>]?: MongoQueryOperators[k];
    };
    /** checks that property exists */
    $exists?: boolean;
};
export declare type MongoQuery<AdditionalOperators = never> = Record<PropertyKey, MongoQueryOperators | Primitive | AdditionalOperators>;
export declare function buildMongoQueryMatcher<T extends object>(operations: Record<keyof T, any>): Matcher<MongoQuery | T>;
export declare const mongoQueryMatcher: Matcher<object | Record<string | number | symbol, string | number | boolean | Record<string | number | symbol, any> | MongoQueryOperators | null | undefined>>;
export {};
