import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import angularEslint from "@angular-eslint/eslint-plugin";

import tsParser from "@typescript-eslint/parser";

export default defineConfig([
	globalIgnores([".angular/", "dist/", "node_modules/", "eslint.config.mjs"]),
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
		plugins: {
			js,
			typescriptEslint,
			angularEslint,
			"@angular-eslint": angularEslint,
		},
		extends: ["js/recommended"],
		languageOptions: {
			globals: globals.browser,
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

			// TODO: from generated config, require double checking
			"@angular-eslint/directive-class-suffix": "error",
			"@angular-eslint/no-empty-lifecycle-method": "warn",

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
	// https://typescript-eslint.io/users/configs/#recommended-type-checked
	tseslint.configs.stylisticTypeChecked,
	tseslint.configs.strictTypeChecked,
]);

// import { defineConfig, globalIgnores } from "eslint/config";
// import typescriptEslint from "@typescript-eslint/eslint-plugin";
// import angularEslint from "@angular-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";
// import angularEslintTemplate from "@angular-eslint/eslint-plugin-template";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
// 	baseDirectory: __dirname,
// 	recommendedConfig: js.configs.recommended,
// 	allConfig: js.configs.all,
// });

// export default defineConfig([
// 	globalIgnores(["projects/**/*", ".angular/", "dist/", "node_modules/"]),
// 	{
// 		files: ["**/*.ts"],

// 		extends: compat.extends(
// 			"plugin:@angular-eslint/recommended",
// 			"plugin:@typescript-eslint/recommended",
// 			"plugin:prettier/recommended",
// 		),

// 		plugins: {
// 			"@typescript-eslint": typescriptEslint,
// 			"@angular-eslint": angularEslint,
// 		},

// 		languageOptions: {
// 			parser: tsParser,
// 			ecmaVersion: "latest",
// 			sourceType: "module",

// 			parserOptions: {
// 				project: ["./tsconfig.json", "src/app/**/*.ts"], // , "src/app/**/*.ts"
// 				createDefaultProgram: true,
// 			},
// 		},

// 		rules: {
// 			"@typescript-eslint/no-explicit-any": "warn",

// 			"@typescript-eslint/explicit-function-return-type": [
// 				"warn",
// 				{
// 					allowExpressions: true,
// 				},
// 			],

// 			"@typescript-eslint/strict-boolean-expressions": "warn",

// 			"no-console": [
// 				"warn",
// 				{
// 					allow: ["warn", "error"],
// 				},
// 			],

// 			"@angular-eslint/component-class-suffix": "error",
// 			"@angular-eslint/directive-class-suffix": "error",
// 			"@angular-eslint/no-empty-lifecycle-method": "warn",
// 		},
// 	},
// 	{
// 		files: ["**/*.html"],
// 		extends: compat.extends("plugin:@angular-eslint/template/recommended"),

// 		plugins: {
// 			"@angular-eslint/template": angularEslintTemplate,
// 		},

// 		rules: {},
// 	},
// ]);
