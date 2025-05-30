import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			'build',
			'.svelte-kit',
			'package',
			'.env',
			'.env.*',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		]
	},
	js.configs.recommended,
	{
		files: ['**/*.svelte'],
		plugins: { svelte },
		languageOptions: {
			parser: await import('svelte-eslint-parser'),
			parserOptions: {
				parser: {
					ts: '@typescript-eslint/parser'
				},
				extraFileExtensions: ['.svelte'],
				ecmaVersion: 'latest',
				sourceType: 'module'
			},
			globals: {
				fetch: 'readonly'
			}
		},
		processor: svelte.processors.svelte, // ✅ REQUIRED to support inline directives
		rules: {
			...svelte.configs.recommended.rules
		}
	},
	prettier
];
