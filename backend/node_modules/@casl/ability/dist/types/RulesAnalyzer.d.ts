import { RawRuleFrom } from './RawRule';
import { Abilities, RuleOptions } from './types';
export default class RulesAnalyzer<A extends Abilities, C> {
    _isAllInverted: boolean;
    _hasPerFieldRules: boolean;
    _hasRuleWithEmptyFields: boolean;
    constructor(hasRules: boolean);
    _analyze({ fields, inverted }: RawRuleFrom<A, C>): void;
    _validate(ruleOptions: RuleOptions<A, C>): void;
}
