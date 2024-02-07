/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['src/**/*.{js,jsx,ts,tsx,vue}'],
			rules: {
				'array-callback-return': 'error',
				'no-await-in-loop': 'error',
				'no-constant-binary-expression': 'error',
				'no-constructor-return': 'error',
				'no-duplicate-imports': 'error',
				'no-new-native-nonconstructor': 'error',
				'no-promise-executor-return': 'error',
				'no-self-compare': 'error',
				'no-template-curly-in-string': 'error',
				'no-unmodified-loop-condition': 'error',
				'no-unreachable-loop': 'error',
				'no-unused-private-class-members': 'error',
				'no-use-before-define': 'error',
				'require-atomic-updates': 'error',
				'accessor-pairs': 'warn',
				'arrow-body-style': 'warn',
				'block-scoped-var': 'warn',
				'camelcase': 'warn',
				'capitalized-comments': 'warn',
				'class-methods-use-this': 'warn',
				'complexity': 'warn',
				'consistent-return': 'warn',
				'consistent-this': 'warn',
				'curly': 'warn',
				'default-case': 'warn',
				'default-case-last': 'warn',
				'default-param-last': 'warn',
				'dot-notation': 'warn',
				'eqeqeq': 'warn',
				'func-name-matching': 'warn',
				'func-names': 'warn',
				'func-style': 'warn',
				'grouped-accessor-pairs': 'warn',
				'guard-for-in': 'warn',
				'id-denylist': 'warn',
				'id-length': 'warn',
				'id-match': 'warn',
				'init-declarations': 'warn',
				'logical-assignment-operators': 'warn',
				'max-classes-per-file': 'warn',
				'max-depth': 'warn',
				'max-lines': 'warn',
				'max-params': 'warn',
				'multiline-comment-style': 'warn',
				'new-cap': 'warn',
				'no-alert': 'warn',
				'no-array-constructor': 'warn',
				'no-bitwise': 'warn',
				'no-caller': 'warn',
				'no-console': 'warn',
				'no-continue': 'warn',
				'no-div-regex': 'warn',
				'no-else-return': 'warn',
				'no-empty-function': 'warn',
				'no-empty-static-block': 'warn',
				'no-eq-null': 'warn',
				'no-eval': 'warn',
				'no-extend-native': 'warn',
				'no-extra-bind': 'warn',
				'no-extra-label': 'warn',
				'no-implicit-coercion': 'warn',
				'no-implicit-globals': 'warn',
				'no-implied-eval': 'warn',
				'no-inline-comments': 'warn',
				'no-invalid-this': 'warn',
				'no-iterator': 'warn',
				'no-label-var': 'warn',
				'no-labels': 'warn',
				'no-lone-blocks': 'warn',
				'no-lonely-if': 'warn',
				'no-loop-func': 'warn',
				'no-magic-numbers': 'warn',
				'no-multi-assign': 'warn',
				'no-multi-str': 'warn',
				'no-negated-condition': 'warn',
				'no-nested-ternary': 'warn',
				'no-new': 'warn',
				'no-new-func': 'warn',
				'no-new-wrappers': 'warn',
				'no-object-constructor': 'warn',
				'no-octal-escape': 'warn',
				'no-param-reassign': 'warn',
				'no-plusplus': 'warn',
				'no-proto': 'warn',
				'no-restricted-exports': 'warn',
				'no-restricted-globals': 'warn',
				'no-restricted-imports': 'warn',
				'no-restricted-properties': 'warn',
				'no-restricted-syntax': 'warn',
				'no-return-assign': 'warn',
				'no-script-url': 'warn',
				'no-sequences': 'warn',
				'no-shadow': 'warn',
				'no-ternary': 'warn',
				'no-throw-literal': 'warn',
				'no-undef-init': 'warn',
				'no-undefined': 'warn',
				'no-underscore-dangle': 'warn',
				'no-unneeded-ternary': 'warn',
				'no-unused-expressions': 'warn',
				'no-useless-call': 'warn',
				'no-useless-computed-key': 'warn',
				'no-useless-concat': 'warn',
				'no-useless-constructor': 'warn',
				'no-useless-rename': 'warn',
				'no-useless-return': 'warn',
				'no-var': 'warn',
				'no-void': 'warn',
				'no-warning-comments': 'warn',
				'object-shorthand': 'warn',
				'one-var': 'warn',
				'operator-assignment': 'warn',
				'prefer-arrow-callback': 'warn',
				'prefer-const': 'warn',
				'prefer-destructuring': 'warn',
				'prefer-exponentiation-operator': 'warn',
				'prefer-named-capture-group': 'warn',
				'prefer-numeric-literals': 'warn',
				'prefer-object-has-own': 'warn',
				'prefer-object-spread': 'warn',
				'prefer-promise-reject-errors': 'warn',
				'prefer-regex-literals': 'warn',
				'prefer-rest-params': 'warn',
				'prefer-spread': 'warn',
				'prefer-template': 'warn',
				'radix': 'warn',
				'require-await': 'warn',
				'require-unicode-regexp': 'warn',
				'strict': 'warn',
				'symbol-description': 'warn',
				'vars-on-top': 'warn',
				'yoda': 'warn',
			},
		}
	],
};