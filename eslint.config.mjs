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
			"@angular-eslint/directive-selector": [
				"error",
				{
					type: "attribute",
					prefix: "app",
					style: "camelCase",
				},
			],
			"@angular-eslint/consistent-component-styles": "error",

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
			"@angular-eslint/prefer-on-push-component-change-detection": "error",
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
