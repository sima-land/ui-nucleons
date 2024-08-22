import simaland from '@sima-land/linters/eslint';

export default [
  ...simaland,

  // тесты
  {
    files: ['**/*.{test,spec}.*'],
    rules: {
      'jsdoc/require-jsdoc': 'off',
    },
  },
];
