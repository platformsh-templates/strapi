import { RuleOptions, Abilities, ToAbilityTypes, Normalize } from './types';
import { RawRule } from './RawRule';
declare type Tuple<A extends Abilities> = Normalize<ToAbilityTypes<A>>;
export declare class Rule<A extends Abilities, C> {
    private readonly _matchConditions;
    private readonly _matchField;
    readonly action: Tuple<A>[0] | Tuple<A>[0][];
    readonly subject: Tuple<A>[1] | Tuple<A>[1][];
    readonly inverted: boolean;
    readonly conditions: C | undefined;
    readonly fields: string[] | undefined;
    readonly reason: string | undefined;
    constructor(rule: RawRule<ToAbilityTypes<A>, C>, options: RuleOptions<A, C>);
    matchesConditions(object: Normalize<A>[1] | undefined): boolean;
    matchesField(field: string | undefined): boolean;
}
export {};
