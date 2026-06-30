import js from "@eslint/js"
import globals from "globals"

export default [
  {
    ignores: [
      "node_modules/**",
      "coverage/**",
      "build/**",
      "assets/**",
      "dist/**",
      "docs/**",
    ],
  },

  js.configs.recommended,

  {
    files: ["index.js", "tests/**/*.js"],
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "strict": ["error", "global"],
      "no-bitwise": "error",
      "no-new": "error",

      // Matches the old JSHint config's permissive choices:
      "no-debugger": "off",
      "no-eval": "off",
    },
  },
]