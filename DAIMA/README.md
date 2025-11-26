# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

## Tailwind & Editor Notes

If you open this repository's parent folder in VS Code (for example, `/path/to/DAIMA`),
the Tailwind CSS extension might not automatically detect the nested project at
`/path/to/DAIMA/DAIMA` because the `package.json` is in the nested folder.

To make the Tailwind extension and other tooling work properly, either:

- Open the nested project folder directly: `File -> Open Folder... -> DAIMA/DAIMA`
- Or add the `DAIMA/DAIMA` folder to your workspace (File -> Add Folder to Workspace).

This project uses a single canonical Tailwind config file located at
`DAIMA/DAIMA/tailwind.config.cjs`. Open the nested project folder (`DAIMA/DAIMA`)
for the best editor integration. For Tailwind v4 the PostCSS plugin must be
`@tailwindcss/postcss`. The project uses this by default in `postcss.config.cjs`.

If you still see VS Code showing errors like "Unknown at rule @tailwind" in
`src/index.css`, this is typically the built-in CSS language server warning
and not a runtime issue. To fix this in VS Code, either open the nested project
folder directly (recommended) or accept the workspace settings we've added which
silence the `unknownAtRules` diagnostic in CSS, Less, and Sass/SCSS:

```json
// in .vscode/settings.json
"css.lint.unknownAtRules": "ignore",
"less.lint.unknownAtRules": "ignore",
"scss.lint.unknownAtRules": "ignore",
```

We also recommend installing `tailwindlabs.tailwindcss-intellisense` (see
`.vscode/extensions.json`), so the extension handles completions and
diagnostics for Tailwind-specific syntax.
```
