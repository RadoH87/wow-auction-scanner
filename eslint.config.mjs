//@ts-check - this version is working

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist/**"], // Ignorowanie plików w katalogu dist
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    rules: {
      "no-unused-vars": "warn",
      //"no-undef": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"], // Zmiana na podwójne cudzysłowy
      //"prettier/prettier": "error", // Integracja z Prettier
      "arrow-spacing": ["error", { before: true, after: true }], // Wymusza spacje przed i po strzałce
    },
  }
);
