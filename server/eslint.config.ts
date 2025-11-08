import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import { jsdoc } from "eslint-plugin-jsdoc";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { configs } from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, "@stylistic": stylistic },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      eqeqeq: "error",
      curly: "error",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "no-constant-condition": "error",
      "no-fallthrough": "error",
      "no-redeclare": "error",
      "no-console": "warn",
      "no-unused-vars": "off",
      "@stylistic/lines-between-class-members": ["error", "always"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        { accessibility: "explicit" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
  },
  configs.recommended,
  jsdoc({
    config: "flat/recommended-typescript-error",
    rules: {
      "jsdoc/sort-tags": [
        "warn",
        {
          tagSequence: [
            {
              tags: [
                "description",
                "param",
                "returns",
                "throws",
                "deprecated",
                "example",
              ],
            },
          ],
        },
      ],
      "jsdoc/tag-lines": [
        "warn",
        "any",
        {
          startLines: 1,
        },
      ],
      "jsdoc/check-indentation": "warn",
      "jsdoc/check-alignment": "warn",
    },
  }),
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  eslintPluginPrettier,
  globalIgnores([
    "node_modules",
    "dist",
    "build",
    "prisma/*",
    "src/generated/**",
    "logs",
  ]),
]);
