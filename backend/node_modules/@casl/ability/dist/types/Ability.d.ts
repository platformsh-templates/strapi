import { PureAbility, AbilityOptions } from './PureAbility';
import { AbilityTuple } from './types';
import { MongoQuery } from './matchers/conditions';
import { RawRuleFrom } from './RawRule';
export declare class Ability<A extends AbilityTuple = AbilityTuple, C extends MongoQuery<any> = MongoQuery> extends PureAbility<A, C> {
    constructor(rules?: RawRuleFrom<A, C>[], options?: AbilityOptions<A, C>);
}
export declare type AnyMongoAbility = Ability<any, MongoQuery>;
