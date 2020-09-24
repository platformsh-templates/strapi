import { RuleIndex, RuleIndexOptions, RuleIndexOptionsOf, RawRuleOf } from './RuleIndex';
import { Abilities, CanParameters } from './types';
export declare type AbilityOptions<A extends Abilities, Conditions> = RuleIndexOptions<A, Conditions>;
export declare type AnyAbility = PureAbility<any, any>;
export declare type AbilityOptionsOf<T extends AnyAbility> = RuleIndexOptionsOf<T>;
export declare type AbilityClass<T extends AnyAbility> = new (rules?: RawRuleOf<T>[], options?: AbilityOptionsOf<T>) => T;
interface AbilityEvent<A extends Abilities = Abilities, Conditions = unknown> {
    /** @deprecated use "target" property instead */
    ability: this['target'];
    target: PureAbility<A, Conditions>;
}
export declare class PureAbility<A extends Abilities = Abilities, Conditions = unknown> extends RuleIndex<A, Conditions, AbilityEvent<A, Conditions>> {
    can(...args: CanParameters<A>): boolean;
    relevantRuleFor(...args: CanParameters<A>): import("./Rule").Rule<A, Conditions> | null;
    cannot(...args: CanParameters<A>): boolean;
}
export {};
