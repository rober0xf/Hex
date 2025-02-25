import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],

		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/'],
		rules: {
			'@typescript-eslint/ban-ts-comment': ['warn'],
			'@typescript-eslint/no-var-requires': ['off'],
			'@typescript-eslint/no-unused-vars': ['warn'],
			'no-constant-condition': ['off'],
			'svelte/no-at-html-tags': ['off'],
			'svelte/invalid-css-identifier': ['off'],
			'svelte/valid-compile': ['off']
		}
	}
);
