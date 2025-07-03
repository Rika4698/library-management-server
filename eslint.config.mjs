import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [
    ...tseslint.configs.recommended,
    eslint.configs.recommended,
  ],
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
  rules: {
    "no-unused-vars": "error",
    "no-unused-expressions": "error",
    "prefer-const": "error",
    "no-console": "warn",
    "no-undef": "error",
  },
  ignores: ["**/node_modules/", "**/dist/"],
});
