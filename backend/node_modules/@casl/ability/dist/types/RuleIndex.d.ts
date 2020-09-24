import { Rule } from './Rule';
import { RawRuleFrom } from './RawRule';
import { DetectSubjectType, ResolveAction, CanParameters, Abilities, Normalize, ConditionsMatcher, FieldMatcher, RuleOptions } from './types';
declare type AnyRuleIndex = RuleIndex<any, any, any>;
export interface RuleIndexOptions<A extends Abilities, Conditions> {
    /** @deprecated use "detectSubjectType" option instead */
    subjectName?: this['detectSubjectType'];
    detectSubjectType?: DetectSubjectType<Normalize<A>[1]>;
    conditionsMatcher?: ConditionsMatcher<Conditions>;
    fieldMatcher?: FieldMatcher;
    resolveAction?: ResolveAction<Normalize<A>[0]>;
}
export declare type Generics<T extends AnyRuleIndex> = T extends AnyRuleIndex ? {
    abilities: T['za'];
    conditions: T['zc'];
} : never;
export declare type RuleOf<T extends AnyRuleIndex> = Rule<Generics<T>['abilities'], Generics<T>['conditions']>;
export declare type RawRuleOf<T extends AnyRuleIndex> = RawRuleFrom<Generics<T>['abilities'], Generics<T>['conditions']>;
export declare type RuleIndexOptionsOf<T extends AnyRuleIndex> = RuleIndexOptions<Generics<T>['abilities'], Generics<T>['conditions']>;
export interface UpdateEvent<T extends AnyRuleIndex> {
    rules: RawRuleOf<T>[];
}
export declare type EventHandler<Event> = (event: Event) => void;
export declare type Events<T extends AnyRuleIndex, Event extends {} = {}> = {
    [K in keyof EventsMap<T, Event>]: EventHandler<EventsMap<T, Event>[K]>[];
};
interface EventsMap<T extends AnyRuleIndex, Event extends {} = {}> {
    update: UpdateEvent<T> & Event;
    updated: UpdateEvent<T> & Event;
}
export declare type Unsubscribe = () => void;
export declare class RuleIndex<A extends Abilities, Conditions, BaseEvent extends {} = {}> {
    private _hasPerFieldRules;
    private _mergedRules;
    private _events;
    private _indexedRules;
    private _rules;
    readonly rules: RawRuleFrom<A, Conditions>[];
    readonly _ruleOptions: RuleOptions<A, Conditions>;
    readonly detectSubjectType: DetectSubjectType<Normalize<A>[1]>;
    /** @private hacky property to track Abilities type */
    readonly za: A;
    /** @private hacky property to track Conditions type */
    readonly zc: Conditions;
    constructor(rules?: RawRuleFrom<A, Conditions>[], options?: RuleIndexOptions<A, Conditions>);
    update(rules: RawRuleFrom<A, Conditions>[]): this;
    private _buildIndexFor;
    possibleRulesFor(...args: CanParameters<A, false>): Rule<A, Conditions>[];
    private _mergeRulesFor;
    rulesFor(...args: CanParameters<A>): Rule<A, Conditions>[];
    on<T extends keyof EventsMap<this, BaseEvent>>(event: T, handler: EventHandler<EventsMap<this, BaseEvent>[T]>): Unsubscribe;
    private _emit;
}
export {};
