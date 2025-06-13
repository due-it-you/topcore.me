import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    eslintConfigPrettier,
    plugins: {
      js,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
      "better-tailwindcss": {
        entryPoint: "src/App.css",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "error",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-boolean-value": "error",
      "react/jsx-curly-brace-presence": "error",
    },
    extends: [
      "js/recommended",
      pluginReact.configs.flat.recommended,
    ],
  },
]);


