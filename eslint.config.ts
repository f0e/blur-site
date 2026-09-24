import globals from "globals";
import path from "path";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import json from "@eslint/json";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import * as astroParser from "astro-eslint-parser";
import tailwind from "eslint-plugin-better-tailwindcss";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: [".astro/**", ".vscode", "dist", "public"],
  },

  // json
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: [json.configs.recommended],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    languageOptions: { allowTrailingCommas: true },
    extends: [json.configs.recommended],
  },

  // javascript/typescript
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: [js.configs.recommended],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser } },
  },

  tseslint.configs.recommended,

  // astro
  {
    plugins: { astro, "better-tailwindcss": tailwind },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    extends: [
      ...astro.configs.recommended.filter((c) => !c.files),
      ...astro.configs["jsx-a11y-strict"].filter((c) => !c.files),
    ],
    rules: {
      // enable all recommended rules to report a warning
      ...tailwind.configs["recommended-warn"].rules,
      // enable all recommended rules to report an error
      ...tailwind.configs["recommended-error"].rules,
      "better-tailwindcss/no-unknown-classes": [
        "warn",
        {
          ignore: [
            "not-prose",
            "requires-js",
            "fade-in",
            "hide-scrollbar",
            "dot",
          ],
        },
      ],
    },
    files: ["**/*.astro"],
    settings: {
      "better-tailwindcss": {
        entryPoint: path.resolve(__dirname, "src/styles/global.css"),
      },
    },
  },

  // prettier - must be last
  prettier,
);
