import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type HtmlClosingBracketSpacingOption = {
  /**
   * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
   */
  startTag?: any;

  /**
   * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
   */
  endTag?: any;

  /**
   * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
   */
  selfClosingTag?: any;
};

/**
 * Options.
 */
export type HtmlClosingBracketSpacingOptions = [HtmlClosingBracketSpacingOption?];

/**
 * require or disallow a space before tag's closing brackets
 *
 * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
 */
export type HtmlClosingBracketSpacingRuleConfig = RuleConfig<HtmlClosingBracketSpacingOptions>;

/**
 * require or disallow a space before tag's closing brackets
 *
 * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
 */
export interface HtmlClosingBracketSpacingRule {
  /**
   * require or disallow a space before tag's closing brackets
   *
   * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
   */
  'vue/html-closing-bracket-spacing': HtmlClosingBracketSpacingRuleConfig;
}