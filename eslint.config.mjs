import js from "@eslint/js";
import jasmine from "eslint-plugin-jasmine";
import globals from "globals";
import eslint from "@eslint/js";
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
			typescriptEslint,
		},
		// https://typescript-eslint.io/users/configs/#recommended-type-checked
		// Linting TypeScript files - recommended + strict + stylistic + type checked
		extends: [
			js.configs.recommended,
			eslint.configs.recommended,
			tseslint.configs.stylisticTypeChecked,
			tseslint.configs.strictTypeChecked,
			// js.configs.all,
			// eslint.configs.all,
			// tseslint.configs.all,
			// angular.configs.tsAll,
		],
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
			// js rule overrides
			"no-console": ["error", { allow: ["warn", "error"] }],

			// @typescript-eslint rule overrides
			"@typescript-eslint/no-extraneous-class": "warn", // Components can be empty, warn so I don't miss other cases
			"@typescript-eslint/explicit-function-return-type": "error",
			"@typescript-eslint/strict-boolean-expressions": "error",
			"@typescript-eslint/strict-boolean-expressions": "warn",

			// @angular-eslint rule overrides
			"@angular-eslint/no-developer-preview": "warn", // Warn on developer preview APIs
			"@angular-eslint/no-experimental": "warn", // Warn on experimental APIs
			"@angular-eslint/prefer-on-push-component-change-detection": "off", // Might only be worth implementing if ChangeDetection is experiencing poor performance - https://blog.angular-university.io/onpush-change-detection-how-it-works/
			// I'm not sure what the default is for this rule, but I want to enforce it
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
			"@angular-eslint/component-class-suffix": "off", // Don't have enough non-component classes to warrant this, handled by naming conventions
		},
	},
	{
		// Linting for Angular HTML templates
		files: ["src/app/**/*.html"],
		extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
		plugins: {
			angularEslint,
			angularEslintTemplate,
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
