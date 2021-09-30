import type { RuleConfig } from '../rule-config';

/**
 * disallow key of `<template v-for>` placed on child elements
 *
 * @see [no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html)
 */
export type NoVForTemplateKeyOnChildRuleConfig = RuleConfig<[]>;

/**
 * disallow key of `<template v-for>` placed on child elements
 *
 * @see [no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html)
 */
export interface NoVForTemplateKeyOnChildRule {
  /**
   * disallow key of `<template v-for>` placed on child elements
   *
   * @see [no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html)
   */
  'vue/no-v-for-template-key-on-child': NoVForTemplateKeyOnChildRuleConfig;
}