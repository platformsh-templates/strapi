import { Ability, AnyMongoAbility } from './Ability';
import { AnyAbility, AbilityOptionsOf, AbilityClass, PureAbility } from './PureAbility';
import { RawRuleOf, Generics } from './RuleIndex';
import { ExtractSubjectType as E, AbilityTuple, AbilityTypes, ToAbilityTypes, AbilityParameters } from './types';
import { RawRule } from './RawRule';
declare class RuleBuilder<T extends RawRule<any, any>> {
    rule: T;
    constructor(rule: T);
    because(reason: string): this;
}
declare type CanFunction<T extends AbilityTypes, C, WithFields = true> = T extends AbilityTuple ? WithFields extends true ? (action: T[0] | T[0][], subject: E<T[1]> | E<T[1]>[], fields?: string | string[], conditions?: C) => 0 : (action: T[0] | T[0][], subject: E<T[1]> | E<T[1]>[], conditions?: C) => 0 : never;
export declare type BuilderCanParameters<T extends AnyAbility, WithFields extends boolean = false> = AbilityParameters<Generics<T>['abilities'], CanFunction<ToAbilityTypes<Generics<T>['abilities']>, Generics<T>['conditions'], WithFields>, (action: Generics<T>['abilities'] | Generics<T>['abilities'][]) => 0>;
export declare class AbilityBuilder<T extends AnyAbility = PureAbility> {
    rules: RawRuleOf<T>[];
    private _AbilityType;
    constructor(AbilityType?: AbilityClass<T>);
    can(...args: BuilderCanParameters<T>): RuleBuilder<RawRuleOf<T>>;
    can(...args: BuilderCanParameters<T, true>): RuleBuilder<RawRuleOf<T>>;
    cannot(...args: BuilderCanParameters<T>): RuleBuilder<RawRuleOf<T>>;
    cannot(...args: BuilderCanParameters<T, true>): RuleBuilder<RawRuleOf<T>>;
    build(options?: AbilityOptionsOf<T>): T;
}
declare type AsyncDSL<T extends AnyMongoAbility> = (can: AbilityBuilder<T>['can'], cannot: AbilityBuilder<T>['cannot']) => Promise<void>;
declare type DSL<T extends AnyMongoAbility> = (...args: Parameters<AsyncDSL<T>>) => void;
export declare function defineAbility<T extends AnyMongoAbility = Ability>(dsl: AsyncDSL<T>): Promise<T>;
export declare function defineAbility<T extends AnyMongoAbility = Ability>(params: AbilityOptionsOf<T>, dsl: AsyncDSL<T>): Promise<T>;
export declare function defineAbility<T extends AnyMongoAbility = Ability>(dsl: DSL<T>): T;
export declare function defineAbility<T extends AnyMongoAbility = Ability>(params: AbilityOptionsOf<T>, dsl: DSL<T>): T;
export {};
