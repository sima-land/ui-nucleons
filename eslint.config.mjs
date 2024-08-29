import simaland from '@sima-land/linters/eslint';

export default [
  ...simaland,

  // тесты
  {
    files: ['**/*.{test,spec}.*', 'docs/**/*.{ts,tsx}'],
    rules: {
      'jsdoc/require-jsdoc': 'off',
    },
  },
];
