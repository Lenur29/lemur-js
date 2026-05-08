import globals from 'globals';
import deepEslint, { defineConfig } from '@deepvision/eslint-plugin';

export default defineConfig([
  deepEslint.configs.node,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
]);
