import js from "@eslint/js";
import jasmine from "eslint-plugin-jasmine";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import angularEslint from "@angular-eslint/eslint-plugin";
import angularEslintTemplate from "@angular-eslint/eslint-plugin-template";

import tsParser from "@typescript-eslint/parser";

import angular from "angular-eslint";

export default defineConfig([
	// Ignore non-source code e.g. dist, node_modules, etc.
	globalIgnores([".angular/", "dist/", "node_modules/", "eslint.config.mjs"]),
	// Linting for Jasmine tests - i.e. support for *.spec.ts test files
	{
		files: ["**/*.spec.ts"],
		plugins: {
			jasmine,
		},
		extends: ["jasmine/recommended"],
		languageOptions: {
			globals: globals.jasmine,
		},
	},
	// Linting for Angular *.ts files
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
		plugins: {
			js,
			"@angular-eslint": angularEslint,
			"@typescript-eslint": typescriptEslint,
		},
		// https://typescript-eslint.io/users/configs/#recommended-type-checked
		// Linting TypeScript files - recommended + strict + stylistic + type checked
		extends: ["js/recommended", tseslint.configs.stylisticTypeChecked, tseslint.configs.strictTypeChecked, angular.configs.tsRecommended],
		processor: angular.processInlineTemplates,
		languageOptions: {
			globals: { ...globals.browser, ...globals.es2020, ...globals.node },
			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			// Fix enum declarations causing a false-positive for unused vars
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "error",

			// Fix error on components with no functionality
			"@typescript-eslint/no-extraneous-class": "off",

			// Angular rules - @angular-eslint
			// https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin/docs/rules
			"@angular-eslint/component-max-inline-declarations": "error",
			"@angular-eslint/component-selector": [
				"error",
				{
					type: "element",
					prefix: "app",
					style: "kebab-case",
				},
			],
			"@angular-eslint/consistent-component-styles": "error",
			"@angular-eslint/contextual-decorator": "error",
			"@angular-eslint/contextual-lifecycle": "error",
			"@angular-eslint/directive-selector": [
				"error",
				{
					type: "attribute",
					prefix: "app",
					style: "camelCase",
				},
			],
			"@angular-eslint/no-async-lifecycle-method": "error",
			"@angular-eslint/no-attribute-decorator": "error",
			"@angular-eslint/no-conflicting-lifecycle": "error",
			"@angular-eslint/no-developer-preview": "warn",
			"@angular-eslint/no-duplicates-in-metadata-arrays": "error",
			"@angular-eslint/no-empty-lifecycle-method": "error",
			"@angular-eslint/no-experimental": "warn",
			"@angular-eslint/no-forward-ref": "error",
			"@angular-eslint/no-input-prefix": ["error", { prefixes: ["on", "app", "ng"] }],
			"@angular-eslint/no-input-rename": "error",
			"@angular-eslint/no-inputs-metadata-property": "error",
			"@angular-eslint/no-lifecycle-call": "error",
			"@angular-eslint/no-output-native": "error",
			"@angular-eslint/no-output-on-prefix": "error",
			"@angular-eslint/no-output-rename": "error",
			"@angular-eslint/no-outputs-metadata-property": "error",
			"@angular-eslint/no-pipe-impure": "error",
			"@angular-eslint/no-queries-metadata-property": "error",
			"@angular-eslint/no-uncalled-signals": "error",
			"@angular-eslint/pipe-prefix": ["error", { prefixes: ["ng"] }],
			"@angular-eslint/prefer-inject": "error",
			// Might only be worth implementing if ChangeDetection is experiencing poor performance
			// https://blog.angular-university.io/onpush-change-detection-how-it-works/
			// "@angular-eslint/prefer-on-push-component-change-detection": "error",
			"@angular-eslint/prefer-output-emitter-ref": "warn", // not sure about this one, review on warn
			"@angular-eslint/prefer-output-readonly": "error",
			"@angular-eslint/prefer-signals": "warn", // not sure about this one, review on warn
			"@angular-eslint/prefer-standalone": "error",
			"@angular-eslint/relative-url-prefix": "error",
			"@angular-eslint/require-lifecycle-on-prototype": "error",
			// "@angular-eslint/require-localize-metadata": "error", // enable if using localisation
			// "@angular-eslint/runtime-localize": "error", // enable if using localisation
			"@angular-eslint/sort-keys-in-type-decorator": "error",
			"@angular-eslint/sort-lifecycle-methods": "error",
			"@angular-eslint/use-component-selector": "error",
			"@angular-eslint/use-component-view-encapsulation": "error",
			"@angular-eslint/use-injectable-provided-in": "error",
			"@angular-eslint/use-lifecycle-interface": "error",
			"@angular-eslint/use-pipe-transform-interface": "error",




			

			// TODO: from generated config, require double checking
			// "@angular-eslint/directive-class-suffix": "error",
			// "@angular-eslint/no-empty-lifecycle-method": "warn",

			// "@typescript-eslint/no-explicit-any": "warn",
			// "@typescript-eslint/explicit-function-return-type": [
			// 	"warn",
			// 	{
			// 		allowExpressions: true,
			// 	},
			// ],
			// "@typescript-eslint/strict-boolean-expressions": "warn",
			// "no-console": [
			// 	"warn",
			// 	{
			// 		allow: ["warn", "error"],
			// 	},
			// ],
		},
	},
	{
		// Linting for Angular HTML templates
		files: ["src/app/**/*.html"],
		extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
		plugins: {
			"@angular-eslint": angularEslint,
			"@angular-eslint/template": angularEslintTemplate,
		},
		rules: {
			"@angular-eslint/template/prefer-control-flow": "error",
		},
	},
	// Fix Express is not defined for server.ts file
	// TODO: Need a better lint than turning off for this file, shouldn't globals.node handle this?
	{
		files: ["src/server.ts"],
		rules: {
			"no-undef": "off",
			// "@/no-undef": "off",
		},
	},
]);
