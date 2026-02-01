import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    ignores: ["node_modules", "out", "dist", "examples", ".vscode"],
  },
);
